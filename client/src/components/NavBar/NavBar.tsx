import { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./navbar.module.scss";
import { useConfigStore } from "../../store/useConfigStore";

import { IoLogoInstagram, IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

import { RxCross2 } from "react-icons/rx";
import { RiMenu2Line } from "react-icons/ri";
import { menuNavbar } from "./menuNavbar";
import { Translation } from "../Translation/Translation";
import { useTranslation } from "react-i18next";

const scrollUp = () => window.scrollTo(0, 0);



export const NavBar = () => {

  const darkMode = useConfigStore(state => state.darkMode);
  const toggleDarkMode = useConfigStore(state => state.toggleDarkMode);

  const [open, setOpen] = useState(false);

  const [translation] = useTranslation('global');

  const close = () => {
    setOpen(false);
  }

  return (
    <div className={`${style.container}`}>
      <div className={style.container__wrapper}>
          <button className={style.container__wrapper_btnMovil} onClick={() => setOpen(prev => !prev)}>
            {
              open ? <RxCross2 /> : <RiMenu2Line />
            }
          </button>
        <ul className={style.container__wrapper__link} style={{left: open ? '0' : '-100%'  }}>
           {
            menuNavbar(translation).map(({title, path}, index) => (
              <li key={index}>
                <a href={`#${path}`} onClick={close}>{title}</a>
              </li>
            ))
          }
        </ul>
        <div className={style.container__wrapper__item}>
        <Translation
        
        />
        <a href="https://www.instagram.com/kmtraducciones/" target="_blank" >
            <IoLogoInstagram/> 
        </a>
          <button onClick={toggleDarkMode} className={style.container__wrapper__item_btnMode}>
              {
                darkMode ? <IoSunnyOutline /> :  <IoMoonOutline/>
              }
          </button>
        </div>
      </div>
    </div>
  );
};
