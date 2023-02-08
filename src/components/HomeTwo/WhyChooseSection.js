import React, { Component } from "react";
import Link from "next/link";

class WhyChoose extends Component {
  render() {
    return (
      <section className="why__area pt-125">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-5 offset-xxl-1 col-xl-5 offset-xl-1 col-lg-6 col-md-8">
              <div className="why__content pr-50 mt-40">
                <div className="section__title-wrapper mb-30">
                  <span className="section__sub-title">Llévanos contigo</span>
                  <h2 className="section__title">Conoce nuestro portafolio</h2>
                  <p>
                    Hemos desarrollado satisfactoriamente convenios y contratos
                    para procesos de formación con diferentes entidades públicas
                    y privadas a nivel nacional y regional.
                    <br />
                    No te quedes por fuera, <span>¡Anímate!</span>
                  </p>
                </div>
                <div className="why__btn">
                  <Link href="/contact">
                    <a className="e-btn e-btn-3 mr-30">Descargar brochure</a>
                  </Link>

                  <Link href="/about">
                    <a className="link-btn">
                      Ver cursos
                      <i className="fas fa-arrow-right"></i>
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-5 offset-xxl-1 col-xl-5 offset-xl-1 col-lg-6 offset-md-1 col-md-8">
              <div className="why__thumb">
                <img
                  src="assets/img/img_fucec/Grupo 52.png"
                  alt="img not found"
                />
                <img
                  className="why-green"
                  src="assets/img/img_fucec/Grupo 92.png"
                  alt="img not found"
                />
                <div
                  className="hero__promotion d-flex white-bg layer"
                  data-depth="0.1"
                >
                  <div className="hero__promotion-icon inspiration mr-10">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16.889"
                        height="19"
                        viewBox="0 0 16.889 19"
                      >
                        <path
                          id="Trazado_54"
                          data-name="Trazado 54"
                          d="M0-18H2.111V1H0Zm14.778,0H3.167V1H14.778a2.117,2.117,0,0,0,2.111-2.111V-15.889A2.117,2.117,0,0,0,14.778-18Zm-2.111,6.333H6.333v-1.056h6.333Zm0-2.111H6.333v-1.056h6.333Z"
                          transform="translate(0 18)"
                          fill="#fff"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="hero__promotion-text">
                    <h5>¡Lo logré!</h5>
                    <p>Tec. Agroturismo</p>
                  </div>
                </div>
                <div className="hero__mic">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22.405"
                      height="32.59"
                      viewBox="0 0 22.405 32.59"
                    >
                      <path
                        id="Trazado_53"
                        data-name="Trazado 53"
                        d="M6.114-483.091a2.038,2.038,0,0,0,.341,1.126l1.088,1.635a2.038,2.038,0,0,0,1.7.909h3.928a2.038,2.038,0,0,0,1.7-.909l1.088-1.635a2.036,2.036,0,0,0,.341-1.126l0-2.441H6.111ZM0-500.808a11.14,11.14,0,0,0,2.773,7.369A18.291,18.291,0,0,1,6.1-487.618c0,.017,0,.033.007.05H16.3c0-.017,0-.032.007-.05a18.291,18.291,0,0,1,3.323-5.821,11.14,11.14,0,0,0,2.773-7.369,11.2,11.2,0,0,0-11.237-11.2A11.156,11.156,0,0,0,0-500.808ZM11.2-505.9a5.1,5.1,0,0,0-5.092,5.092,1.018,1.018,0,0,1-1.018,1.018,1.018,1.018,0,0,1-1.018-1.018,7.137,7.137,0,0,1,7.129-7.129,1.018,1.018,0,0,1,1.018,1.018A1.018,1.018,0,0,1,11.2-505.9Z"
                        transform="translate(0 512.011)"
                        fill="#0f1034"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default WhyChoose;
