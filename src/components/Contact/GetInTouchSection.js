import React, { Component } from "react";

class GetInTouch extends Component {
  render() {
    return (
      <section className="contact__area pt-115 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-7 col-xl-7 col-lg-6">
              <div className="contact__wrapper">
                <div className="section__title-wrapper mb-40">
                  <h2 className="section__title">Cuéntanos tus inquietudes</h2>
                  <p>
                    Nuestros asesores atenderán tu solicitud en el menos tiempo
                    posible.
                  </p>
                </div>
                <div className="contact__form">
                  <form action="assets/mail.php">
                    <div className="row">
                      <div className="col-xxl-6 col-xl-6 col-md-6">
                        <div className="contact__form-input">
                          <input
                            type="text"
                            placeholder="Correo electrónico"
                            name="name"
                          />
                        </div>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-md-6">
                        <div className="contact__form-input">
                          <input
                            type="email"
                            placeholder="Teléfono/Celular"
                            name="email"
                          />
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="contact__form-input">
                          <input
                            type="text"
                            placeholder="Nombre completo"
                            name="subject"
                          />
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="contact__form-input">
                          <textarea
                            placeholder="Mensaje"
                            name="message"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="contact__form-agree  d-flex align-items-center mb-20">
                          <input
                            className="e-check-input"
                            type="checkbox"
                            id="e-agree"
                          />
                          <label className="e-check-label" htmlFor="e-agree">
                            Acepto los{" "}
                            <a href="#">
                              términos y condiciones de tratamiento de datos.
                            </a>
                          </label>
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="contact__btn">
                          <button type="submit" className="e-btn">
                            Enviar mensaje
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 offset-xxl-1 col-xl-4 offset-xl-1 col-lg-5 offset-lg-1">
              <div className="contact__info white-bg p-relative z-index-1">
                <div className="contact__shape">
                  <img
                    className="contact-shape-1"
                    src="assets/img/img_fucec/Elipse 29.png"
                    alt="img not found"
                  />
                  <img
                    className="contact-shape-2"
                    src="assets/img/img_fucec/Grupo 56.png"
                    alt="img not found"
                  />
                  <img
                    className="contact-shape-3"
                    src="assets/img/img_fucec/Grupo 79.png"
                    alt="img not found"
                  />
                </div>
                <div className="contact__info-inner white-bg">
                  <ul>
                    <li>
                      <div className="contact__info-item d-flex align-items-start mb-35">
                        <div className="contact__info-icon mr-15">
                          <svg
                            id="Grupo_83"
                            data-name="Grupo 83"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="20"
                            viewBox="0 0 18.525 23.818"
                          >
                            <path
                              id="Trazado_71"
                              data-name="Trazado 71"
                              d="M9.644-12.3l.107-.077c.067-.049.163-.121.285-.214.243-.187.588-.461,1-.814a28.716,28.716,0,0,0,3.027-3c2.188-2.531,4.462-6.144,4.462-10.274a9.34,9.34,0,0,0-2.712-6.584A9.237,9.237,0,0,0,9.263-36,9.237,9.237,0,0,0,2.712-33.27,9.34,9.34,0,0,0,0-26.686c0,4.13,2.273,7.743,4.462,10.274a28.716,28.716,0,0,0,3.027,3c.413.353.758.627,1,.814l.391.292A.663.663,0,0,0,9.644-12.3ZM9.6-12.37l.048.067Zm2.975-14.367a3.308,3.308,0,0,1-3.308,3.308,3.308,3.308,0,0,1-3.308-3.308,3.308,3.308,0,0,1,3.308-3.308A3.308,3.308,0,0,1,12.571-26.737Z"
                              transform="translate(0 36)"
                              fill="#2745fb"
                              fill-rule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="contact__info-text">
                          <h4>Nuestras sedes</h4>
                          <p>
                            <a
                              target="_blank"
                              href="https://goo.gl/maps/xczvC2Tj6ZRqoZ8a7"
                            >
                              Sede Principal
                            </a>
                          </p>
                          <p>
                            <a
                              target="_blank"
                              href="https://goo.gl/maps/Gv29qaMrhgzZrpXu9"
                            >
                              Sede Arjona
                            </a>
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="contact__info-item d-flex align-items-start mb-35">
                        <div className="contact__info-icon mr-15">
                          <svg
                            id="Grupo_84"
                            data-name="Grupo 84"
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24.605 23.818"
                          >
                            <path
                              id="Trazado_72"
                              data-name="Trazado 72"
                              d="M2.46-10.305,12.3-4.154l9.842-6.151L12.3-16.457Zm22.144,0V2a2.472,2.472,0,0,1-2.46,2.46H2.46A2.472,2.472,0,0,1,0,2v-12.3a2.45,2.45,0,0,1,1.193-2.1L12.3-19.36l11.109,6.951A2.45,2.45,0,0,1,24.6-10.305Z"
                              transform="translate(0 19.36)"
                              fill="#2745fb"
                            />
                          </svg>
                        </div>
                        <div className="contact__info-text">
                          <h4>Correo electrónico</h4>
                          <p>
                            <a
                              href="mailto:gerencia@fucec.com.co"
                              target="_blank"
                            >
                              gerencia@fucec.com.co
                            </a>
                          </p>
                          <p>
                            <a
                              href="mailto:coordinacionacademica@fucec.com.co"
                              target="_blank"
                            >
                              coordinacionacademica@fucec.com.co
                            </a>
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="contact__info-item d-flex align-items-start mb-35">
                        <div className="contact__info-icon mr-15">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24.851 24.851"
                          >
                            <path
                              id="Trazado_73"
                              data-name="Trazado 73"
                              d="M24.54-2.716a1.244,1.244,0,0,0-.895-.808l-7.455-1.7a1.243,1.243,0,0,0-1.143.323c-.174.162-.186.174-.994,1.715A12.317,12.317,0,0,1,8-9.265c1.578-.8,1.59-.8,1.752-.982a1.243,1.243,0,0,0,.323-1.143l-1.7-7.368a1.244,1.244,0,0,0-.808-.895,4.709,4.709,0,0,0-.895-.224A4.9,4.9,0,0,0,5.716-20,5.743,5.743,0,0,0,0-14.284,19.251,19.251,0,0,0,19.135,4.851,5.743,5.743,0,0,0,24.851-.865a5.935,5.935,0,0,0-.075-.944A5.39,5.39,0,0,0,24.54-2.716ZM13.668-12.545A3.745,3.745,0,0,1,17.4-8.817a1.248,1.248,0,0,0,1.243,1.243A1.248,1.248,0,0,0,19.88-8.817a6.242,6.242,0,0,0-6.213-6.213,1.248,1.248,0,0,0-1.243,1.243A1.248,1.248,0,0,0,13.668-12.545Zm0-4.97a8.739,8.739,0,0,1,8.7,8.7,1.248,1.248,0,0,0,1.243,1.243,1.248,1.248,0,0,0,1.243-1.243A11.236,11.236,0,0,0,13.668-20a1.248,1.248,0,0,0-1.243,1.243A1.248,1.248,0,0,0,13.668-17.515Z"
                              transform="translate(0 20)"
                              fill="#2745fb"
                            />
                          </svg>
                        </div>
                        <div className="contact__info-text">
                          <h4>Teléfonos</h4>
                          <p>
                            <a href="tel:6056600085" target="_blank">
                              605 660 0085
                            </a>
                          </p>
                          <p>
                            <a href="tel:(+57)3013712233" target="_blank">
                              (+57) 301 371 2233
                            </a>
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="contact__social pl-30">
                    <h4>Síguenos</h4>
                    <ul>
                        <li>
                          <a href="#">
                            <img
                              src="assets/img/img_fucec/Grupo 29.svg"
                              alt="img not found"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="assets/img/img_fucec/Grupo 106.svg"
                              alt="img not found"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="assets/img/img_fucec/Grupo 107.svg"
                              alt="img not found"
                            />
                          </a>
                        </li>
                      </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default GetInTouch;
