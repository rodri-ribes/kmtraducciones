import { FaWhatsapp } from 'react-icons/fa';
import style from './whatsapp.module.scss';
import { useTranslation } from 'react-i18next';

export const WhatsApp = () => {
  const [translation] = useTranslation('global');
  return (
    <div className={style.container}>
      <a href={`https://wa.me/${import.meta.env.VITE_PHONE}?text=Hola%20Karina,%20`}>
        <FaWhatsapp className={style.icon} />
        <p>{translation("whatsapp")}</p>
      </a>
    </div>
  );
};