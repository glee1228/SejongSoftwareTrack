import React,{PropTypes} from 'react';
import {Row, PageHeader} from 'react-bootstrap';


const title = '사물인터넷';
const descImg = require('../../../public/iot.png');

class Iot extends React.Component {
    constructor(props, context) {
        super(props, context);
        context.setTitle(title);
        this.state = {
            base : ['컴퓨터네트워크', '신호및시스템', '확률통계및프로그래밍'],
            sub : ['통신시스템', '디지털신호처리', '임베디드시스템', '네트워크프로그래밍', '정보보호개론', '데이터통신', '무선통신', '스마트그리드', '인터넷보안']
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
                <div className="row">
                    <div className="col-lg-12">
                        <PageHeader>{title}</PageHeader>
                    </div>
                </div>

                <Row className="text-center">
                    <img className="track-img" src={descImg}/>
                </Row>

                <Row className="track-description">
                    <h4>소개</h4>
                    <p style={introStyle}>
                        사물인터넷은 각종 사물에 센서와 통신 기능을 내장하여 인터넷에 연결하는 기술. 즉, 무선 통신을 통해 각종 사물을 연결하는 기술을 의미한다. 인터넷으로 연결된 사물들이 데이터를 주고받아 스스로 분석하고 학습한 정보를 사용자에게 제공하거나 사용자가 이를 원격 조정할 수 있는 인공지능 기술이다. 여기서 사물이란 가전제품, 모바일 장비, 웨어러블 디바이스 등 다양한 임베디드 시스템이 된다.
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

Iot.contextTypes = { setTitle: PropTypes.func.isRequired };

export default Iot;
