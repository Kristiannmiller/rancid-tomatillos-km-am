import React, { Component } from 'react';
import ApiCalls from '../ApiCalls.js';
import './Login.css';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
      //name: 'Olivia', email: 'olivia@turing.io', password: 'pword'
    }
  }

  getUserInput = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    ApiCalls.postUserLogin(this.state)
    .then(data => {console.log(data)
    return data
    })
  }

  //need method to authenticate username & password

  render() {
    return (
      <form>
        <input
          type='text'
          label='email input'
          placeholder='Email'
          name='email'
          value={this.state.email.toLowerCase()}
          onChange={this.getUserInput}
        />
        <input
          type='password'
          label='password input'
          placeholder='Password'
          name='password'
          value={this.state.password}
          onChange={this.getUserInput}
        />
        <button onClick={this.handleSubmit}>Login</button>
      </form>
    )
  }
}

export default Login;
