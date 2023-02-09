import React, { Component } from "react";
import Link from "next/link";

class About extends Component {
  render() {
    return (
      <section className="about__area pt-90 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-5 offset-xxl-1 col-xl-6 col-lg-6">
              <div className="about__thumb-wrapper">
                <div className="about__review">
                  <h5>
                    Más de
                    <span>
                      {" "}
                      8 años de <br /> experiencia
                    </span>{" "}
                    nos respaldan.
                  </h5>
                </div>
                <div className="about__thumb ml-100">
                  <img
                    src="assets/img/img_fucec/Rectángulo 21.png"
                    alt="img not found"
                  />
                </div>
                <div className="about__banner mt--210">
                  <img
                    src="assets/img/img_fucec/Rectángulo 22.png"
                    alt="img not found"
                  />
                </div>
                <div className="about__student ml-270 mt--80">
           
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
                    
                  <p>Únase a más de +4K estudiantes.</p>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="about__content pl-70 pr-60 pt-25">
                <div className="section__title-wrapper mb-25">
                  <h2 className="section__title">Alcanza tu metas con FUCEC</h2>
                  <p>
                    Somos una institución educativa que procura llevar
                    conocimiento y formación en las diferentes áreas del saber,
                    con calidad y en condiciones accesibles a todas las
                    personas.
                  </p>
                </div>
                <div className="about__list mb-35">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i className="fas fa-check-circle"></i> Fácil de usar y a tu
                      ritmo
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="fas fa-check-circle"></i> Accede a más de 20
                      programas en línea
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="fas fa-check-circle"></i> Aprende de una manera
                      dinámica
                    </li>
                  </ul>
                </div>
                <Link href="/about">
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

export default About;
