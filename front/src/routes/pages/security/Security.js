
import React, { PropTypes } from 'react';
import { Row, PageHeader } from 'react-bootstrap';

const descImg = require('../../../public/security.png');

class Security extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            base : ['어셈블리어', '보안프로그래밍', '컴퓨터네트워크'],
            sub : ['대칭키암호론', '공개키암호론', '시스템해킹과보안', '인터넷보안', '악성코드분석', '네트워크해킹과보안', '디지털포렌식']
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
                        <PageHeader>정보보호</PageHeader>
                    </div>
                </Row>

                <Row className="text-center">
                    <img className="track-img" src={descImg}/>
                </Row>

                <Row className="track-description">
                    <h4>소개</h4>
                    <p style={introStyle}>
                        정보의 수집, 가공, 저장, 검색, 송신, 수신 도중에 정보의 훼손, 변조, 유출 등을 방지하기 위한 관리적, 기술적 방법을 의미한다.
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

export default Security;