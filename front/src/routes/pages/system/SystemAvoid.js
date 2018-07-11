import React,{PropTypes} from 'react';
import {Row, PageHeader} from 'react-bootstrap';


const title = '시스템응용';
const descImg = require('../../../public/system.png');

class SystemAvoid extends React.Component {
    constructor(props, context) {
        super(props, context);
        context.setTitle(title);
        this.state = {
            base : ['디지털시스템', '마이크로컴퓨터', 'VHDL프로그래밍'],
            sub : ['데이터베이스', '프로그래밍언어의개념', '소프트웨어공학', '멀티코어프로그래밍', '시스템모델링', '분산시스템', '컴파일러', 'UNIX프로그래밍', '임베디드시스템']
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
                        <PageHeader>{title}</PageHeader>
                    </div>
                </Row>

                <Row className="text-center">
                    <img className="track-img" src={descImg}/>
                </Row>

                <Row className="track-description">
                    <h4>소개</h4>
                    <p style={introStyle}>
                        응용 소프트웨어를 실행하기 위한 플랫폼을 제공하고 컴퓨터 하드웨어를 동작, 접근할 수 있도록 설계된 컴퓨터 소프트웨어이다.[1] 컴퓨터 시스템의 운영을 위한 모든 컴퓨터 소프트웨어에 대한 일반 용어이다.
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

SystemAvoid.contextTypes = { setTitle: PropTypes.func.isRequired };

export default SystemAvoid;
