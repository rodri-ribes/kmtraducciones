import { useTranslation } from "react-i18next";
import style from "./header.module.scss";

export const Header = () => {

  const [translation] = useTranslation('global');

  return (
    <header className={style.header} id="home">
      <div className={style.header__content}>
        <h1>KMTraducciones</h1>
        <img src="./images/logo.png" alt="image" />
        <p>
          {translation("header.content.oneText")}
          <br/><br/>{translation("header.content.twoText")}<br/><br/> {translation("header.content.threeText")}
        </p>
        <a href="#contact" className="contact">{translation("button-contact")}</a>
      </div>
      <div className={style.header__image}></div>
    </header>
  );
};
