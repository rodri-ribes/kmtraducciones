import style from './experience.module.scss';

export const Experience = () => {
  return (
    <div className={style.experience} id='about'>
        <div className={style.experience__wrapper}>
            <div className={style.experience__wrapper__years}>
                <h2>16</h2>
                <b>Años de Experiencia</b>
                <p>En 2008 empecé mi propio proyecto como traductora freelance en KMTraducciones.</p>
            </div>
            <div className={style.experience__wrapper__image}>
                <img src="./images/2.jpeg" alt="" />
            </div>
            <div className={style.experience__wrapper__presentation}>
                <b>Mi nombre es Karina Maril. Soy traductora pública de inglés egresada de la Universidad de Buenos Aires (UBA).</b>
                <p>Con el paso de los años, he colaborado con el crecimiento de muchas empresas tanto nacionales como internacionales ofreciendo un servicio profesional de calidad adaptado a cada proyecto de traducción. Mi objetivo es hacer que el cliente supere los obstáculos que un idioma extranjero le pueda presentar dentro del ámbito laboral y personal.</p>
                <a href='#contact'>Contactame!</a>
            </div>
        </div>
    </div>
  )
}
