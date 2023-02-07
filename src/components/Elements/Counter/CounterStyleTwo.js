import React, { useState } from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';


const Counter = () => {

    const [isViewCount, setIsViewCount] = useState(false);

    const onVisibilityChange = isVisible => {
        if (isVisible) {
            setIsViewCount(!isViewCount);
        }
    }

    const counters = [
        {
            countIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37"><g id="Grupo_25" data-name="Grupo 25" transform="translate(0 16)"><path id="Trazado_44" data-name="Trazado 44" d="M18.5,21S37,21,37,16.375c0-5.55-9.019-11.562-18.5-11.562S0,10.825,0,16.375C0,21,18.5,21,18.5,21Zm0-37a9.247,9.247,0,0,1,9.25,9.25A9.247,9.247,0,0,1,18.5,2.5,9.247,9.247,0,0,1,9.25-6.75,9.247,9.247,0,0,1,18.5-16Z" fill="#6e8d50"/></g></svg>',
            countNum: 2000,
            countTitle: 'Estudiantes inscritos'
        },
        {
            countIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="32.375" height="37" viewBox="0 0 32.375 37"><g id="Grupo_26" data-name="Grupo 26" transform="translate(0 512)"><path id="Trazado_10" data-name="Trazado 10" d="M32.375-485.984v-24.281A1.73,1.73,0,0,0,30.641-512H6.938A6.939,6.939,0,0,0,0-505.063v23.125A6.939,6.939,0,0,0,6.938-475h23.7a1.73,1.73,0,0,0,1.734-1.734v-1.156a1.748,1.748,0,0,0-.643-1.351,16.115,16.115,0,0,1,0-5.4A1.722,1.722,0,0,0,32.375-485.984ZM9.25-502.316a.435.435,0,0,1,.434-.433H25a.435.435,0,0,1,.434.433v1.445a.435.435,0,0,1-.434.434H9.684a.435.435,0,0,1-.434-.434Zm0,4.625a.435.435,0,0,1,.434-.434H25a.435.435,0,0,1,.434.434v1.445a.435.435,0,0,1-.434.433H9.684a.435.435,0,0,1-.434-.433Zm18.312,18.066H6.938a2.31,2.31,0,0,1-2.313-2.312,2.319,2.319,0,0,1,2.313-2.313H27.562A26.016,26.016,0,0,0,27.562-479.625Z" transform="translate(0 0)" fill="#6e8d50"/></g></svg>',
            countNum: 20,
            countTitle: 'Programas de formación'
        },
        {
            countIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="37" height="27.189" viewBox="0 0 37 27.189"><g id="Grupo_27" data-name="Grupo 27" transform="translate(0 16.167)"><path id="Trazado_45" data-name="Trazado 45" d="M7.8-13.275a1.682,1.682,0,0,0,.472-1.168,1.69,1.69,0,0,0-1.682-1.682,1.682,1.682,0,0,0-1.168.472,18.5,18.5,0,0,0,0,26.162A1.682,1.682,0,0,0,7.8,8.131a15.142,15.142,0,0,1-4.433-10.7A15.142,15.142,0,0,1,7.8-13.275Zm23.784-2.378a1.683,1.683,0,0,0-1.21-.513,1.69,1.69,0,0,0-1.682,1.682,1.682,1.682,0,0,0,.513,1.21,15.142,15.142,0,0,1,4.433,10.7A15.142,15.142,0,0,1,29.2,8.131a1.682,1.682,0,1,0,2.378,2.378A18.5,18.5,0,0,0,31.581-15.653ZM12.553-8.519a1.682,1.682,0,0,0,.472-1.168,1.69,1.69,0,0,0-1.682-1.682,1.682,1.682,0,0,0-1.168.472A11.777,11.777,0,0,0,6.726-2.572a11.777,11.777,0,0,0,3.449,8.325,1.682,1.682,0,1,0,2.378-2.378,8.412,8.412,0,0,1-2.464-5.947A8.412,8.412,0,0,1,12.553-8.519ZM26.825-10.9a1.683,1.683,0,0,0-1.21-.513,1.69,1.69,0,0,0-1.682,1.682,1.682,1.682,0,0,0,.513,1.21,8.412,8.412,0,0,1,2.464,5.947,8.412,8.412,0,0,1-2.464,5.947,1.682,1.682,0,0,0,2.378,2.378,11.777,11.777,0,0,0,3.449-8.325A11.777,11.777,0,0,0,26.825-10.9ZM16.818-2.572A1.69,1.69,0,0,1,18.5-4.254a1.69,1.69,0,0,1,1.682,1.682A1.69,1.69,0,0,1,18.5-.89,1.69,1.69,0,0,1,16.818-2.572ZM18.5-7.617a5.07,5.07,0,0,0-5.045,5.045A5.069,5.069,0,0,0,18.5,2.473a5.069,5.069,0,0,0,5.045-5.045A5.07,5.07,0,0,0,18.5-7.617Z" transform="translate(0)" fill="#6e8d50" fill-rule="evenodd"/></g></svg>',
            countNum : 4000,
            countTitle: 'Estudiantes en línea'
        },
        {
            countIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37"><g id="Grupo_28" data-name="Grupo 28" transform="translate(0 20)"><path id="Trazado_46" data-name="Trazado 46" d="M18.5-20A18.521,18.521,0,0,0,0-1.5,18.521,18.521,0,0,0,18.5,17,18.521,18.521,0,0,0,37-1.5,18.521,18.521,0,0,0,18.5-20ZM3.7-1.5a14.706,14.706,0,0,1,.8-4.753L11.1.35v3.7L16.65,9.6v3.572A14.816,14.816,0,0,1,3.7-1.5ZM30.211,7.515A7.727,7.727,0,0,0,25.9,5.9V4.05A3.7,3.7,0,0,0,22.2.35H14.8V-5.2a3.7,3.7,0,0,0,3.7-3.7v-1.85h1.85a3.7,3.7,0,0,0,3.7-3.7v-.76A14.815,14.815,0,0,1,33.3-1.5,14.7,14.7,0,0,1,30.211,7.515Z" fill="#6e8d50"/></g></svg>',
            countNum : 200,
            countTitle: 'Estudiantes extranjeros'
        }
    ];

    return(
    <section className="counter__area pt-145 pb-100">
        <div className="container">
            <div className="row">
                <div className="col-xxl-6 offset-xl-3 col-xl-6 offset-xl-3">
                    <div className="section__title-wrapper text-center mb-60">
                        <h2 className="section__title">Estamos Orgullosos</h2>
                        <p>Algunos de nuestros números más recientes</p>
                    </div>
                </div>
            </div>
            {counters &&
            <div className="row">
                {counters.map( (counter, num) => (
                    <div key={num} className="col-xxl-2 offset-xxl-1 col-xl-2 offset-xl-1 col-lg-3 col-md-3 offset-md-0 col-sm-5 offset-sm-2">
                        <div className="counter__item mb-30">
                            <div className="counter__icon user mb-15">
                            <div dangerouslySetInnerHTML={{__html: counter.countIcon}}></div>
                            </div>
                            <div className="counter__content">
                            <h4 ><span className="plus-icon">+</span><span className="counter">
                                <VisibilitySensor onChange={onVisibilityChange} offset={{top:10}} delayedCall>
                                    <CountUp end={!isViewCount ? counter.countNum : 0} />
                                 </VisibilitySensor>
                                 </span></h4>
                            <p>{counter.countTitle}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            }
        </div>
    </section>
    )
}
export default Counter;