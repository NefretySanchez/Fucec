import React from "react";
import Link from "next/link";

const FooterStyleTwo = () => {
  return (
    <footer>
      <div className="footer__area ">
        <div className="footer__top pt-160 pb-40 footer-bg-2">
          <div className="container">
            <div className="row">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="footer__widget mb-50">
                  <div className="footer__widget-head mb-22">
                    <div className="footer__logo">
                      <Link href="#">
                        <a>
                          <img
                            src="assets/img/img_fucec/Grupo 24.svg"
                            alt="img not found"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="footer__widget-body footer__widget-body-2">
                    <p>
                      Somos una institución educativa que procura llevar
                      conocimiento y formación en las diferentes áreas del
                      saber, con calidad y en condiciones accesibles a todas las
                      personas.
                    </p>

                    <div className="footer__social">
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
              <div className="col-xxl-2 offset-xxl-1 col-xl-2 offset-xl-1 col-lg-3 offset-lg-0 col-md-2 offset-md-1 col-sm-5 offset-sm-1">
                <div className="footer__widget mb-50">
                  <div className="footer__widget-head mb-22">
                    <h3 className="footer__widget-title footer__widget-title-2">
                      Fucec
                    </h3>
                  </div>
                  <div className="footer__widget-body">
                    <div className="footer__link footer__link-2">
                      <ul>
                        <li>
                          <a href="/about">Nosotros</a>
                        </li>
                        <li>
                          <a href="/course">Formación</a>
                        </li>
                        <li>
                          <a href="/blog">Blog</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 col-xl-2 col-lg-2 offset-lg-0 col-md-3 offset-md-1 col-sm-6">
                <div className="footer__widget mb-50">
                  <div className="footer__widget-head mb-22">
                    <h3 className="footer__widget-title footer__widget-title-2">
                      Moodle
                    </h3>
                  </div>
                  <div className="footer__widget-body">
                    <div className="footer__link footer__link-2">
                      <ul>
                        <li>
                          <a href="#">Tu Moddle</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-6">
                <div className="footer__widget footer__pl-70 mb-50">
                  <div className="footer__widget-head mb-22">
                    <h3 className="footer__widget-title footer__widget-title-2">
                      Newsletter
                    </h3>
                  </div>
                  <div className="footer__widget-body">
                    <div className="footer__subscribe footer__subscribe-2">
                      <form action="#">
                        <div className="footer__subscribe-input mb-15">
                          <input type="email" placeholder="Escribe tu correo" />
                          <button type="submit">
                            <i className="fas fa-arrow-right"></i>
                            <i className="fas fa-arrow-right"></i>
                          </button>
                        </div>
                      </form>
                      <p>
                        Recibe las últimas noticias y actualizaciones
                        directamente en tu bandeja de entrada.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom footer__bottom-2 footer-bg-3">
          <div className="container">
            <div className="row">
              <div className="col-xxl-12">
                <div className="footer__copyright footer__copyright-2 text-center">
                  <p>
                    © 2022 Fucec, Todos los derechos reservados. Diseño y
                    DevLab:{" "}
                    <a href="https://felixestudiocreativo.com/" target="_blank">
                      Félix estudio creativo.{" "}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterStyleTwo;
