import React, { Component } from "react";
import Link from "next/link";

class RecentPost extends Component {
  render() {
    return (
      <div className="sidebar__widget mb-55">
        <div className="sidebar__widget-head mb-35">
          <h3 className="sidebar__widget-title">Entradas recientes</h3>
        </div>
        <div className="sidebar__widget-content">
          <div className="rc__post-wrapper">
            <div className="rc__post d-flex align-items-center">
              <div className="rc__thumb mr-20">
                <img
                  src="assets/img/img_fucec/blog-item.png"
                  alt="img not found"
                />
              </div>
              <div className="rc__content">
                <div className="rc__meta">
                  <span>Julio 22, 2022</span>
                </div>
                <h6 className="rc__title">
                  <Link href="/blog-details">
                    <a>Lorem Ipsum dior amet.</a>
                  </Link>
                </h6>
              </div>
            </div>
            <div className="rc__post d-flex align-items-center">
              <div className="rc__thumb mr-20">
                <img
                  src="assets/img/img_fucec/blog-item-2.png"
                  alt="img not found"
                />
              </div>
              <div className="rc__content">
                <div className="rc__meta">
                  <span>Julio 22, 2022</span>
                </div>
                <h6 className="rc__title">
                  <Link href="/blog-details">
                    <a>Lorem Ipsum dior amet.</a>
                  </Link>
                </h6>
              </div>
            </div>
            <div className="rc__post d-flex align-items-center">
              <div className="rc__thumb mr-20">
                <img
                  src="assets/img/img_fucec/Rectángulo 25.png"
                  alt="img not found"
                />
              </div>
              <div className="rc__content">
                <div className="rc__meta">
                  <span>Julio 22, 2022</span>
                </div>
                <h6 className="rc__title">
                  <Link href="/blog-details">
                    <a>Lorem Ipsum dior amet.</a>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecentPost;
