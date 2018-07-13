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
         Modal,
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
    show: false,
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

  handleModalInfo = () => {
    switch (this.state.mode) {
      case "friends":
        return (
          <div className="friendsModalInfo">
            <h2>Add a Benificiary</h2>
            <label>Full Name</label>
            <br/>
            <input className="friendDivName" type="text" />
            <br/>
            <label>Email</label>
            <br/>
            <input className="friendDivName" type="text" />
            <br/>
            <label>Relationship</label>
            <br/>
            <input className="friendDivName" type="text" />
            <br/>
            <br/>
            <select className="friendDivName">
              <option >Uncle</option>
              <option >husband</option>
              <option >brother</option>
              <option >sister</option>
            </select>
          </div>
        )
        break;
      case "digital":
        return (
          <div className="friendsModalInfo">
            <h2>Add a Service</h2>
            <label>Service Name</label>
            <br/>
            <input className="friendDivName" type="text"/>
            <br/>
            <label>User Name</label>
            <br/>
            <input className="friendDivName" type="text"/>
            <br/>
            <label>Password</label>
            <br/>
            <input className="friendDivName" type="password" />
            <br/>
            <label>Confirm Password</label>
            <br/>
            <input className="friendDivName" type="password"/>
            <br/>
            <label>Benieficiary</label>
            <br/>
            <select className="friendDivName">
              <option >Bill Stweart</option>
              <option >John Mayer</option>
              <option >Phillip Morisson</option>
              <option >Jimmy Page</option>
            </select>
          </div>
        )
        break;
      case "treasure":
        return (
          <div className="friendsModalInfo">
            <h2>Add A Treasure</h2>

            <label>Type of Media</label>
            <br/>
            <select className="friendDivName">
              <option >Video</option>
              <option >Pdf</option>
              <option >Picture</option>
            </select>
            <br/>
            <label>Benieficiary</label>
            <br/>
            <select className="friendDivName">
              <option >Bill Stweart</option>
              <option >John Mayer</option>
              <option >Phillip Morisson</option>
              <option >Jimmy Page</option>
            </select>
            <br/>
            <br/>
            <label> Upload Here</label>
            <Dropzone className="dropzone" onDrop={this.onDrop.bind(this)}>
               <h5>Drag and Drop or Click</h5>
               <p></p>
             </Dropzone>
          </div>
        )
        break;
      case "will":
        return (
          <div className="friendsModalInfo">
            <h2>Upload the completed Will</h2>
            <br/>
            <Dropzone className="dropzone" onDrop={this.onDrop.bind(this)}>
               <h5>Drag and Drop or Click</h5>
               <p></p>
             </Dropzone>
          </div>
        )
        break;
      default:

    }
  }



  renderFriends = () => {
    return (
      <div>
        <FriendSlider friends={this.state.friends} />
        <img className="addBenefactorButton" onClick={this.handleShow} src={require('../../public/assets/addBenefactor.png')} alt=""/>
      </div>
    )
  }
  renderWill = () => {
    return (<div className="willDiv">
              <embed width="600px" height="600px" name="plugin" id="plugin" src="https://ipfs.infura.io/ipfs/QmRKvRDwtSWy68qncZ5pbXSQib1a6QmwX55YzaqMhQ8qpM" type="application/pdf" internalinstanceid="7"/>
              <img onClick={this.handleShow}  className="addeWillButton" src={require('../../public/assets/addItem.png')} alt=""/>
            </div>)
  }
  renderDigital = () => {
    return (
      <div>
        <DigitalSlider digital={this.state.digital} />
        <img onClick={this.handleShow}  className="addBenefactorButton" src={require('../../public/assets/addService.png')} alt=""/>
      </div>
    )
  }
  renderTreasure = () => {
    return (
      <div>
        <SimpleSlider/>
        <img onClick={this.handleShow}  className="addBenefactorButton" src={require('../../public/assets/addTreasure.png')} alt=""/>
      </div>
    )
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  handleClick = (e) => {
    this.setState({
      mode: e.target.id
    });
  }

  renderBubbles = () => {
    return (
      <div>
        <img className="dashboardButton" id='friends' src={require('../../public/assets/People.png')} onClick={this.handleClick} />
        <img className="treasureChestButton" id='will' src={require('../../public/assets/myWill.png')} onClick={this.handleClick} />
        <img className="circlesButton" id="digital" src={require('../../public/assets/digital.png')} onClick={this.handleClick} />
        <img className="circlesButton" id='treasure' src={require('../../public/assets/treasureChest.png')} onClick={this.handleClick} />
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

              </Col>

            </Row>

            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Body>
                {this.handleModalInfo()}
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.handleClose}>upload</Button>
                <Button onClick={this.handleClose}>Close</Button>
              </Modal.Footer>
            </Modal>

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
