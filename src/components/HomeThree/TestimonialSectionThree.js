import React, { Component } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import Link from "next/link";

class TestimonialThree extends Component {
  render() {
    return (
      <section className="testimonial__area figure_testimonial pt-145 pb-150 green-bg-2">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-10">
              <div className="testimonial__slider-3">
                <h3 className="testimonial__title">
                  Una institución para el desarrollo personal
                </h3>
                <div className="testimonial__slider-wrapper testimonial-text mb-35">
                  <div className="testimonial__item-3">
                    <p>
                      “Durante nuestro sólido recorrido de más de ocho años,
                      hemos desarrollado y apoyado programas de gestión del
                      conocimiento y generación de ingresos adaptados a las
                      necesidades laborales y productivas, lo que ha permitido a
                      muchas personas a través del aprendizaje puedan mejorar
                      sus condiciones de vida.”
                    </p>

                    <div className="testimonial__info-2 mb-45">
                      <h4>Juan Hernández,</h4>
                      <span> Director de programa</span>
                    </div>

                    <div className="testimonial__nav-thumb">
                      <img
                        src="assets/img/img_fucec/Elipse_testimonial.png"
                        alt="img not found"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-10">
              <div className="testimonial__video ml-70 fix">
                <div className="testimonial__thumb-3">
                  <img
                    src="assets/img/img_fucec/testimonio_about.png"
                    alt="img not found"
                  />
                </div>
                <div className="testimonial__video-content d-sm-flex">
                  <div className="testimonial__video-icon mr-20 mb-20">
                    <span>
                    <img
                        src="assets/img/img_fucec/Trazado 57.svg"
                        alt="img not found"
                      />
                    </span>
                  </div>
                  <div className="testimonial__video-text">
                    <h4>Conócenos más</h4>
                    <p>
                      Cada día trabajamos para formar mejores personas, basando
                      nuestro aprendizaje en los valores y orientando a nuestros
                      estudiantes a ser excelentes seres humanos.
                    </p>
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

export default TestimonialThree;
