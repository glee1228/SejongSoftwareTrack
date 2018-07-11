import React, { PropTypes } from 'react';
import { Alert, Col, Row, PageHeader } from 'react-bootstrap';

const applyImg = require('../../../public/track_apply.png');

class Apply extends React.Component {
    static contextTypes = { setTitle: PropTypes.func.isRequired };

    constructor(props, context) {
        super(props, context);
    }

    render() {
        let style = {
            marginTop: 20
        }
        return (
            <div>
                <Row>
                    <Col lg={12}>
                        <PageHeader>트랙 신청</PageHeader>
                    </Col>
                </Row>
    
                <Row className="text-center" style={style}>
                    <Col md={6}>
                        <a href="http://www.naver.com">
                            <img style={{width: "60%"}} src={applyImg}/>
                        </a>
                    </Col>
                    <Col md={5}>
                        <Row>
                            <Alert>
                                <h3><i className="fa fa-calendar"></i> 신청 일자</h3>
                                <h4>2018.05.14 ~ 2018.05.31</h4>
                            </Alert>
                        </Row>
                        <Row>
                            <Alert bsStyle="default">
                                <h3><i className="fa fa-address-book"></i> 문의</h3>
                                <br/>
                                <h4>조윤식 교수</h4>
                                <h4>(yscho@sejong.ac.kr)</h4>
                            </Alert>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Apply;
