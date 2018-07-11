import React, { PropTypes } from 'react';
import { Row, PageHeader } from 'react-bootstrap';

class Footer extends React.Component {
    constructor(props, context) {
      super(props, context);
    }

    render() {
      return (
        <footer>
          <address>
            05006 서울특별시 광진구 능동로 209(군자동) , 세종대학교 집현관 502 
            <span className="copyrights">COPYRIGHT@ CODINGDAEJANG TEAM.(Sejong 4th Hackathon) All RIGHTS RESERVED</span>
          </address>
        </footer>
      );
    }
}

export default Footer;
