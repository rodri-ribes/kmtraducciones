import style from './header.module.scss';

export const Header = () => {
  return (
    <header className={style.header}>
        <div className={style.header__content}>
            <h1>KMTraducciones</h1>
            <img src="./images/1.jpeg" alt="image" />
            <p>Soy Karina Maril, Ayudo a empresas y profesionales a superar barreras lingüísticas con servicios de traducción precisos y adaptados a sus necesidades. Ya sea en el ámbito laboral o personal, ofrezco soluciones lingüísticas que garantizan una comunicación fluida y efectiva a nivel global. ¡Lleva tu mensaje al siguiente nivel sin importar el idioma!</p>
            <a href='#contact'>Contactame!</a>
        </div>
        <div className={style.header__image}></div>
    </header>
  )
}
