import { useTranslation } from 'react-i18next';
import { myServiceIncludes } from '../../../../utils';
import style from './services.module.scss';

export const Services = () => {
    const [translation] = useTranslation('global');

  return (
    <div className={style.services} id='services'>
    <h2>{translation("services.title")}</h2>
    <ul>
        {
            myServiceIncludes(translation).map(({title, description, Icon}, index) => (
                <li key={index}>
                    <header>
                        <Icon/>
                        <b>{title}</b>
                    </header>
                    <p>{description}</p>
                </li>
            ))
        }
    </ul>
</div>
  )
}
