import { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./navbar.module.scss";
import { useConfigStore } from "../../store/useConfigStore";
import siteConfig from "../../config/siteConfig";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
// import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { RiMenu2Line } from "react-icons/ri";
import { menuNavbar } from "./menuNavbar";
// import { IconType } from "react-icons";
// import { FaRegUser } from "react-icons/fa";
// import { PopupMenu } from "../PopupMenu/PopupMenu";



// interface DropdownProps {
//   title: string;
//   menu: {
//     title: string;
//     path: string;
//   }[];
//   close: () => void;
// }

const scrollUp = () => window.scrollTo(0, 0);

// const DropdownLinks = ({ title, menu, close }: DropdownProps) => {
//   return (
//     <li className={style.container__wrapper__link__dropdownmenu}>
//       <label>
//         <span>{title} </span>  
//         <IoIosArrowDown/>
//       </label>
//       <ul>
//         {menu.map((item) => (
//           <li key={item.path} onClick={() => {
//             close();
//             scrollUp();
//           }}>
//             <NavLink to={item.path}>{item.title}</NavLink>
//           </li>
//         ))}
//       </ul>
//     </li>
//   );
// };


// interface Props {
//   title: string;
//   dropdownmenu?: {
//     title: string;
//     menu: {
//       title: string;
//       path: string;
//     }[];
//   };
//   links?: {
//     title: string;
//     path: string;
//   }[];
//   buttonDarkMode?: boolean;
//   search?: boolean;
//   profile?: {
//     name: string;
//     icon: IconType;
//     path: string;
//   }
// }

export const NavBar = () => {

  const darkMode = useConfigStore(state => state.darkMode);
  const toggleDarkMode = useConfigStore(state => state.toggleDarkMode);

  const [open, setOpen] = useState(false)

  // const [showMenu, setShowMenu] = useState<boolean>(false)

  // const [showSearch, setShowSearch] = useState<boolean>(false);


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
        <div className={style.container__wrapper__logo}>
          <NavLink to={''} onClick={scrollUp}>KMT</NavLink>
        </div>
        <ul className={style.container__wrapper__link} style={{left: open ? '0' : '-100%'  }}>
          {/* <DropdownLinks title="Servicios" close={close} menu={links.services}/> */}
          {
            menuNavbar.map(({title, path}, index) => (
              <li key={index}>
                <a href={`#${path}`} onClick={close}>{title}</a>
              </li>
            ))
          }
        </ul>

      

        <div className={style.container__wrapper__item}>
          
          {/* <button onClick={() => setShowSearch(prev => !prev)} className={style.container__wrapper__item_search}>
            {
              showSearch? <RxCross2 /> : <IoSearch/>
            }
          </button>

          <button id="dropdownmenu"  onClick={() => setShowMenu(prev => !prev)} className={style.container__wrapper__item_user}>
            <FaRegUser id="dropdownmenu" /> 
          </button> */}

          <button onClick={toggleDarkMode} className={style.container__wrapper__item_btnMode}>
            {
              darkMode ? <IoSunnyOutline /> :  <IoMoonOutline/>
            }
          </button>

            {/* {
              showMenu &&
              <DropdownMenu
                setShowMenu={setShowMenu}
                menu={[
                  { title: "Cerrar Sesión", icon: IoSearch, path: "/" },
                  { title: "Cambiar Contraseña", icon: IoSearch, path: "/" },
                  { title: "Mi Perfil", icon: IoSearch,  path: "/" },
                ]} 
              />
            } */}
        </div>
      </div>
    </div>
  );
};
