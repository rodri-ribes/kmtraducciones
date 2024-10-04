import style from './landingPage.module.scss'

import { projects } from '../../utils';
import { Carousel } from '../../components/Carousel/Carousel';
import { Form } from '../../modules/Form';
import { Header, WorksCarriedOut, Experience, Services } from './components';


export const LandingPage = () => {
  return (
    <div className={style.landing}>

        <Header/>

        <WorksCarriedOut/>

        <Experience/>

        <div className={style.landing__projects} id='jobs'>
            <h2>TRABAJOS</h2>
            <Carousel
                array={projects}
                swiperOptions={{
                    slidesPerView: 6,
                    spaceBetween: 30,
                }}
            />
        </div>
        
        <Services/>

        <div className={style.landing__form} id='contact'>
            <h2>Contactame</h2>
            <p>Contáctanos para obtener una cotización o resolver cualquier duda. Estamos aquí para ayudarte a comunicarte sin barreras.</p>
            <Form/>
        </div> 
    </div>
  )
}
