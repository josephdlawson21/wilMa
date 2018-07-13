import React, { Component } from "react";
import { Route, Redirect } from "react-router";
import {
  Button,
  Form,
  Col,
  Column,
  Row,
  FormGroup,
  ControlLabel,
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from "react-bootstrap";

import Dropzone from "react-dropzone";

import SimpleSlider from "../microcomponents/slider";

//import { ipfsAddress, uploader, getter } from "../utils/ipfs";

class App extends Component {

  state = {
    showTreasure: false
  }

  componentDidMount() {
    // NOTE: Jimmy  put call here
    //console.log(ipfsAddress);
  }

  onDrop = files => {
    console.log(files);

    const formData = new FormData();

    //todo: roll in a map
    formData.append("file", files[0]);

    uploadWireframe(formData);

    //temp approach... change to event driven approach
    setTimeout(() => {
      console.log("refreshing if it was event based...");
      getStartingObj();
    }, 10000);
  };

  checkLogin = () => {
    if (!localStorage.loggedIn) {
      return <Redirect to="/login" />;
    }
  };

  render() {
    return (
      <div>
        {this.checkLogin()}

    return(
        <div>
          {this.checkLogin()}


          {this.showTreasure ?
            <div>
              <SimpleSlider/>
              <Dropzone className="dropzone" onDrop={this.onDrop.bind(this)}>
                <h5>Upload stuff</h5>
                <p></p>
              </Dropzone>
            </div>
            :
            <div className='app'>
              <Row>
                <Col md={12} className="titleName">
                  WILMA
                </Col>
              </Row>
              <Row>
                <Col md={1} className="bubblesDiv">
                  bubles
                </Col>
                <Col md={5} className="willOverview">
                  will OverView
                </Col>
                <Col md={5} >
                  <Row className="digitalShit">
                    digital Shit
                  </Row>
                  <Row className="memories">
                    Memories
                  </Row>
                </Col>
              </Row>

              <Row>
                <Col md={5} mdOffset={1} className="willDetails">
                  will
                </Col>
                <Col md={1} mdOffset={8} className="idkButton">
                  button
                </Col>
              </Row>

            </div> }




        <SimpleSlider />

        <div>sselect some dependets and what they get</div>

        <Dropzone className="dropzone" onDrop={this.onDrop.bind(this)}>
          <h5>Upload stuff</h5>
          <p />
        </Dropzone>
      </div>
    );
  }
}

export default App;
