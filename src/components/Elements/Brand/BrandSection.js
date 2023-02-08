import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";

class Brand extends Component {
  render() {
    return (
      <section className="brand__area pb-110">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="brand__content text-center">
                <h3 className="brand__title">Nuestros Partners y aliados:</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="brand__slider">
                <div className=" text-center">
                  <div className="brand__item">
                    <img
                      src="assets/img/img_fucec/logo-oficial-unicartagena.png"
                      alt="img not found"
                    />
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

export default Brand;
