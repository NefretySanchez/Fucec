import React from 'react';
import CourseGridMain from '../components/CourseGrid/CourseGridMain';
import FooterStyleTwo from '../components/Layout/Footer/FooterStyleTwo';
import HeaderTwo from '../components/Layout/Header/HeaderStyleTwo';

class CourseGrid extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <HeaderTwo isHome={false} />
            <CourseGridMain />
            <FooterStyleTwo />
            </React.Fragment>
        );
    }
}


export default CourseGrid;

