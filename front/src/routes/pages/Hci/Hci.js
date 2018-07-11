import React,{PropTypes} from 'react';
import {Row, PageHeader} from 'react-bootstrap';


const title = 'HCI & 비쥬얼컴퓨팅';
const descImg = require('../../../public/hci.png');

class Hci extends React.Component {

    constructor(props, context) {
        super(props, context);
        context.setTitle(title);
        this.state = {
            base : ['선형대수및프로그래밍', '컴퓨터그래픽스', '웹프로그래밍'],
            sub : ['영상처리', 'HCI개론', '웹프로그래밍설계', '웹기반시스템', '윈도우즈프로그래밍', 'XML프로그래밍', '데이터컴퓨팅', '정보검색']
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
                        <PageHeader>HCI & 비쥬얼컴퓨팅</PageHeader>
                    </div>
                </Row>

                <Row className="text-center">
                    <img className="track-img" src={descImg}/>
                </Row>

                <Row className="track-description">
                    <h4>소개</h4>
                    <p style={introStyle}>
                        인간과 컴퓨터 상호 작용(Human-computer interaction)은 인간(사용자)과 컴퓨터 간의 상호작용에 대해 연구하는 학문 분야다.
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

Hci.contextTypes = { setTitle: PropTypes.func.isRequired };

export default Hci;
