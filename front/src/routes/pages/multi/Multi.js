import React,{PropTypes} from 'react';
import {Row, PageHeader} from 'react-bootstrap';


const title = '멀티미디어';
const descImg = require('../../../public/multi.png');

class Multi extends React.Component {
    constructor(props, context) {
        super(props, context);
        context.setTitle(title);
        this.state = {
            base : ['멀티미디어', '선형대수및프로그래밍', '통계학개론'],
            sub : ['신호및시스템', '디지털신호처리', '멀티미디어데이터베이스', '패턴인식', '컴퓨터비전시스템', '영상처리', '영상처리프로그래밍', '모바일프로그래밍']
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
                        멀티미디어 또는 다중 매체는 Multum과 Medium를 합친 낱말이며, 여러 형식의 정보 콘텐츠와 정보 처리 를 사용하여 사용자에게 정보를 제공하고 즐거움을 주는 미디어를 뜻한다. 초기의 컴퓨터에서는 문자만 처리할 수 있었지만 입력과 출력의 기술 향상으로 음향, 영상으로 되어있는 다양한 매체를 처리할 수 있게 되었다.
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

Multi.contextTypes = { setTitle: PropTypes.func.isRequired };

export default Multi;
