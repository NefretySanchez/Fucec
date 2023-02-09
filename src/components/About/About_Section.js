import React, { Component } from "react";
import Link from "next/link";

class AboutSection extends Component {
  render() {
    return (
      <section className="about__area pt-90 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-5 offset-xxl-1 col-xl-6 col-lg-6">
              <div className="about__thumb-wrapper">
                <div className="about__review">
                  <h5>
                    <span>
                      Resolución No. 4363 de 2021
                      <br />
                    </span>{" "}
                    Departamento de Bolívar
                  </h5>
                </div>
                <div className="about__thumb ml-100">
                  <img
                    src="assets/img/img_fucec/udc.png"
                    alt="img not found"
                  />
                </div>
                <div className="about__banner mt--210">
                  <img
                    src="assets/img/img_fucec/estudiante.png"
                    alt="img not found"
                  />
                </div>
                <div className="about__student ml-270 mt--80">
                  <Link href="/course-details">
                    <a>
                      <img
                        src="assets/img/img_fucec/Elipse 6.png"
                        alt="img not found"
                      />
                      <img
                        src="assets/img/img_fucec/Elipse 7.png"
                        alt="img not found"
                      />
                      <img
                        src="assets/img/img_fucec/Elipse 8.png"
                        alt="img not found"
                      />
                      <img
                        src="assets/img/img_fucec/Elipse 9.png"
                        alt="img not found"
                      />
                    </a>
                  </Link>
                  <p>Únase a más de +4K estudiantes.</p>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="about__content pl-30">
                <div className="section__title-wrapper mb-25">
                  <h2 className="section__title">
                    Fundación centro de estudios La Candelaria
                  </h2>
                  <p>
                    Somos una institución educativa sin ánimo de lucro, fundada
                    en el año 2011, modificada en su razón social en el año
                    2020, que busca llevar el conocimiento con calidad y
                    accesibilidad en las diferentes áreas del saber,
                    centrándonos en valores como:
                  </p>
                </div>
                <div className="about__list mb-20">
                  <ul>
                    <li>
                      <i className="fas fa-check-circle"></i>{" "}
                      <span>Compromiso </span> con el conocimiento con
                      objetividad.
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>{" "}
                      <span>Honestidad,</span> respetando los derechos y
                      trabajando por el bien común.
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>{" "}
                      <span>Respeto</span> a todos nuestros estudiantes y
                      docentes, exaltando sus virtudes.
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>{" "}
                      <span>Imparcialidad,</span> buscando siempre la protección
                      de los derechos de las personas.
                    </li>
                  </ul>
                </div>
                <Link href="#portafolio">
                  <a className="e-btn e-btn-border">Saber más</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutSection;
