import { worksCarriedOut } from '../../../../utils';
import style from './worksCarriedOut.module.scss';

export const WorksCarriedOut = () => {
  return (
    <ul className={style.worksCarriedOut}>
            {
                worksCarriedOut.map( ({number, description}, index) => (
                    <li key={index}>
                        <h2>{number}</h2>
                        <p>{description}</p>
                    </li>
                ))
            }
    </ul>
  )
}
