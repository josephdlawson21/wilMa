import React, { Component }                 from 'react';
import { Route, Redirect } from 'react-router'



class App extends Component {

    constructor(props) {
        super(props);


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
                Wilma
              </div>

              <div>
                upload somestufff and connect soome accounts
              </div>

              <div>
                sselect some dependets and what they get
              </div>

            </div>

            )

    }
}

export default App
