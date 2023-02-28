import React, { Component } from "react";
import Link from "next/link";

class Blog extends Component {
  render() {
    return (
      <section className="blog__area pt-115 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xxl-10 offset-xxl-1">
              <div className="section__title-wrapper text-center mb-60">
                <h2 className="section__title">
                  Compartimos nuestro conocimiento de una manera fresca
                </h2>
                <p>Un blog ideado para formar y fortalecer el conocimiento.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="blog__item white-bg mb-30 transition-3 fix">
                <div className="blog__thumb w-img fix">
                  <img
                    src="assets/img/img_fucec/blog-item.png"
                    alt="img not found"
                  />
                </div>
                <div className="blog__content">
                  <div className="blog__tag">
                    <span>Emprendimiento</span>
                  </div>
                  <h3 className="blog__title">
                    <a href="/blog-details">Lorem Ipsum dior amet.</a>
                  </h3>

                  <div className="blog__meta d-flex align-items-center justify-content-between">
                    <div className="blog__author d-flex align-items-center">
                      <div className="blog__author-thumb mr-10">
                        <img
                          src="assets/img/img_fucec/Elipse 10.png"
                          alt="img not found"
                        />
                      </div>
                      <div className="blog__author-info">
                        <h5>John Doe</h5>
                      </div>
                    </div>
                    <div className="blog__date d-flex align-items-center">
                      <span>Julio 22, 2022</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="blog__item white-bg mb-30 transition-3 fix">
                <div className="blog__thumb w-img fix">
                  <img
                    src="assets/img/img_fucec/blog-item-2.png"
                    alt="img not found"
                  />
                </div>
                <div className="blog__content">
                  <div className="blog__tag">
                    <span className="blue">Organización</span>
                  </div>
                  <h3 className="blog__title">
                    <a href="/blog-details">Lorem Ipsum dior amet.</a>
                  </h3>

                  <div className="blog__meta d-flex align-items-center justify-content-between">
                    <div className="blog__author d-flex align-items-center">
                      <div className="blog__author-thumb mr-10">
                        <img
                          src="assets/img/img_fucec/Elipse 10.png"
                          alt="img not found"
                        />
                      </div>
                      <div className="blog__author-info">
                        <h5>John Doe</h5>
                      </div>
                    </div>
                    <div className="blog__date d-flex align-items-center">
                      <span>Julio 22, 2022</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="blog__item white-bg mb-30 transition-3 fix">
                <div className="blog__thumb w-img fix">
                  <img
                    src="assets/img/img_fucec/Rectángulo 25.png"
                    alt="img not found"
                  />
                </div>
                <div className="blog__content">
                  <div className="blog__tag">
                    <span className="green">Tecnología</span>
                  </div>
                  <h3 className="blog__title">
                    <a href="/blog-details">Lorem Ipsum dior amet.</a>
                  </h3>
                  <div className="blog__meta d-flex align-items-center justify-content-between">
                    <div className="blog__author d-flex align-items-center">
                      <div className="blog__author-thumb mr-10">
                        <img
                          src="assets/img/img_fucec/Elipse 10.png"
                          alt="img not found"
                        />
                      </div>
                      <div className="blog__author-info">
                        <h5>John Doe</h5>
                      </div>
                    </div>
                    <div className="blog__date d-flex align-items-center">
                      <span>Julio 22, 2022</span>
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

export default Blog;
