import React from "react";
import FooterStyleTwo from '../components/Layout/Footer/FooterStyleTwo';
import HeaderTwo from '../components/Layout/Header/HeaderStyleTwo';
import AboutMain from "../components/About/AboutMain";

class AboutPage extends React.Component {
  static getInitialProps({ store }) {}

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <HeaderTwo isHome={false} />
        <AboutMain />
        <FooterStyleTwo />
      </React.Fragment>
    );
  }
}

export default AboutPage;
