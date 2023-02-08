import React, { Component } from "react";
import Breadcrumb from "../Common/Breadcrumb";
import TestimonialThree from "../HomeThree/TestimonialSectionThree";
import AboutSection from "./About_Section";
import WhyChoose from "../HomeTwo/WhyChooseSection";
import Counter from "../Elements/Counter/CounterStyleTwo";
import Banner from "../Home/BannerSection";
import dynamic from "next/dynamic";
const BrandWithNoSSR = dynamic(() => import("../Elements/Brand/BrandSection"), {
  ssr: false,
});

class AboutMain extends Component {
  render() {
    return (
      <main>
        {/* breadcrumb-start */}
        <Breadcrumb pageTitle="Más Sobre Nosotros" />
        {/* breadcrumb-end */}

        {/* about-start */}
        <div className="mt-30">
          <AboutSection />
        </div>
        {/* about-end */}

        {/* brand-start */}
        <BrandWithNoSSR />
        {/* brand-end */}

        {/* testimonial-start */}
        <TestimonialThree />
        {/* testimonial-end */}

        {/* whychoose-start */}
        <WhyChoose />
        {/* whychoose-end */}

        {/* counter-start */}
        <Counter />
        {/* counter-end */}

        {/* banner-start */}
        <Banner />
        {/* banner-end */}
      </main>
    );
  }
}

export default AboutMain;
