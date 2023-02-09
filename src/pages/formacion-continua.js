import React from "react";
import FormacionGridMain from "../components/CourseGrid/FormacionGridMain";
import FooterStyleTwo from "../components/Layout/Footer/FooterStyleTwo";
import HeaderTwo from "../components/Layout/Header/HeaderStyleTwo";

class FormacionGrid extends React.Component {
  static getInitialProps({ store }) {}

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <HeaderTwo isHome={false} />
        <FormacionGridMain />
        <FooterStyleTwo />
      </React.Fragment>
    );
  }
}

export default FormacionGrid;
