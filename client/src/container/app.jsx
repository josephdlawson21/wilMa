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

// import { ipfs, ipfsAddress } from "../utils/ipfs";

class App extends Component {
  state = {
    showTreasure: false
  };

  // getter = _query => {
  //   ipfs.files.get(_query, (err, _file) => {
  //     let obj = JSON.parse(_file[0].content.toString("utf8"));
  //     console.log(obj.digital);
  //     this.setState(
  //       {
  //         digital: obj.digital,
  //         distribution: obj.distribution,
  //         memory: obj.memory
  //       },
  //       () => {
  //         console.log(this.state.digital);
  //         console.log(this.state.distribution);
  //         console.log(this.state.memory);
  //       }
  //     );
  //   });
  // };

  // uploader = (_file, _type) => {
  //   let content = _file;
  //   content = new Buffer(content);
  //   ipfs.files.add(
  //     content,
  //     function(err, res) {
  //       //console.log(err, res);
  //       let result = res[0].path;
  //       console.log(result);
  //       if (_type == 1) {
  //         console.log(this.state.digital);
  //         newStateArray.push(result);
  //         this.setState({ digital: newStateArray });
  //       } else if (_type == 2) {
  //         let arr = [];
  //         arr = this.state.distribution;
  //         arr.push(res[0].path);
  //         this.setState({ distribution: arr });
  //       } else if (_type == 3) {
  //         let arr = [];
  //         arr = this.state.memory;
  //         arr.push(res[0].path);
  //         this.setState({ memory: arr });
  //       }
  //     },
  //     () => {
  //       console.log(this.state.data);
  //     }
  //   );
  // };

  componentDidMount() {
    // NOTE: Jimmy  put call here
    // console.log(this.state.address);
    // this.getter(this.state.address);
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
        {this.showTreasure ? (
          <div>
            <SimpleSlider />
            <Dropzone className="dropzone" onDrop={this.onDrop.bind(this)}>
              <h5>Upload stuff</h5>
              <p />
            </Dropzone>
          </div>
        ) : (
          <div className="app">
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
              <Col md={5}>
                <Row className="digitalShit">digital Shit</Row>
                <Row className="memories">Memories</Row>
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
          </div>
        )}
        // <SimpleSlider />
        // <div>sselect some dependets and what they get</div>
        //{" "}
        <Dropzone className="dropzone" onDrop={this.onDrop.bind(this)}>
          // <h5>Upload stuff</h5>
          // <p />
          //{" "}
        </Dropzone>
      </div>
    );
  }
}

export default App;
