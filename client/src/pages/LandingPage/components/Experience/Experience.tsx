import style from './experience.module.scss';

export const Experience = () => {
  return (
    <div className={style.experience} id='about'>
        <div className={style.experience__wrapper}>
            <div className={style.experience__wrapper__years}>
                <h2>16</h2>
                <b>Años de Experiencia</b>
                <p>Mi nombre es Karina Maril. Soy Traductora Pública de Inglés matriculada en el Colegio de Traductores Públicos de la Ciudad de Buenos Aires y ayudo a empresas y profesionales a superar las barreras lingüísticas con servicios de traducción precisos y adaptados a sus necesidades.</p>
            </div>
            <div className={style.experience__wrapper__image}>
                <img src="./images/1.jpeg" alt="" />
            </div>
            <div className={style.experience__wrapper__presentation}>
                <b>En 2008 empecé mi propio proyecto como traductora freelance en KMTraducciones.</b>
                <p>En la actualidad, trabajo con el respaldo de un equipo de traductores profesionales que se especializa en cada área específica. Creamos glosarios y utilizamos memorias de traducción para respetar el vocabulario técnico de cada empresa y garantizamos la máxima confidencialidad de la información que recibimos.</p>
                <a href='#contact'>Contacto</a>
            </div>
        </div>
    </div>
  )
}
