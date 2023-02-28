import React, { Component } from "react";
import dynamic from "next/dynamic";
const Tabs = dynamic(
  import("react-tabs").then((mod) => mod.Tabs),
  { ssr: false }
);
import { Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PaginationSection from "../../Common/Pagination";

export default () => (
  <section className="course__area pt-120 pb-120">
    <Tabs>
      <div className="container">
        <div className="course__tab-inner grey-bg-2 mb-50">
          <div className="row align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div className="course__tab-wrapper d-flex align-items-center">
                <div className="course__tab-btn">
                  <TabList>
                    <Tab>
                      <button
                        className="nav-link active"
                        id="grid-tab"
                        type="button"
                      >
                        <svg className="grid" viewBox="0 0 24 24">
                          <rect
                            x="3"
                            y="3"
                            className="st0"
                            width="7"
                            height="7"
                          />
                          <rect
                            x="14"
                            y="3"
                            className="st0"
                            width="7"
                            height="7"
                          />
                          <rect
                            x="14"
                            y="14"
                            className="st0"
                            width="7"
                            height="7"
                          />
                          <rect
                            x="3"
                            y="14"
                            className="st0"
                            width="7"
                            height="7"
                          />
                        </svg>
                      </button>
                    </Tab>
                    <Tab>
                      <button
                        className="nav-link list"
                        id="list-tab"
                        type="button"
                      >
                        <svg className="list" viewBox="0 0 512 512">
                          <g id="Layer_2_1_">
                            <path
                              className="st0"
                              d="M448,69H192c-17.7,0-32,13.9-32,31s14.3,31,32,31h256c17.7,0,32-13.9,32-31S465.7,69,448,69z"
                            />
                            <circle className="st0" cx="64" cy="100" r="31" />
                            <path
                              className="st0"
                              d="M448,225H192c-17.7,0-32,13.9-32,31s14.3,31,32,31h256c17.7,0,32-13.9,32-31S465.7,225,448,225z"
                            />
                            <circle className="st0" cx="64" cy="256" r="31" />
                            <path
                              className="st0"
                              d="M448,381H192c-17.7,0-32,13.9-32,31s14.3,31,32,31h256c17.7,0,32-13.9,32-31S465.7,381,448,381z"
                            />
                            <circle className="st0" cx="64" cy="412" r="31" />
                          </g>
                        </svg>
                      </button>
                    </Tab>
                  </TabList>
                </div>
                <div className="course__view">
                  <h4>Viendo 1 - 3 de 10</h4>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div className="course__sort d-flex justify-content-sm-end">
                <div className="course__sort-inner">
                  <select>
                    <option>Todos</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-12">
            <div className="course__tab-conent">
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
                          <span className="yellow">
                            Programas técnico laborales
                          </span>
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
                          Herramientas informáticas para la dinamización de
                          ambientes virtuales.
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
                          <span className="yellow">
                            Programas técnico laborales
                          </span>
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
                          Herramientas informáticas para la dinamización de
                          ambientes virtuales.
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
                          <span className="yellow">
                            Programas técnico laborales
                          </span>
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
          </div>
        </div>
        <PaginationSection />
      </div>
    </Tabs>
  </section>
);
