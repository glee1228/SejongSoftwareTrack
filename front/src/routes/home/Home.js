import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Row, PageHeader } from 'react-bootstrap';

import s from './Home.css';

const PageTitle = "아카데미아";

const academiaImg = require('../../public/academia.png');

class Home extends React.Component {
    static propTypes = {};
    static contextTypes = { setTitle: PropTypes.func.isRequired };

    constructor(props, context) {
        super(props, context);
        context.setTitle(PageTitle);
    }

    render() {
        let highlight = {fontSize:20, color: "red"};
        return (
            <div>
                <Row>
                    <div className="col-lg-12">
                        <PageHeader>아카데미아 소개</PageHeader>
                    </div>
                </Row>

                <Row className="text-center">
                    <img style={{width:890}} src={academiaImg}/>
                </Row>

                <Row className="description">
                    <div className="bs-callout bs-callout-default">
                        <p><b style={highlight}>ACADEMIA</b>는 기원전 387년 철학자 플라톤이 지명인 [아카데메이아]를 본따 지은 학원의 이름입니다.</p>
                    </div>
                    <p>

                        산술, 기하학, 천문학을 가르치고 일정한 예비훈련을 거쳐 이상적인 통치자가 받아야할 교육을 가르쳤습니다.
                        <br/><br/>

                        <b style={highlight}>ACADEMIA</b>는 세종대학교 소프트웨어융합대학 재학생들이 트랙과정을 이수하고 트랙 별 담당 교수들의 이수에 대한 지도 및 트랙 관련 분야 기업들에 대한 취업지도와 대학원 진학 지도 등 효과적인 관리를 도와 21세기 사회의 IT인재를 길러내는데 도움을 주는 학교입니다.
                    </p>
                </Row>
            </div>
        );
    }
}

export default withStyles(s)(Home);
