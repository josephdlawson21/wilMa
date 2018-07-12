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

import Slider from "react-slick";



class App extends Component {

  constructor(props) {
      super(props);


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
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    }
    return(
        <div>
          {this.checkLogin()}


          <div>
            hello {localStorage.name}
          </div>

          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>

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
