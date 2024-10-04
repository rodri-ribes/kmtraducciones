import { myServiceIncludes } from '../../../../utils';
import style from './services.module.scss';

export const Services = () => {
  return (
    <div className={style.services}>
    <h2>MIS SERVICIOS</h2>
    <ul>
        {
            myServiceIncludes.map(({title, description, Icon}, index) => (
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
