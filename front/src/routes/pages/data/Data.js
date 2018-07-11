
import React, { PropTypes } from 'react';
import { Row, PageHeader } from 'react-bootstrap';

const descImg = require('../../../public/data.png');

class Data extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            base : ['데이터베이스', '통계학개론', '확률통계및프로그래밍'],
            sub : ['데이터분석개론', '기계학습', '데이터기반인공지능', '비즈니스인텔리전스', '데이터시각화', '대용량데이터처리개론', '텍스트마이닝', '의사결정모델링', '컴퓨터그래픽스']
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
                        <PageHeader>데이터 사이언스</PageHeader>
                    </div>
                </Row>

                <Row className="text-center">
                    <img className="track-img" src={descImg}/>
                </Row>

                <Row className="track-description">
                    <h4>소개</h4>
                    <p style={introStyle}>
                        데이터의 구체적인 내용이 아닌 서로 다른 성질의 내용이나 형식의 데이터에 공통으로 존재하는 성질, 또는 그것들을 다루기 위한 기술의 개발에 착안점을 둔다는 특징을 가진다.
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

export default Data;