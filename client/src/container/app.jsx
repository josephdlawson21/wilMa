import React, { Component }                 from 'react';
import { Route, Redirect } from 'react-router'
import { Button,
    		 Form,
    		 Col,
    		 Column,
    		 Row,
         Table,
    		 FormGroup,
    		 ControlLabel,
         Navbar,
         Nav,
         NavItem,
         NavDropdown,
         MenuItem}					 from 'react-bootstrap';

import Dropzone from 'react-dropzone'

import SimpleSlider from "../microcomponents/slider";
import FriendSlider from "../microcomponents/friendSlider";
import DigitalSlider from "../microcomponents/digitalSlider";
import TreasureSlider from "../microcomponents/treasureSlider";



class App extends Component {

  state = {
    showTreasure: false,
    mode: "friends",
    friends: [ {
      "src": "https://srkheadshotday.com/wp-content/uploads/Mike_Fitzgibbons_Headshot_15E4437.jpg",
      "name": "John Williams",
      "email": "Jwilliams@gmail.com",
      "relationship": "Brother"
    },
    {
      "src": "https://srkheadshotday.com/wp-content/uploads/Michael_Schwarz_Headshot_1A1704.jpg",
      "name": "Bill Williams",
      "email": "Bwilliams@gmail.com",
      "relationship": "uncle"
    },
    {
      "src": "https://srkheadshotday.com/wp-content/uploads/Isabelle_Pawlik_Headshot_16C3282_SQ1.jpg",
      "name": "Chloe Williams",
      "email": "Cwilliams@gmail.com",
      "relationship": "wife"
    }
    ],
    digital: [ {
      "src": require('../../public/assets/facebookLogo.png'),
      "name": "Facebook",
      "userName": "coolguy21",
      "password": "bruh"
    },
    {
      "src": require('../../public/assets/twitterLogo.png'),
      "name": "Twitter",
      "userName": "wow",
      "password": "bruh"
    },
    {
      "src": require('../../public/assets/wellsfargoLogo.png'),
      "name": "WellsFargo",
      "userName": "bankAccount",
      "password": "bruh"
    }
    ]
  }

  componentDidMount() {
    // NOTE: Jimmy  put call here
  }

  onDrop = (files) => {

    console.log(files)

    const formData = new FormData();

    //todo: roll in a map
    formData.append('file', files[0]);

    uploadWireframe(formData);


    //temp approach... change to event driven approach
    setTimeout(() => {
      console.log("refreshing if it was event based...")
      getStartingObj()
    }, 10000)



  }

  handleRoute = () => {
    console.log("bruh");
    switch (this.state.mode) {
      case "friends":
        return this.renderFriends()
        break;
      case "will":
        return this.renderWill()
        break;
      case "digital":
        return this.renderDigital()
        break;
      case "treasure":
        return this.renderTreasure()
        break;
      default:

    }
  }



  renderFriends = () => {
    return (
      <div>
        <FriendSlider friends={this.state.friends} />
        <img className="addBenefactorButton" src={require('../../public/assets/addBenefactor.png')} alt=""/>
      </div>
    )
  }
  renderWill = () => {
    return <div>will</div>
  }
  renderDigital = () => {
    return (
      <div>
        <DigitalSlider digital={this.state.digital} />
        <img className="addBenefactorButton" src={require('../../public/assets/addService.png')} alt=""/>
      </div>
    )
  }
  renderTreasure = () => {
    return <div>treasure</div>
  }

  handleClick = (e) => {
    this.setState({
      mode: e.target.id
    });
  }

  renderBubbles = () => {
    return (
      <div>
        <img className="dashboardButton" id='friends' src={require('../../public/assets/dashboardButton.png')} onClick={this.handleClick} />
        <img className="treasureChestButton" id='will' src={require('../../public/assets/treasureChestButton.png')} onClick={this.handleClick} />
        <img className="circlesButton" id="digital" src={require('../../public/assets/circlesButton.png')} onClick={this.handleClick} />
        <img className="circlesButton" id='treasure' src={require('../../public/assets/circlesButton.png')} onClick={this.handleClick} />
      </div>
    )
  }

  checkLogin = () => {
    if(!localStorage.loggedIn){
      return <Redirect to="/login"/>
    }
  }

  render() {

    return(
        <div>
          {this.checkLogin()}

          <div className='app'>
            <Row>
              <Col md={12} className="titleName">
                <img className="logoName" src={require('../../public/assets/Logo.png')}/>
              </Col>
            </Row>
            <Row>
              <Col md={1} className="bubblesDiv">
                {this.renderBubbles()}
              </Col>
              <Col md={10} className="willOverview">
                {this.handleRoute()}
                {/* <Row>
                  <Col md={6}>
                    <div>MY WILL OVERVIEW</div>
                    <div>last edited by you</div>
                    <div>7/13/2018</div>
                  </Col>
                  <Col md={6} className="willOverviewInnerDiv">
                    <div>34 Assets</div>
                    <div>in your will</div>
                  </Col>
                </Row>
                <Row>
                  <Col md={8} className="willTable">
                    <Table responsive>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>House</td>
                          <td>10/21/92</td>
                          <td>Masha Williams</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>House</td>
                          <td>10/21/92</td>
                          <td>Masha Williams</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>House</td>
                          <td>10/21/92</td>
                          <td>Masha Williams</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>House</td>
                          <td>10/21/92</td>
                          <td>Masha Williams</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>House</td>
                          <td>10/21/92</td>
                          <td>Masha Williams</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>House</td>
                          <td>10/21/92</td>
                          <td>Masha Williams</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                  <Col md={4}>
                    <div>
                      stuff
                    </div>
                  </Col>
                </Row> */}
              </Col>
              {/* <Col md={5} className="rightCloumn" >
                <Row className="digitalShit">
                  digital Shit
                </Row>
                <Row className="memories">
                  Memories
                </Row>
              </Col> */}
            </Row>

            {/* <Row>
              <Col md={5} mdOffset={1} className="willDetails">
                will Details
              </Col>
              <Col md={1} mdOffset={8} className="idkButton">
                <img className="addIcon" src={require("../../public/assets/addIcon.png")}/>
              </Col>
            </Row> */}

          </div>




          {/* {this.state.showTreasure ?
            <div>
              <SimpleSlider/>
              <Dropzone className="dropzone" onDrop={this.onDrop.bind(this)}>
                <h5>Upload stuff</h5>
                <p></p>
              </Dropzone>
            </div>
            :
             } */}




             <img className="waveImage" src={require('../../public/assets/Wave.png')} alt=""/>
        </div>

        )

  }
}

export default App
