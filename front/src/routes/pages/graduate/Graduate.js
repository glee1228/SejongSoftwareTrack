import React, { PropTypes } from 'react';
import { Col, Row, Panel, PageHeader } from 'react-bootstrap';

class Graduate extends React.Component {
    static contextTypes = { setTitle: PropTypes.func.isRequired };

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <Row>
                    <Col lg={12}>
                        <PageHeader>트랙 심화과정</PageHeader>
                    </Col>
                </Row>

                <Row className="text-center graduate">
                    <Col md={6}>
                        <Row>
                            <Panel header="HCI&비주얼 컴퓨팅 트랙">
                                <h4>김용국 교수님</h4>
                                <p>공성곤, 이영렬, 최수미, 윤은일, 박상일</p>
                            </Panel>
                        </Row>
                        <Row>
                            <Panel header="멀티미디어 트랙">
                                <h4>김해광 교수님</h4>
                                <p>공성곤, 이영렬, 문현준, 신동규, 한동일, 송오영, 박상일</p>
                            </Panel>
                        </Row>
                        <Row>
                            <Panel header="사물 인터넷 트랙">
                                <h4>김영복 교수님</h4>
                                <p>유영환, 문승빈</p>
                            </Panel>
                        </Row>
                        <Row>
                            <Panel header="시스템응용 트랙">
                                <h4>신동일 교수님</h4>
                                <p>문승빈, 박기호</p>
                            </Panel>
                        </Row>
                        <Row>
                            <Panel header="인공지능 트랙">
                                <h4>국형준 교수님</h4>
                                <p>이영렬, 유성준, 문현준, 한동일, 문승빈, 김경중, 백성욱, 권순일, 김원일, Alavalapati Goutham Reddy</p>
                            </Panel>
                        </Row>
                    </Col>
                    <Col md={6}>
                        <Row>
                            <Panel header="SW교육 트랙">
                                <h4>노용덕 교수님</h4>
                                <p>권기학</p>
                            </Panel>
                        </Row>
                        <Row>
                            <Panel header="가상현실 트랙">
                                <h4>이종원 교수님</h4>
                                <p>최수미</p>
                            </Panel>
                        </Row>
                        <Row>
                            <Panel header="정보보호 트랙">
                                <h4>박기호 교수님</h4>
                                <p>김영복, 김영갑, 박기웅, 송재승, 신지선, 윤주범, 이광수, 강지원, Aamir Shahzad, Lewis Nkenyereye</p>
                            </Panel>
                        </Row>
                        <Row>
                            <Panel header="데이터사이언스 트랙">
                                <h4>노재춘 교수님</h4>
                                <p>신동일, 유성준, 최수미, 양효식, 윤은일, 장윤, 최준연, 문현준, 김경중, 백성욱</p>
                            </Panel>
                        </Row>
                        <Row>
                            <Panel header="사이버국방 트랙">
                                <h4>윤주범 교수님</h4>
                                <p>김영복, 윤주범, 강지원, Aamir Shahzad</p>
                            </Panel>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Graduate;
