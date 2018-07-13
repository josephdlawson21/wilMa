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

// const curl 									= require('curlrequest');

import {Launcher} from 'react-chat-window'


class LogInPage extends Component{

	constructor(props) {
		super(props);

		this.state = {
			password: 			"",
			email: 	  			"",
			name: 	  			"",
			loggedIn: false,
			messageList: [],
	    newMessagesCount: 0,
	    chatIsOpen: true,
		}

		this.handleChange 						= this.handleChange.bind(this);
		this.submit 							= this.submit.bind(this);
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

_onMessageWasSent(message) {
	console.log("message", message);
	this.setState({
		messageList: [...this.state.messageList, message]
	})
	fetch('https://1e43a1c1.ngrok.io/reply', {
	  method: 'POST',
	  headers: {
	    'Accept': 'application/json',
	    'Content-Type': 'application/json',
	  },
	  body: JSON.stringify({
	    "username": 'joseph',
	    "message": message.data.text,
	  })
}).then(res => res.json() ).then((res) => {
	console.log("bruh",res.reply);
	let h = res.reply
	this.setState({
		messageList: [...this.state.messageList, {
			author: 'them',
			type: 'text',
			data: {text: h }
		}]
	});
})

}

_sendMessage(text) {
	console.log("textBruh",text);
	if (text.length > 0) {
		const newMessagesCount = this.state.isOpen ? this.state.newMessagesCount : this.state.newMessagesCount + 1
		this.setState({
			newMessagesCount: newMessagesCount,
			messageList: [...this.state.messageList, {
				author: 'them',
				type: 'text',
				data: { text }
			}]
		})
	}
}

_handleClick() {
	this.setState({
		chatIsOpen: !this.state.chatIsOpen,
		newMessagesCount: 0
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

	renderChat = () => {
	  return (
	    <Launcher
	      agentProfile={{
	        teamName: 'Say hi to Wilma',
	        // imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
	      }}
	      onMessageWasSent={this._onMessageWasSent.bind(this)}
	      messageList={this.state.messageList}
	      className="chatThing"
	      newMessagesCount={this.state.newMessagesCount}
	      handleClick={this._handleClick.bind(this)}
	      isOpen={this.state.chatIsOpen}
	      showEmoji
	    />
	  )
	}


	render () {
		console.log(this.state.loggedIn);
		return (
			<div>
				{this.renderChat()}

			</div>
			// <div className="logInContent" >
			// 	{this.state.loggedIn ? <Redirect to="/home" /> : null }
			// 	<div className="header">
			// 		<div>
			//
			// 		</div>
			// 	</div>
			// 	<h2>LogIn</h2>
			// 	<Form className="auth-form">
			// 		<Row>
			// 			<Row>
			// 				<Col xs={ 3 }>
			// 					<FormGroup controlId="horizontalPassword">
			// 					<ControlLabel className="auth-labels">Name</ControlLabel>
			// 					<input
			// 						className="form-control"
			// 						type="name"
			// 						placeholder="name"
			// 						name="name"
			// 						value={this.state.name}
			// 						onChange={this.handleChange}
			// 					/>
			// 					</FormGroup>
			// 				</Col>
			// 			</Row>
			// 			<Row>
			// 				<Col xs={ 3 }>
			// 					<FormGroup controlId="horizontalPassword">
			// 						<ControlLabel className="auth-labels">Email</ControlLabel>
			// 						<input
			// 							className="form-control"
			// 							type="email"
			// 							placeholder="email"
			// 							name="email"
			// 							value={this.state.email}
			// 							onChange={this.handleChange}
			// 						/>
			// 					</FormGroup>
			// 				</Col>
			// 			</Row>
			//
			// 			<Row>
			// 				<Col xs={ 3 }>
			// 					<FormGroup controlId="horizontalPassword">
			// 					<ControlLabel className="auth-labels">Password</ControlLabel>
			// 					<input
			// 						className="form-control"
			// 						type="password"
			// 						placeholder="password"
			// 						name="password"
			// 						value={this.state.password}
			// 						onChange={this.handleChange}
			// 					/>
			// 					</FormGroup>
			// 				</Col>
			// 			</Row>
			// 			<Button onClick={this.submit} type="submit" bsStyle ="success">Login</Button>
			// 		</Row>
			// 	</Form>
			// </div>

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
