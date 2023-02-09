import React from "react";
import DiplomadoGridMain from "../components/CourseGrid/DiplomadoGridMain";
import FooterStyleTwo from "../components/Layout/Footer/FooterStyleTwo";
import HeaderTwo from "../components/Layout/Header/HeaderStyleTwo";

class DiplomadoGrid extends React.Component {
  static getInitialProps({ store }) {}

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <HeaderTwo isHome={false} />
        <DiplomadoGridMain />
        <FooterStyleTwo />
      </React.Fragment>
    );
  }
}

export default DiplomadoGrid;
