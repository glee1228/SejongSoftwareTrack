import React,{PropTypes} from 'react';
import {Row, PageHeader} from 'react-bootstrap';


const title = '인공지능';
const descImg = require('../../../public/ai.png');

class Ai extends React.Component {
    constructor(props, context) {
        super(props, context);
        context.setTitle(title);
        this.state = {
            base : ['통계학개론', '확률통계및프로그래밍', '데이터베이스'],
            sub : ['영상처리', '패턴인식', '인공지능', '지능형시스템', '멀티미디어정보검색', 'HCI개론', '데이터베이스프로그래밍', '데이터분석', '기계학습', '컴퓨터비젼시스템']
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
                        인공지능은 기계로부터 만들어진 지능을 말한다. 컴퓨터 공학에서 이상적인 지능을 갖춘 존재, 혹은 시스템에 의해 만들어진 지능, 즉 인공적인 지능을 뜻한다. 일반적으로 범용 컴퓨터에 적용한다고 가정한다. 이 용어는 또한 그와 같은 지능을 만들 수 있는 방법론이나 실현 가능성 등을 연구하는 과학 분야를 지칭하기도 한다.
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

Ai.contextTypes = { setTitle: PropTypes.func.isRequired };

export default Ai;
