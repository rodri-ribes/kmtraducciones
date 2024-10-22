import style from './footer.module.scss';
import siteConfig from '../../config/siteConfig';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const [translation] = useTranslation('global');
  return (
    <div className={style.container}>
      <div className={style.container__wrapper}>
          <div className={style.container__wrapper__logo}>
            <h1>{siteConfig.name} - Breaking the language barriers</h1>
            <p>© {new Date().getFullYear()} KMTraducciones. {translation("footer.copy")}</p>
          </div>
          <br />
          <p>{translation("footer.designer.oneText")}<a href="https://ribes-apps.vercel.app/" target='_blank' > Ribes-Apps</a>, {translation("footer.designer.twoText")}</p>
      </div>
    </div>
  )
}
