import React from "react";
import FooterStyleTwo from "../components/Layout/Footer/FooterStyleTwo";
import HeaderTwo from "../components/Layout/Header/HeaderStyleTwo";
import BlogMain from "../components/Blog/BlogMain";

class Blog extends React.Component {
  static getInitialProps({ store }) {}

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <HeaderTwo isHome={false} />
        <BlogMain />
        <FooterStyleTwo />
      </React.Fragment>
    );
  }
}

export default Blog;
