import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: ""
    }
    this.changeHandler = this.changeHandler.bind(this)
  }
  changeHandler(event) {
    let {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  render() {
    //ReactiveForms first and Controlled Forms next
    return (<div><input type="text" name="firstName" placeholder="First Name" onChange={this.changeHandler} />
      <input type="text" name="lastName" placeholder="Last Name" onChange={this.changeHandler} />
      <br /><br />
      <input type="text" value={this.state.firstName} name="firstName" placeholder="First Name" onChange={this.changeHandler} />
      <input type="text" value={this.state.lastName} name="lastName" placeholder="Last Name" onChange={this.changeHandler} />
      <p>{this.state.firstName + " " + this.state.lastName}</p>
    </div>)
  }
}

export default App;
