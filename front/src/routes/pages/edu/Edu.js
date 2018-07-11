
import React, { PropTypes } from 'react';
import { Row, PageHeader } from 'react-bootstrap';

const descImg = require('../../../public/edu.png');

class Edu extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            base : ['문제해결및실습:C++', '웹프로그래밍', '소프트웨어공학'],
            sub : ['문제해결및실습:JAVA', '윈도우즈프로그래밍', '모바일프로그래밍', '오픈소스SW', '객체지향설계기술', 'SW교육틍강1', 'SW교육특강2']
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
                        <PageHeader>SW 교육</PageHeader>
                    </div>
                </Row>

                <Row className="text-center">
                    <img className="track-img" src={descImg}/>
                </Row>

                <Row className="track-description">
                    <h4>소개</h4>
                    <p style={introStyle}>
                        소프트웨어 교육
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

export default Edu;