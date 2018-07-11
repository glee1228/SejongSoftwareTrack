/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import TrackInfo from '../../TrackInfo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  ProgressBar,
  Alert
} from 'react-bootstrap';
import Navbar, {Brand} from 'react-bootstrap/lib/Navbar';
import history from '../../core/history';
import $ from "jquery";

const logo = require('./sejong_logo.png');
const sejongBar = require('./sejong_bar.jpg');
const sejongBarTitle = require('./sejong_deco_title.png');

class Header extends React.Component{

  onLogout(){
    localStorage.removeItem('user');
    location.reload();
  }

  renderLogout(){
    return(
      <NavDropdown title={<i className="fa fa-user fa-fw"></i> } id = 'navDropdown4'>
             <MenuItem eventKey="1">
               <span> <i className="fa fa-user fa-fw"></i> User Profile </span>
             </MenuItem>
             <MenuItem eventKey="2">
               <span><i className="fa fa-gear fa-fw"></i> Settings </span>
             </MenuItem>
             <MenuItem divider />
             <MenuItem eventKey = "4" onClick = {()=>this.onLogout()}>
               <span> <i className = "fa fa-sign-out fa-fw" /> Logout </span>
             </MenuItem>
       </NavDropdown>
    );
  }

  renderLogin(){
    return(
      <NavItem onClick = {e =>{e.preventDefault();  history.push('/login') }}>
        <span> <i className = "fa fa-sign-in fa-fw" /> Login </span>
      </NavItem>
    );
  }

  renderSingleTrack(trackName, trackSpec, lectures){
    let pCount = 0;//필수 충족수
    let pTotal = trackSpec["트랙기초교과"].length;//전체 필수과목
    let cCount = 0;//선택 충족수
    let cTotal;
    let pText="";
    let cText="";
    if(trackSpec["트랙응용교과"].length>6){
      cTotal = 6;
    }else{
      cTotal = trackSpec["트랙응용교과"].length;
    }
    for(let i=0; i< trackSpec["트랙기초교과"].length; i++){
      for(let j in lectures){
        if(lectures[j][7]==trackSpec["트랙기초교과"][i]){
          pCount++;
          if(pCount>1){
            pText+=", ";
          }
          pText+=trackSpec["트랙기초교과"][i];
        }
      }
    }
    for(let i=0; i< trackSpec["트랙응용교과"].length; i++){
      for(let j in lectures){
        if(lectures[j][7]==trackSpec["트랙응용교과"][i]){
          cCount++;
          if(cCount>1){
            cText+=", ";
          }
          cText+=trackSpec["트랙응용교과"][i];
        }
      }
    }
    let percent = parseInt((pCount+cCount)*100/(pTotal+cTotal));
    return(
      <MenuItem style={ {width: 300} }>
        <div>
          <p> <strong>{trackName}</strong> <span className="pull-right text-muted">{percent}% Complete</span> </p>
          <div>
            <ProgressBar  bsStyle="danger" now={percent} />
          </div>
        </div>
      </MenuItem>
    );
  }

  renderDivider(){
    return <MenuItem divider/>;
  }

  renderTrack(lectures){
    if(lectures == null){
      return;
    }
    let items = [];
    let count = 0;
    for(let key in TrackInfo){
      count ++;
      if(count>3){
        break;
      }
      items.push(this.renderSingleTrack(key,TrackInfo[key],lectures));
      items.push(this.renderDivider());
    }
    return(

       <NavDropdown title={<span><i className="fa fa-tasks fa-fw"></i> </span>} id = 'navDropdown2222'>
        {items}
        <MenuItem eventKey="5" onClick={e=>{e.preventDefault(); history.push('/mytrack');}}>
            <strong>See All Tasks</strong> <i className="fa fa-angle-right"></i>
        </MenuItem>
  </NavDropdown>
    );
  }

  render() {
    let lectures;
    if(localStorage.getItem('user')!=null){
      lectures = JSON.parse(localStorage.getItem('user')).lecture;
    }else{
      lectures = null;
    }
    return (
      <div id="wrapper" className="content">
        <Navbar fluid={true}>
            <Brand>
              <span>
                <img src={logo} alt="Start React" title="Start React"/>
                <span>&nbsp;<b onClick={(e)=>{e.preventDefault(); history.push('/');}}>ACADEMIA</b></span>
                  <button type="button" className="navbar-toggle" onClick={() => {toggleMenu();}} style={{position: 'absolute', right: 0, top: 0}}>
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
              </span>
            </Brand>
            <ul className="nav navbar-top-links navbar-right">
                    {this.renderTrack(lectures)}
                    {localStorage.getItem('user')!=null?this.renderLogout():this.renderLogin()}
            </ul>
            <div className="header-decoration">
              <img className="bar-img" src={sejongBar}/>
              <img className="bar-title" src={sejongBarTitle}/>
            </div>
        </Navbar>
      </div>
    );
  }
}
function toggleMenu(){
    if($(".navbar-collapse").hasClass('collapse')){
      $(".navbar-collapse").removeClass('collapse');
    }
    else{
      $(".navbar-collapse").addClass('collapse');
    }
}
export default Header;
