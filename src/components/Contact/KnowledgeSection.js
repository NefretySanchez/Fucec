import React, { Component } from "react";
import Link from "next/link";

class Knowledge extends Component {
  render() {
    return (
      <section className="contact__area grey-bg-2 border-bottom-gray pt-120 pb-90 p-relative fix">
        <div className="container">
          <div className="row">
            <div className="col-xxl-5 offset-xxl-1 col-xl-5 offset-xl-1 col-lg-5 offset-lg-1 col-md-6">
              <div className="contact__item text-center mb-30 transition-3 white-bg">
                <div className="contact__icon d-flex justify-content-center align-items-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                  >
                    <path
                      id="Trazado_70"
                      data-name="Trazado 70"
                      d="M59.429,22.571A4.571,4.571,0,0,1,64,27.143V40.857A9.143,9.143,0,0,1,54.857,50H9.143A9.143,9.143,0,0,1,0,40.857V27.143a4.571,4.571,0,1,1,9.143,0V40.857H54.857V27.143A4.571,4.571,0,0,1,59.429,22.571ZM32-14a4.571,4.571,0,0,1,4.571,4.571V11.535l5.91-5.91a4.571,4.571,0,1,1,6.465,6.465L32,29.036,15.053,12.09a4.571,4.571,0,0,1,6.465-6.465l5.91,5.91V-9.429A4.571,4.571,0,0,1,32-14Z"
                      transform="translate(0 14)"
                      fill="#2745fb"
                      fill-rule="evenodd"
                    />
                  </svg>
                </div>
                <div className="contact__content">
                  <h3 className="contact__title">Más sobre nosotros</h3>
                  <p>
                    Descarga nuestro brochure y conoce más de nuestra oferta
                    académica.
                  </p>
                  <Link href="#">
                    <a className="e-btn e-btn-border">Descargar Brochure</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5  col-lg-5 col-md-6">
              <div className="contact__item text-center mb-30 transition-3 white-bg">
                <div className="contact__icon d-flex justify-content-center align-items-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                  >
                    <path
                      id="Trazado_69"
                      data-name="Trazado 69"
                      d="M6.4-13.6H57.6V24.8H10.144L6.4,28.544V-13.6m0-6.4A6.391,6.391,0,0,0,.032-13.6L0,44,12.8,31.2H57.6A6.419,6.419,0,0,0,64,24.8V-13.6A6.419,6.419,0,0,0,57.6-20Zm6.4,32H38.4v6.4H12.8Zm0-9.6H51.2V8.8H12.8Zm0-9.6H51.2V-.8H12.8Z"
                      transform="translate(0 20)"
                      fill="#2745fb"
                    />
                  </svg>
                </div>
                <div className="contact__content">
                  <h3 className="contact__title">Asistencia personalizada</h3>
                  <p>
                    Usa esta sección para dudas, comentarios o si deseas
                    comunicarte con nuestros asesores.
                  </p>

                  <a
                    href="mailto:coordinacionacademica@fucec.com.co"
                    target="_blank"
                    className="e-btn e-btn-border"
                  >
                    Enviar mensaje
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Knowledge;
