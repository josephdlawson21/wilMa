import React, { Component }                 from 'react';
import { Route, Redirect } from 'react-router'
import { Button,
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
         MenuItem}					 from 'react-bootstrap';

import Dropzone from 'react-dropzone'

import SimpleSlider from "../microcomponents/slider";



class App extends Component {

  constructor(props) {
      super(props);


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

  checkLogin = () => {
    if(!localStorage.loggedIn){
      return <Redirect to="/login"/>
    }
  }

  render() {

    return(
        <div>
          {this.checkLogin()}


          <div>
            hello {localStorage.name}
          </div>

          <SimpleSlider/>

          <div>
            sselect some dependets and what they get
          </div>

          <Dropzone className="dropzone" onDrop={this.onDrop.bind(this)}>
            <h5>Upload stuff</h5>
            <p></p>
          </Dropzone>

        </div>

        )

  }
}

export default App
