import React, { Component } from "react";
import Link from "next/link";

class Service extends Component {
  render() {
    return (
      <section className="services__area pt-115 pb-40">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3">
              <div className="section__title-wrapper section-padding mb-60 text-center">
                <h2 className="section__title">
                  ¿Por qué somos tu mejor opción?
                </h2>
                <p>
                  No tienes que luchar solo, tienes nuestra asistencia y ayuda.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="services__item blue-bg-4 mb-30">
                <div className="services__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="47.111"
                    height="53"
                    viewBox="0 0 47.111 53"
                  >
                    <g
                      id="Grupo_37"
                      data-name="Grupo 37"
                      transform="translate(0 18)"
                    >
                      <path
                        id="Trazado_54"
                        data-name="Trazado 54"
                        d="M0-18H5.889V35H0Zm41.222,0H8.833V35H41.222a5.906,5.906,0,0,0,5.889-5.889V-12.111A5.906,5.906,0,0,0,41.222-18ZM35.333-.333H17.667V-3.278H35.333Zm0-5.889H17.667V-9.167H35.333Z"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                </div>
                <div className="services__content">
                  <h3 className="services__title">
                    <Link href="/about">
                      <a>
                      +20 programas
en línea
                      </a>
                    </Link>
                  </h3>
                  <p>Cursos y diplomados que abarcan todas las áreas del conocimiento.</p>

                  <Link href="/about">
                    <a className="link-btn-2">
                      <i className="fas fa-arrow-right"></i>
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="services__item pink-bg mb-30">
                <div className="services__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="54.512"
                    height="53"
                    viewBox="0 0 54.512 53"
                  >
                    <g
                      id="Grupo_44"
                      data-name="Grupo 44"
                      transform="translate(0 583.714)"
                    >
                      <path
                        id="Trazado_57"
                        data-name="Trazado 57"
                        d="M26.777-582.167a.846.846,0,0,1-.372-.7.847.847,0,0,1,.847-.846.847.847,0,0,1,.847.846.846.846,0,0,1-.363.695v3.507h.051a.531.531,0,0,1,.531.531v.051H32.1a.846.846,0,0,1,.7-.367.847.847,0,0,1,.847.846.847.847,0,0,1-.847.846.846.846,0,0,1-.7-.367H28.317v.051a.531.531,0,0,1-.531.531h-.051v10.814a2.477,2.477,0,0,1,1.12,1.809,10.336,10.336,0,0,1,11.7-.221,10.908,10.908,0,0,1,1.128.911,12.547,12.547,0,0,1,6.089,1.722,14.008,14.008,0,0,1,6.739,12.1,14.04,14.04,0,0,1-.609,4.136,18.889,18.889,0,0,1-3.5,6.967v7.591H4.109v-7.591a18.888,18.888,0,0,1-3.5-6.967A14.039,14.039,0,0,1,0-549.408a14.008,14.008,0,0,1,6.739-12.1,12.547,12.547,0,0,1,6.089-1.722,10.9,10.9,0,0,1,1.128-.911,10.336,10.336,0,0,1,11.7.221,2.477,2.477,0,0,1,1.12-1.809v-10.814h-.051a.531.531,0,0,1-.531-.531v-.051H22.411a.846.846,0,0,1-.7.367.847.847,0,0,1-.847-.846.847.847,0,0,1,.847-.846.846.846,0,0,1,.7.367H26.2v-.051a.531.531,0,0,1,.531-.531h.051Zm3.834,48.841v-2.5H23.9v2.5Zm-19.8,0h6.714v-2.5H10.81Zm26.178,0H43.7v-2.5H36.988Zm-21.6-28.759a7.277,7.277,0,0,1,4.134-1.341,8.069,8.069,0,0,1,6.437,3.681,3.891,3.891,0,0,0-.54.326,7.44,7.44,0,0,0-5.9-3.381,6.519,6.519,0,0,0-3.772,1.231c-2.708,1.879-4.389,5.512-4.389,9.477a14.044,14.044,0,0,0,.473,3.559c.531,2.994,2.648,6.363,5.139,9.467h-.8c-2.435-3.1-4.441-6.427-4.977-9.46a13.993,13.993,0,0,1-.46-3.566C10.737-556.261,12.521-560.089,15.391-562.086ZM22-539.067H18.579c-2.657-3.176-4.977-6.682-5.517-9.733a12.83,12.83,0,0,1-.447-3.293c0-3.563,1.482-6.8,3.857-8.446,2.614-1.818,5.883-1,7.966,1.875-2.133,2.1-3.551,6.525-3.551,11.945A24.819,24.819,0,0,0,22-539.067Zm17.119-23.018a7.277,7.277,0,0,0-4.134-1.341,8.069,8.069,0,0,0-6.437,3.681,3.885,3.885,0,0,1,.54.326,7.44,7.44,0,0,1,5.9-3.381,6.52,6.52,0,0,1,3.772,1.231c2.708,1.879,4.389,5.512,4.389,9.477a14.04,14.04,0,0,1-.473,3.559c-.531,2.994-2.647,6.363-5.139,9.467h.8c2.435-3.1,4.441-6.427,4.977-9.46a13.993,13.993,0,0,0,.46-3.566C43.775-556.261,41.991-560.089,39.121-562.086ZM32.51-539.067h3.423c2.657-3.176,4.977-6.682,5.517-9.733a12.829,12.829,0,0,0,.447-3.293c0-3.563-1.482-6.8-3.857-8.446-2.614-1.818-5.884-1-7.966,1.875,2.133,2.1,3.551,6.525,3.551,11.945A24.819,24.819,0,0,1,32.51-539.067Zm-2.634,0a22.281,22.281,0,0,0,1.241-7.654c0-6.549-2.268-10.741-3.843-10.773h-.037c-1.574.033-3.843,4.225-3.843,10.773a22.283,22.283,0,0,0,1.241,7.654ZM2.512-549.408a11.512,11.512,0,0,1,5.5-9.944,10.153,10.153,0,0,1,2.486-1.043,16,16,0,0,0-2.273,8.3,16.255,16.255,0,0,0,.519,4.1,23.074,23.074,0,0,0,4.3,8.923H6.7A17.812,17.812,0,0,1,3.044-545.9,11.815,11.815,0,0,1,2.512-549.408Zm49.488,0a11.512,11.512,0,0,0-5.5-9.944,10.154,10.154,0,0,0-2.486-1.043,16,16,0,0,1,2.273,8.3,16.256,16.256,0,0,1-.519,4.1,23.074,23.074,0,0,1-4.3,8.923h6.352a17.812,17.812,0,0,0,3.653-6.829A11.817,11.817,0,0,0,52-549.408Z"
                        transform="translate(0)"
                        fill="#fff"
                        fill-rule="evenodd"
                      />
                    </g>
                  </svg>
                </div>
                <div className="services__content">
                  <h3 className="services__title">
                    <Link href="/about">
                      <a>
                      Programas de
alta demanda
                      </a>
                    </Link>
                  </h3>
                  <p>Programas génico laborales ideales para las ofertas de la actualidad.</p>

                  <Link href="/about">
                    <a className="link-btn-2">
                      <i className="fas fa-arrow-right"></i>
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="services__item purple-bg mb-30">
                <div className="services__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="53"
                    height="31.8"
                    viewBox="0 0 53 31.8"
                  >
                    <g
                      id="Grupo_34"
                      data-name="Grupo 34"
                      transform="translate(0 384.003)"
                    >
                      <path
                        id="Trazado_51"
                        data-name="Trazado 51"
                        d="M51.537-376.615l-23.1-7.1a6.615,6.615,0,0,0-3.875,0l-23.1,7.1a1.95,1.95,0,0,0,0,3.775L5.489-371.6a6.526,6.526,0,0,0-1.481,3.884,2.616,2.616,0,0,0-1.359,2.267A2.6,2.6,0,0,0,3.8-363.328l-2.114,9.514A1.325,1.325,0,0,0,2.976-352.2H7.623a1.325,1.325,0,0,0,1.294-1.612L6.8-363.328a2.6,2.6,0,0,0,1.148-2.124,2.611,2.611,0,0,0-1.3-2.225,3.907,3.907,0,0,1,1.713-3.041l16.2,4.976a6.623,6.623,0,0,0,3.875,0l23.1-7.1A1.95,1.95,0,0,0,51.537-376.615ZM29.215-363.209a9.271,9.271,0,0,1-5.432,0L11.774-366.9,10.6-357.5c0,2.927,7.119,5.3,15.9,5.3s15.9-2.373,15.9-5.3l-1.174-9.4Z"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                </div>
                <div className="services__content">
                  <h3 className="services__title">
                    <Link href="/about">
                      <a>
                      Mejoramiento
continuo
                      </a>
                    </Link>
                  </h3>
                  <p>Diseñar e implementar estrategias para mejores procesos de formación.</p>

                  <Link href="/about">
                    <a className="link-btn-2">
                      <i className="fas fa-arrow-right"></i>
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="services__item green-bg mb-30">
                <div className="services__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34.624"
                    height="50.363"
                    viewBox="0 0 34.624 50.363"
                  >
                    <g
                      id="Grupo_36"
                      data-name="Grupo 36"
                      transform="translate(0 512.011)"
                    >
                      <path
                        id="Trazado_53"
                        data-name="Trazado 53"
                        d="M9.449-467.319a3.149,3.149,0,0,0,.527,1.74l1.681,2.527a3.149,3.149,0,0,0,2.62,1.4h6.07a3.149,3.149,0,0,0,2.62-1.4l1.681-2.527a3.147,3.147,0,0,0,.527-1.74l0-3.772H9.444ZM0-494.7A17.216,17.216,0,0,0,4.285-483.31a28.267,28.267,0,0,1,5.136,9c0,.026.007.051.011.077H25.193c0-.026.007-.05.011-.077a28.267,28.267,0,0,1,5.136-9A17.216,17.216,0,0,0,34.624-494.7a17.311,17.311,0,0,0-17.366-17.312A17.241,17.241,0,0,0,0-494.7Zm17.312-7.869A7.878,7.878,0,0,0,9.443-494.7a1.573,1.573,0,0,1-1.574,1.574A1.573,1.573,0,0,1,6.3-494.7a11.029,11.029,0,0,1,11.017-11.017,1.573,1.573,0,0,1,1.574,1.574A1.573,1.573,0,0,1,17.312-502.568Z"
                        transform="translate(0 0)"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                </div>
                <div className="services__content">
                  <h3 className="services__title">
                    <Link href="/about">
                      <a>
                      Cultura de
innovación
                      </a>
                    </Link>
                  </h3>
                  <p>Formación para el trabajo y el desarrollo humano enfocada en la innovación.</p>

                  <Link href="/about">
                    <a className="link-btn-2">
                      <i className="fas fa-arrow-right"></i>
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Service;
