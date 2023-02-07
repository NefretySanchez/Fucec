import React, { Component } from "react";
import Link from "next/link";

class HeroTwo extends Component {
  render() {
    return (
      <section className="hero__area hero__height hero__height-2 d-flex align-items-center blue-bg-3 p-relative fix">
        <div className="container">
          <div className="hero__content-wrapper mt-10">
            <div className="row align-items-center">
              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                <div className="hero__content hero__content-2 p-relative z-index-1">
                  <h3 className="hero__title hero__title-2">
                    Institución de educación para el trabajo y el desarrollo
                    humano
                  </h3>
                  <h4>Llevamos conocimiento, formación e innovación</h4>
                  <p>Resolución No. 4363 de 2021</p>

                  <div className="hero__search">
                    <form action="#">
                      <div className="hero__search-input mb-10">
                        <input
                          type="text"
                          placeholder="¿Qué te gustaría aprender hoy?"
                        />
                        <button type="submit">
                          <i className="fas fa-search"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                <div className="hero__thumb-wrapper mb--120">
                  <div className="hero__thumb-2 scene">
                    <img
                      className="hero-big"
                      src="assets/img/img_fucec/ryan-hoffman-ijhzqAm3N1Y-unsplash.png"
                      alt="img not found"
                    />
                    <img
                      className="hero-shape-purple"
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
                            width="19.5"
                            height="19.5"
                            viewBox="0 0 19.5 19.5"
                          >
                            <path
                              id="Trazado_55"
                              data-name="Trazado 55"
                              d="M0-10.25A9.75,9.75,0,0,1,9.75-20a9.75,9.75,0,0,1,9.75,9.75A9.75,9.75,0,0,1,9.75-.5,9.75,9.75,0,0,1,0-10.25Zm10.725-4.875A.98.98,0,0,0,9.75-16.1a.98.98,0,0,0-.975.975v3.67a2.929,2.929,0,0,0,1.617,2.616l2.823,1.411a.976.976,0,0,0,.463.117.98.98,0,0,0,.975-.975.976.976,0,0,0-.566-.885l-2.822-1.412a.976.976,0,0,1-.539-.872Z"
                              transform="translate(0 20)"
                              fill="#fff"
                              fill-rule="evenodd"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="hero__promotion-text">
                        <h5>Somos 24/7</h5>
                        <p>Aprende a tu ritmo</p>
                      </div>
                    </div>
                    <div
                      className="hero__promotion education d-none d-lg-flex white-bg layer"
                      data-depth="0.2"
                    >
                      <div className="hero__promotion-icon mr-10">
                        <span className="cap">
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
                        <h5>
                          +<span className="counter">20 </span>cursos
                        </h5>
                        <p>Todas las áreas</p>
                      </div>
                    </div>
                    <div
                      className="hero__class d-none d-lg-flex layer"
                      data-depth="0.3"
                    >
                      <div className="hero__class-text">
                        <h5>Nuestros Partners y aliados:</h5>
                        <img
                          src="assets/img/img_fucec/logo-oficial-unicartagena.png"
                          alt="img not found"
                        />
                       
                      </div>
                    </div>
                    <div className="hero__mic">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="33.52"
                          height="32.59"
                          viewBox="0 0 33.52 32.59"
                        >
                          <path
                            id="Trazado_57"
                            data-name="Trazado 57"
                            d="M16.465-582.763a.52.52,0,0,1-.228-.431.521.521,0,0,1,.521-.52.521.521,0,0,1,.521.52.52.52,0,0,1-.223.427v2.156h.031a.326.326,0,0,1,.326.326v.031h2.327a.52.52,0,0,1,.429-.226.521.521,0,0,1,.521.521.521.521,0,0,1-.521.521.52.52,0,0,1-.429-.226H17.412v.031a.326.326,0,0,1-.326.326h-.031v6.65a1.523,1.523,0,0,1,.689,1.112,6.356,6.356,0,0,1,7.2-.136,6.718,6.718,0,0,1,.694.56,7.717,7.717,0,0,1,3.744,1.059,8.614,8.614,0,0,1,4.144,7.441,8.633,8.633,0,0,1-.375,2.543,11.615,11.615,0,0,1-2.152,4.284v4.668H2.526v-4.668a11.614,11.614,0,0,1-2.152-4.284A8.632,8.632,0,0,1,0-562.619a8.614,8.614,0,0,1,4.144-7.441,7.717,7.717,0,0,1,3.744-1.059,6.711,6.711,0,0,1,.694-.56,6.356,6.356,0,0,1,7.2.136,1.523,1.523,0,0,1,.689-1.112v-6.65h-.031a.326.326,0,0,1-.326-.326v-.031H13.781a.52.52,0,0,1-.429.226.521.521,0,0,1-.521-.521.521.521,0,0,1,.521-.521.52.52,0,0,1,.429.226h2.327v-.031a.326.326,0,0,1,.326-.326h.031Zm2.358,30.032v-1.54H14.7v1.54Zm-12.176,0h4.129v-1.54H6.647Zm16.1,0h4.129v-1.54H22.744ZM9.464-570.415a4.474,4.474,0,0,1,2.542-.824,4.961,4.961,0,0,1,3.958,2.263,2.39,2.39,0,0,0-.332.2,4.575,4.575,0,0,0-3.626-2.079,4.01,4.01,0,0,0-2.32.757,7.074,7.074,0,0,0-2.7,5.827,8.637,8.637,0,0,0,.291,2.188,14.364,14.364,0,0,0,3.16,5.821H9.945a14.33,14.33,0,0,1-3.06-5.817A8.6,8.6,0,0,1,6.6-564.27,7.467,7.467,0,0,1,9.464-570.415Zm4.065,14.154h-2.1c-1.634-1.953-3.06-4.109-3.392-5.985a7.89,7.89,0,0,1-.275-2.025,6.3,6.3,0,0,1,2.372-5.194c1.607-1.118,3.618-.618,4.9,1.153-1.311,1.291-2.183,4.012-2.183,7.345A15.262,15.262,0,0,0,13.529-556.261Zm10.526-14.154a4.475,4.475,0,0,0-2.542-.824,4.961,4.961,0,0,0-3.958,2.263,2.386,2.386,0,0,1,.332.2,4.575,4.575,0,0,1,3.626-2.079,4.01,4.01,0,0,1,2.32.757,7.074,7.074,0,0,1,2.7,5.827,8.634,8.634,0,0,1-.291,2.188,14.364,14.364,0,0,1-3.16,5.821h.492a14.33,14.33,0,0,0,3.06-5.817,8.6,8.6,0,0,0,.283-2.193A7.467,7.467,0,0,0,24.056-570.415ZM19.99-556.261h2.1c1.634-1.953,3.06-4.109,3.392-5.985a7.889,7.889,0,0,0,.275-2.025,6.3,6.3,0,0,0-2.372-5.194c-1.607-1.118-3.618-.618-4.9,1.153,1.312,1.291,2.183,4.012,2.183,7.345A15.262,15.262,0,0,1,19.99-556.261Zm-1.62,0a13.7,13.7,0,0,0,.763-4.707c0-4.027-1.395-6.6-2.363-6.625h-.023c-.968.02-2.363,2.6-2.363,6.625a13.7,13.7,0,0,0,.763,4.707ZM1.545-562.619a7.078,7.078,0,0,1,3.385-6.115,6.246,6.246,0,0,1,1.529-.641,9.84,9.84,0,0,0-1.4,5.1,9.994,9.994,0,0,0,.319,2.521,14.187,14.187,0,0,0,2.644,5.487H4.118a10.953,10.953,0,0,1-2.246-4.2A7.265,7.265,0,0,1,1.545-562.619Zm30.43,0a7.078,7.078,0,0,0-3.385-6.115,6.247,6.247,0,0,0-1.529-.641,9.839,9.839,0,0,1,1.4,5.1,9.994,9.994,0,0,1-.319,2.521,14.188,14.188,0,0,1-2.644,5.487H29.4a10.953,10.953,0,0,0,2.246-4.2A7.266,7.266,0,0,0,31.975-562.619Z"
                            transform="translate(0 583.714)"
                            fill="#0f1034"
                            fill-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>
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

export default HeroTwo;
