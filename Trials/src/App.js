import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      answer: "yes",
      count: 0
    }
    this.changeValue = this.changeValue.bind(this)
  }
  textGenerator() {
    return "Hello React World!!"
  }
  changeValue() {
    this.setState(prevState => {
      return { count: prevState.count + 1 }
    }
    )
  }
  render() {
    return (<div>
      <h1>{this.state.count}</h1>
      <button onClick={this.changeValue}>Change!</button>
      <hr /><hr />
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
