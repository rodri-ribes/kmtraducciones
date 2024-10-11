import style from "./header.module.scss";

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.header__content}>
        <h1>KMTraducciones</h1>
        <img src="./images/logo.png" alt="image" />
        <p>
          KMTraducciones es una agencia de traducción profesional ubicada en
          Buenos Aires, Argentina, que ofrece servicios de traducción, así como
          también de edición y corrección de textos, en idioma inglés y español.
          <br/><br/>Con el paso de los años, hemos colaborado con el crecimiento de muchas
          empresas tanto nacionales como internacionales ofreciendo un servicio
          profesional de calidad adaptado a cada proyecto de traducción.<br/><br/> Nuestro
          objetivo es hacer que el cliente supere los obstáculos que un idioma
          extranjero le pueda presentar dentro del ámbito laboral y personal.
        </p>
        <a href="#contact">Contacto</a>
      </div>
      <div className={style.header__image}></div>
    </header>
  );
};
