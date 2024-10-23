import { useTranslation } from "react-i18next";
import style from "./experience.module.scss";

export const Experience = () => {
  const [translation] = useTranslation("global");

  return (
    <div className={style.experience} id="about">
      <div className={style.experience__wrapper}>
        <div className={style.experience__wrapper__years}>
          <h2>16</h2>
          <b>{translation("experience.year-experience")}</b>
          <p>
            {translation("experience.oneText")}{" "}
            <a
              href="https://www.traductores.org.ar/traductor/maril-karina-soledad/"
              target="__blank"
            >
              (CTPCBA)
            </a>
            {translation("experience.oneTextTwo")}
          </p>
        </div>
        <div className={style.experience__wrapper__image}>
          <img src="./images/1.jpeg" alt="karina maril" />
        </div>
        <div className={style.experience__wrapper__presentation}>
          <b>{translation("experience.twoText")}</b>
          <p>{translation("experience.threeText")}</p>
          <a href="#contact" className="contact">{translation("button-contact")}</a>
        </div>
      </div>
    </div>
  );
};
