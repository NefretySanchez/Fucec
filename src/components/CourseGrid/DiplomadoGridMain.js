import React, { Component } from "react";
import Breadcrumb from "../Common/Breadcrumb";
import CourseGridTab from "../Elements/Tab/CourseGridTab";
import CtaTwo from '../HomeTwo/CtaSectionTwo';

class DiplomadoGridMain extends Component {
  render() {
    return (
      <main>
        {/* breadcrumb-start */}
        <Breadcrumb
          pageTitle="Nuestros diplomados"
          bannerImg="Rectángulo%20111.png"
        />
        {/* breadcrumb-end */}

        {/* course tab-start */}
        <CourseGridTab />
        {/* course tab-end */}

        {/* cta-start */}
        <CtaTwo />
        {/* cta-end */}
      </main>
    );
  }
}

export default DiplomadoGridMain;