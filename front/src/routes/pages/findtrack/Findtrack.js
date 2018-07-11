import React, { PropTypes } from 'react';
import { Panel, Col, Row, PageHeader } from 'react-bootstrap';

import {Radar} from 'react-chartjs';

//var RadarChart = require("react-chartjs").Radar;

/*

width={500} height={500} 

*/

const data= {
    labels: ['멀티미디어', '정보보호', '인공지능', '사물인터넷','시스템응용'],
    datasets: [{
        data: [87, 59, 23, 42, 18]
    }]
};

const options = {
    gridLines: {
      color: "black",
      lineWidth: 3
    },
    angleLines: {
      display: false
    },
    ticks: {
      beginAtZero: true,
      min: 0,
      max: 100,
      stepSize: 20
    },
    pointLabels: {
      fontSize: 18,
      fontColor: "green"
    }
};


class Findtrack extends React.Component {
    static contextTypes = { setTitle: PropTypes.func.isRequired };

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <Row>
                    <PageHeader>나와 비슷한 트랙 찾기</PageHeader>
                </Row>

                <Row className="text-center">
                  <Col sm={12} >
                    <Radar data={data} options={options} width={600} height={600}/>
                  </Col>
                </Row>
            </div>
        );
    }
}

export default Findtrack;
