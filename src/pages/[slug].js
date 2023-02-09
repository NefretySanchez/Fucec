import React from "react";
import BlogDetailsMain from "../components/BlogDetails/BlogDetailsMain";
import FooterStyleTwo from "../components/Layout/Footer/FooterStyleTwo";
import HeaderTwo from "../components/Layout/Header/HeaderStyleTwo";

class BlogDetails extends React.Component {
  static getInitialProps({ store }) {}

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <HeaderTwo isHome={false} />
        <main>
          {/* Blog Main */}
          <BlogDetailsMain />
          {/* Blog Main End */}
        </main>
        <FooterStyleTwo />
      </React.Fragment>
    );
  }
}

export default BlogDetails;
