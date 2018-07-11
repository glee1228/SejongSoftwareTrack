import React, { PropTypes } from 'react';
import { Row, PageHeader } from 'react-bootstrap';

const PageTitle = 'Track Infomation';

const infoImg = require('../../../public/track_info.png');

class TrackInfo extends React.Component {
    static contextTypes = { setTitle: PropTypes.func.isRequired };

    constructor(props, context) {
        super(props, context);
        context.setTitle(PageTitle);
    }

    render() {
        return (
            <div>
                <Row>
                    <div className="col-lg-12">
                        <PageHeader>트랙이란?</PageHeader>
                    </div>
                </Row>
    
                <Row className="description">
                    <p>
                        SW융합대학 내 전공 4개 학과에서는 10여개의 트랙을 제공하여 학생들로 하여금 전공과 무관하게 이수가 가능하고 졸업 시 트랙 인증이 부여됩니다.
                    </p>
                    
                    <p>
                        HCI&비주얼컴퓨팅, 멀티미디어, 사물인터넷, 시스템응용, 인공지능, 가상현실, 정보보호, 데이터사이언스, SW교육, 사이버국방 의 트랙이 있고, 하나의 트랙을 인증받기 위해서 트랙기초교과의 전교과와 6개 이상의 교과를 트랙응용교과에서 선택이수하여야 합니다.
                    </p>
                </Row>

                <div style={{textAlign : "center"}} className="row">
                    <img src={infoImg}/>
                </div>
            </div>
        );
    }
}

export default TrackInfo;
