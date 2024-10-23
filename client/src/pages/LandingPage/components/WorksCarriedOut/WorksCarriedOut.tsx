import { useTranslation } from 'react-i18next';
import { worksCarriedOut } from '../../../../utils';
import style from './worksCarriedOut.module.scss';

export const WorksCarriedOut = () => {

  const [translation] = useTranslation('global');
  return (
    <ul className={style.worksCarriedOut}>
            {
                worksCarriedOut(translation).map( ({description}, index) => (
                    <li key={index}>
                        <p>{description}</p>
                    </li>
                ))
            }
    </ul>
  )
}
