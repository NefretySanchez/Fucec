import React from "react";
import HomeTwoMain from '../components/HomeTwo/HomeTwoMain';
import FooterStyleTwo from '../components/Layout/Footer/FooterStyleTwo';
import HeaderTwo from '../components/Layout/Header/HeaderStyleTwo';

class Index extends React.Component {
  static getInitialProps({ store }) {}

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <HeaderTwo  isHome={true} />
        <HomeTwoMain />
        <FooterStyleTwo />
      </React.Fragment>
    );
  }
}

export default Index;
