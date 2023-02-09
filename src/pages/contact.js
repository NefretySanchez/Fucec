import React from "react";
import ContactMain from "../components/Contact/ContactMain";
import FooterStyleTwo from "../components/Layout/Footer/FooterStyleTwo";
import HeaderTwo from "../components/Layout/Header/HeaderStyleTwo";

class Contact extends React.Component {
  static getInitialProps({ store }) {}

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <HeaderTwo isHome={false} />
        <ContactMain />
        <FooterStyleTwo />
      </React.Fragment>
    );
  }
}

export default Contact;
