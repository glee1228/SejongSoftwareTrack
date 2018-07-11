/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
// import { Panel, Input, Button } from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import { FormControl, Checkbox, Alert } from 'react-bootstrap';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Login.css';
import history from '../../core/history';

const title = 'Log In';


function submitHandler(e) {
  e.preventDefault();
  console.log(e);
  //history.push('http://localhost:5000/login?id='+e);
}

class Login extends React.Component{
  constructor(props, context) {
    super(props, context);
    context.setTitle(title);
    this.state={
      id:"",
      pwd:"",
      state:"READY"
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event){
    this.setState({
      [event.target.id]:event.target.value
    });
  }

  handleSubmit(){
    if(this.state.state==="PROGRESS"){
      return;
    }
    this.setState({
      state:"PROGRESS"
    });
    fetch("http://localhost:5000/login?id="+this.state.id+"&pwd="+this.state.pwd)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            state:"SUCCESS"
          });
          let storage = localStorage;
          storage.setItem('user', JSON.stringify(result));
          location.replace('/');
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          alert("실패")
          this.setState({
            pwd:"",
            state: "FAIL"
          });
        }
      )
  }

  renderAlert(state){
    switch(state){
      case "READY":{
        return (
          <Alert bsStyle="info">
          <strong>환영합니다!</strong> 교내 블랙보드에서 사용하는 학번과 비밀번호를 입력하세요.
          </Alert>
        );
      }
      case "PROGRESS":{
        return (
          <Alert bsStyle="info">
            <strong>정보를 불러오는중...</strong> 인터넷 상태에 따라 많이 늦을 수 있습니다.
          </Alert>
        );
      }
      case "SUCCESS":{
        return(
          <Alert bsStyle="success">
            <strong>로그인 성공!</strong>
          </Alert>
        )
      }
      case "FAIL":{
        return(
          <Alert bsStyle="danger">
            <strong>로그인 실패!</strong> ID 또는 패스워드를 바꿔서 다시 시도해보세요.
          </Alert>
        )
      }
    }
    return(
      <Alert bsStyle="warning">
        <strong>Holy guacamole!</strong> 에러
      </Alert>
    );
  }

  render(){
    return (
        <div className="col-md-4 col-md-offset-4">
          <div className="text-center">
            <h1 onClick = {e =>{e.preventDefault();  history.push('/') }} className="login-brand-text"><b>ACADEMIA</b></h1>
            <p>Created By 코딩대장</p>
          </div>

          <Panel header={<h3>Please Sign In</h3>} className="login-panel">
            {this.renderAlert(this.state.state)}
            <form role="form">
              <fieldset>
                <div className="form-group">
                  <FormControl
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    name="id"
                    id="id"
                    onChange={this.handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <FormControl
                    className="form-control"
                    placeholder="Password"
                    type="password"
                    name="pwd"
                    id="pwd"
                    onChange={this.handleInputChange}
                  />
                </div>
                <Checkbox label="Remember Me" > Remember Me </Checkbox>
                <Button type="button" bsSize="large" bsStyle="success" onClick={this.handleSubmit}  block>Login</Button>
              </fieldset>
            </form>

          </Panel>

        </div>

      );
  }
}


Login.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Login);
