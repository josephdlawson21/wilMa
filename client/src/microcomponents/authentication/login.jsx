import React, { Component, PropTypes }	 from 'react';
import { connect } 						 from 'react-redux';
import { bindActionCreators }			 from 'redux';
import { Redirect }						 from 'react-router';
import { Button,
		 Form,
		 Col,
		 Column,
		 Row,
		 FormGroup,
		 ControlLabel}					 from 'react-bootstrap';
import { logIn }						 from '../../actions/authenticationActions.js';


class LogInPage extends Component{

	constructor(props) {
		super(props);

		this.state = {
			password: 			"",
			email: 	  			"",
			name: 	  			"",
			loggedIn: false
		}

		this.handleChange 						= this.handleChange.bind(this);
		this.submit 							= this.submit.bind(this);
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}


	submit = (e) => {
		e.preventDefault()
		console.log(e);
		// const { logIn } = this.props;

		// const data 		=  {};
		localStorage.email = this.state.email;
		localStorage.password	= this.state.password;
		localStorage.name	= this.state.name;
		localStorage.loggedIn	= true;

		this.setState({
			loggedIn: true
		});

		console.log("bruh");

		// logIn(data)
	}


	render () {
		console.log(this.state.loggedIn);
		return (
			<div className="logInContent" >
				{this.state.loggedIn ? <Redirect to="/home" /> : null }
				<h2>LogIn</h2>
				<Form className="auth-form">
					<Row>
						<Row>
							<Col xs={ 3 }>
								<FormGroup controlId="horizontalPassword">
								<ControlLabel className="auth-labels">Name</ControlLabel>
								<input
									className="form-control"
									type="name"
									placeholder="name"
									name="name"
									value={this.state.name}
									onChange={this.handleChange}
								/>
								</FormGroup>
							</Col>
						</Row>
						<Row>
							<Col xs={ 3 }>
								<FormGroup controlId="horizontalPassword">
									<ControlLabel className="auth-labels">Email</ControlLabel>
									<input
										className="form-control"
										type="email"
										placeholder="email"
										name="email"
										value={this.state.email}
										onChange={this.handleChange}
									/>
								</FormGroup>
							</Col>
						</Row>

						<Row>
							<Col xs={ 3 }>
								<FormGroup controlId="horizontalPassword">
								<ControlLabel className="auth-labels">Password</ControlLabel>
								<input
									className="form-control"
									type="password"
									placeholder="password"
									name="password"
									value={this.state.password}
									onChange={this.handleChange}
								/>
								</FormGroup>
							</Col>
						</Row>
						<Button onClick={this.submit} type="submit" bsStyle ="success">Login</Button>
					</Row>
				</Form>
			</div>
		)
	}
}

function mapStateToProps(state) {
    return {
        authentication: state.authentication
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ logIn }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInPage);
