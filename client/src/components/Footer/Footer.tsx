import style from './footer.module.scss';
import siteConfig from '../../config/siteConfig';

export const Footer = () => {

  return (
    <div className={style.container}>
      <div className={style.container__wrapper}>
          <div className={style.container__wrapper__logo}>
            <h1>{siteConfig.name}</h1>
            <p>© {new Date().getFullYear()} KMTraducciones. <br />Todos los derechos reservados.</p>
          </div>
          <br />
          <p>Creado con pasión por <a href="https://ribes-apps.vercel.app/" target='_blank' >Ribes-Apps</a>. Transformamos ideas en experiencias.</p>
      </div>
    </div>
  )
}
