import React, { Component } from "react";
import dynamic from "next/dynamic";
const Tabs = dynamic(
  import("react-tabs").then((mod) => mod.Tabs),
  { ssr: false }
); // disable ssr
import { Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default () => (
  <section className="course__area pt-115 pb-120 grey-bg">
    <Tabs variant="enclosed" id="react-tabs-276">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xxl-7 col-xl-7 col-lg-7">
            <div className="section__title-wrapper mb-60">
              <h2 className="section__title">
                Encuentra el programa adecuado para ti
              </h2>
              <p>
                No tienes que luchar solo, tienes nuestra asistencia y ayuda.
              </p>
            </div>
          </div>
          <div className="col-xxl-5 col-xl-5 col-lg-5">
            <div className="course__menu d-flex justify-content-lg-end mb-60">
              <div className="masonary-menu filter-button-group">
                <a href="/course">Conocer todos los programas</a>
              </div>
            </div>
          </div>
        </div>
        <TabPanel>
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="course__item white-bg mb-30 fix">
                <div className="course__thumb w-img p-relative fix">
                  <img
                    src="assets/img/img_fucec/cursos.png"
                    alt="img not found"
                  />
                  <div className="course__tag">
                    <span>Cursos</span>
                  </div>
                </div>
                <div className="course__content">
                  <div className="course__meta d-flex align-items-center justify-content-between">
                    <div className="course__lesson">
                      <span>
                        <i className="fas fa-book"></i>40 horas
                      </span>
                    </div>
                  </div>
                  <h3 className="course__title">
                    Manejo de protocolos de Bioseguridad para personal de
                    servicios generales.
                  </h3>
                </div>
                <div className="course__more d-flex justify-content-between align-items-center">
                  <div className="course__status">
                    <span>Virtual</span>
                  </div>
                  <div className="course__btn">
                    <a
                      href="https://docs.google.com/document/d/1xBja2bBBfvnY9onSe0kB5dIrRn-7cB_N/edit"
                      target="_blank"
                      className="link-btn"
                    >
                      Descargar brochure
                      <i className="fas fa-arrow-right"></i>
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="course__item white-bg mb-30 fix">
                <div className="course__thumb w-img p-relative fix">
                  <img
                    src="assets/img/img_fucec/diplomado.png"
                    alt="img not found"
                  />

                  <div className="course__tag">
                    <span className="sky-blue">Diplomados</span>
                  </div>
                </div>
                <div className="course__content">
                  <div className="course__meta d-flex align-items-center justify-content-between">
                    <div className="course__lesson">
                      <span>
                        <i className="fas fa-book"></i>40 horas
                      </span>
                    </div>
                  </div>
                  <h3 className="course__title">Tipologias textuales</h3>
                </div>
                <div className="course__more d-flex justify-content-between align-items-center">
                  <div className="course__status d-flex align-items-center">
                    <span className="sky-blue">Virtual</span>
                  </div>
                  <div className="course__btn">
                    <a href="#" className="link-btn">
                      Descargar brochure
                      <i className="fas fa-arrow-right"></i>
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="course__item white-bg mb-30 fix">
                <div className="course__thumb w-img p-relative fix">
                  <img
                    src="assets/img/img_fucec/tecnica-agro.png"
                    alt="img not found"
                  />
                  <div className="course__tag">
                    <span className="yellow">Programas técnico laborales</span>
                  </div>
                </div>
                <div className="course__content">
                  <div className="course__meta d-flex align-items-center justify-content-between">
                    <div className="course__lesson">
                      <span>
                        <i className="fas fa-book"></i>1060 horas
                      </span>
                    </div>
                  </div>
                  <h3 className="course__title">
                    Técnico laboral en Agroturismo.
                  </h3>
                </div>
                <div className="course__more d-flex justify-content-between align-items-center">
                  <div className="course__status d-flex align-items-center">
                    <span className="yellow">Virtual</span>
                  </div>
                  <div className="course__btn">
                    <a href="#" className="link-btn">
                      Descargar brochure
                      <i className="fas fa-arrow-right"></i>
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="course__item white-bg mb-30 fix">
                <div className="course__thumb w-img p-relative fix">
                  <img
                    src="assets/img/img_fucec/informatica.png"
                    alt="img not found"
                  />
                  <div className="course__tag">
                    <span className="sky-blue">Diplomados</span>
                  </div>
                </div>
                <div className="course__content">
                  <div className="course__meta d-flex align-items-center justify-content-between">
                    <div className="course__lesson">
                      <span>
                        <i className="fas fa-book"></i>120 horas
                      </span>
                    </div>
                  </div>
                  <h3 className="course__title">
                    Herramientas informáticas para la dinamización de ambientes
                    virtuales.
                  </h3>
                </div>
                <div className="course__more d-flex justify-content-between align-items-center">
                  <div className="course__status d-flex align-items-center">
                    <span className="sky-blue">Virtual</span>
                  </div>
                  <div className="course__btn">
                    <a href="#" className="link-btn">
                      Descargar brochure
                      <i className="fas fa-arrow-right"></i>
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="course__item white-bg mb-30 fix">
                <div className="course__thumb w-img p-relative fix">
                  <img
                    src="assets/img/img_fucec/tecnica-energia.png"
                    alt="img not found"
                  />
                  <div className="course__tag">
                    <span className="yellow">Programas técnico laborales</span>
                  </div>
                </div>
                <div className="course__content">
                  <div className="course__meta d-flex align-items-center justify-content-between">
                    <div className="course__lesson">
                      <span>
                        <i className="fas fa-book"></i>1320 horas
                      </span>
                    </div>
                  </div>
                  <h3 className="course__title">
                    Técnico laboral en energía fotovoltaica.
                  </h3>
                </div>
                <div className="course__more d-flex justify-content-between align-items-center">
                  <div className="course__status d-flex align-items-center">
                    <span className="yellow">Virtual</span>
                  </div>
                  <div className="course__btn">
                    <a href="#" className="link-btn">
                      Descargar brochure
                      <i className="fas fa-arrow-right"></i>
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="course__item white-bg mb-30 fix">
                <div className="course__thumb w-img p-relative fix">
                  <img
                    src="assets/img/img_fucec/innovacion.png"
                    alt="img not found"
                  />
                  <div className="course__tag">
                    <span>Cursos</span>
                  </div>
                </div>
                <div className="course__content">
                  <div className="course__meta d-flex align-items-center justify-content-between">
                    <div className="course__lesson">
                      <span>
                        <i className="fas fa-book"></i>08 horas
                      </span>
                    </div>
                  </div>
                  <h3 className="course__title">
                    Taller de innovación y calidad.
                  </h3>
                </div>
                <div className="course__more d-flex justify-content-between align-items-center">
                  <div className="course__status d-flex align-items-center">
                    <span>Virtual</span>
                  </div>
                  <div className="course__btn">
                    <a href="#" className="link-btn">
                      Descargar brochure
                      <i className="fas fa-arrow-right"></i>
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      </div>
    </Tabs>
  </section>
);
