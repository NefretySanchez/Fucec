import React, { Component } from "react";
import Link from "next/link";

class BlogRecent extends Component {
  render() {
    return (
      <div className="blog__recent">
        <div className="section__title-wrapper mb-40">
          <h2 className="section__title">Otras entradas</h2>
        </div>
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="blog__item white-bg mb-30 transition-3 fix">
              <div className="blog__thumb w-img fix">
                <Link href="/blog-details">
                  <a>
                    <img
                      src="assets/img/img_fucec/blog-item-2.png"
                      alt="img not found"
                    />
                  </a>
                </Link>
              </div>
              <div className="blog__content">
                <div className="blog__tag">
                  <span className="blue">Organización</span>
                </div>
                <h3 className="blog__title">
                  <Link href="/blog-details">
                    <a>Lorem Ipsum dior amet.</a>
                  </Link>
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
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
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
                  <Link href="/blog-details">
                    <a>Lorem Ipsum dior amet.</a>
                  </Link>
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
    );
  }
}

export default BlogRecent;
