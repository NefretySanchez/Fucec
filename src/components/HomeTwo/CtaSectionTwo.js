import React, { Component } from "react";
import Link from "next/link";

class CtaTwo extends Component {
  render() {
    return (
      <section className="cta__area mb--100">
        <div className="container">
          <div className="cta__inner cta__inner-2 blue-bg-2 fix">
            <div className="row align-items-center">
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6">
                <div className="cta__content">
                  <h3 className="cta__title">Contáctanos directamente.</h3>
                </div>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-6">
                <div className="cta__apps d-lg-flex justify-content-end p-relative z-index-1">
                  <a
                    target="_blank"
                    href="mailto:gerencia@fucec.com.co"
                    className="mr-10"
                  >
                    Correo electrónico
                  </a>
                  <a
                    target="_blank"
                    href="https://wa.me/573013712233"
                    className="btn-whatsapp"
                  >
                    Whatsapp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CtaTwo;
