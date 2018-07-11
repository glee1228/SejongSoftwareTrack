
import React, { PropTypes } from 'react';
import { Row, PageHeader } from 'react-bootstrap';

const descImg = require('../../../public/vr.png');

class VR extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            base : ['멀티미디어프로그래밍', '선형대수및 프로그래밍', '컴퓨터그래픽스'],
            sub : ['고급실시간그래픽스', '가상현실', '멀티미디어', '게임프로그래밍', '디지털사운드', '컴퓨터애니메이션', '증강현실', 'HCI개론']
        }
    }

    render() {
        let baseData = this.state.base;
        let subData = this.state.sub;

        let baseItems = [];
        let subItems = [];

        let tdStyle = {
            paddingLeft : 20,
            height: 40
        }

        let introStyle = {
            width: "97%",
            textAlign: "justify",
            paddingLeft: 20,
            lineHeight: 2,
        }

        for (var index = 0; index < baseData.length; index +=2) {
            if (index + 1 < baseData.length) {
                baseItems.push(
                    <tr>
                        <td style={tdStyle}>{baseData[index]}</td>
                        <td style={tdStyle}>{baseData[index+1]}</td>
                    </tr>
                );
            } else {
                baseItems.push(
                    <tr><td style={tdStyle}>{baseData[index]}</td></tr>
                );
            }
        }

        for (var index = 0; index < subData.length; index +=2) {
            if (index + 1 < subData.length) {
                subItems.push(
                    <tr>
                        <td style={tdStyle}>{subData[index]}</td>
                        <td style={tdStyle}>{subData[index+1]}</td>
                    </tr>
                );
            } else {
                subItems.push(
                    <tr><td style={tdStyle}>{baseData[index]}</td></tr>
                );
            }
        }

        return (
            <div>
                <Row>
                    <div className="col-lg-12">
                        <PageHeader>가상현실</PageHeader>
                    </div>
                </Row>

                <Row className="text-center">
                    <img className="track-img" src={descImg}/>
                </Row>

                <Row className="track-description">
                    <h4>소개</h4>
                    <p style={introStyle}>
                        가상현실을 설명하는 데 필요한 요소는 3차원의 공간성, 실시간의 상호작용성, 몰입 등이다. 3차원의 공간성이란 사용자가 실재하는 물리적 공간에서 느낄 수 있는 상호작용과 최대한 유사한 경험을 할 수 있는 가상공간을 만들어 내기 위해 현실 공간에서의 물리적 활동 및 명령을 컴퓨터에 입력하고 그것을 다시 3차원의 유사 공간으로 출력하는 데 필요한 요소를 의미한다. 3차원 공간을 구현하는 데 필요한 요소는 그것을 실시간으로 출력하기 위한 컴퓨터와 키보드, 조이스틱, 마우스, 음성 탐지기, 데이터 등이 있으며 이러한 장비들을 통해 사용자는 가상현실에 더욱 몰입할 수 있다.
                    </p>
                </Row>
                
                <Row className="track-description">
                    <h4>트랙 기초 교과</h4>
                    <table className="track-info-table">
                        <tbody>
                        {baseItems}
                        </tbody>
                    </table>
                    <h4>트랙 응용 교과</h4>
                    <table className="track-info-table">
                        <tbody>
                        {subItems}
                        </tbody>
                    </table>
                </Row>
            </div>
        );
    }
}

export default VR;