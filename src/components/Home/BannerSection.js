import React, { Component } from "react";
import Link from "next/link";

class Banner extends Component {
  render() {
    return (
      <main>
        <section className="banner__area pb-110">
          <div className="container">
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                <div
                  className="banner__item p-relative mb-40"
                  style={{ background: "#6E8D50" }}
                >
                  <div className="banner__content">
                    <span>Nuestras sedes</span>
                    <h3 className="banner__title">Sede Principal: Cartagena</h3>
                    <p>Barrio Centro, Avenida Venezuela</p>
                    <p>Edificio City Bank, Oficina 5CE</p>
                    <Link href="https://goo.gl/maps/xczvC2Tj6ZRqoZ8a7">
                      <a className="e-btn e-btn-2" target="_blank">Como llegar</a>
                    </Link>
                  </div>
                  <div className="banner__thumb d-none d-sm-block d-md-none d-lg-block">
                    <img
                      src="assets/img/img_fucec/Enmascarar grupo 2.png"
                      alt="img not found"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                <div
                  className="banner__item p-relative mb-40"
                  style={{ background: "#2745FB" }}
                >
                  <div className="banner__content">
                    <span>Nuestras sedes</span>
                    <h3 className="banner__title">Sede Arjona</h3>
                    <p>Calle Nueva, Cra. 45 #51-167 a 51-1</p>
                    <Link href="https://goo.gl/maps/Gv29qaMrhgzZrpXu9">
                      <a className="e-btn e-btn-2 banner-btn" target="_blank">Como llegar</a>
                    </Link>
                  </div>
                  <div className="banner__thumb d-none d-sm-block d-md-none d-lg-block">
                    <img
                      src="assets/img/img_fucec/Enmascarar grupo 1.png"
                      alt="img not found"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Banner;
