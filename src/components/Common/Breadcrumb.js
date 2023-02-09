import React, { Component } from "react";
import Link from "next/link";

const Breadcrumb = (props) => {
  const { pageTitle, bannerImg } = props;
  return (
    <section
      className="page__title-area page__title-height page__title-overlay d-flex align-items-center"
      style={{
        backgroundImage: `url(${`assets/img/img_fucec/${bannerImg}`})`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="page__title-wrapper mt-110">
              <h3 className="page__title">
                {pageTitle ? pageTitle : "Courses"}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
