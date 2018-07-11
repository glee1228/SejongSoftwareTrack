import React, { PropTypes } from 'react';
import { Panel, Col, Row, PageHeader } from 'react-bootstrap';

class Mysubject extends React.Component {
    static contextTypes = { setTitle: PropTypes.func.isRequired };

    constructor(props, context) {
        super(props, context);
    }

    renderLecture(lecture){
      return(
        <tr>
            <td>{lecture[1]+(lecture[3]==1?(lecture[2]==1?"여름학기":"겨울학기"):"-"+lecture[2])} </td>
            <td>{lecture[7]+"("+lecture[6]+")"}</td>
            <td>{lecture[0]}</td>
            <td>{lecture[5]}</td>
        </tr>
      );
    }
    renderLectureList(lectures){
      if(lectures == null){
        return <tbody/>
      }
      let item = [];
      for(let key in lectures){
        item.push(this.renderLecture(lectures[key]));
      }
      return (
        <tbody>{item}</tbody>);
    }

    render() {
      let lectures;
      if(localStorage.getItem('user')!=null){
        lectures = JSON.parse(localStorage.getItem('user')).lecture;
      }else{
        lectures = null;
      }
        return (
            <div>
                <Row>
                    <PageHeader>이미 수강한 과목</PageHeader>
                </Row>

                <Row>
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th>학기</th>
                                <th>과목 명</th>
                                <th>교수 명</th>
                                <th>학수번호</th>
                            </tr>
                            </thead>
                            {this.renderLectureList(lectures)}
                        </table>
                    </div>
                </Row>
            </div>
        );
    }
}

export default Mysubject;
