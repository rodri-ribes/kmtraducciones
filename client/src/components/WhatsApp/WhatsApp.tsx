import { FaWhatsapp } from 'react-icons/fa';
import style from './whatsapp.module.scss';

export const WhatsApp = () => {
  return (
    <div className={style.container}>
      <a href={`https://wa.me/${import.meta.env.VITE_PHONE}?text=Hola%20Karina,%20`}>
        <FaWhatsapp className={style.icon} />
        <p>Hablemos por <b>WhatsApp</b> !</p>
      </a>
    </div>
  );
};