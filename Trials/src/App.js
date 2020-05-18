import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      answer: "yes"
    }
  }
  textGenerator() {
    return "Hello React World!!"
  }

  render() {
    return (<div>
      <LoginComponent />
      <h1>Is the state important? {this.state.answer} </h1>
      <Header userName="user" />
    </div>
    )

  }
}
class Header extends React.Component {
  render() {
    return (<header>
      <p>Welcome, {this.props.userName}</p>
    </header>)
  }
}

class LoginComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false
    }
  }
  render() {
    return (<h1>You are Currently logged{this.state.isLoggedIn ? "in" : "out"}</h1>)
  }
}

export default App;
