import React from 'react';
import './App.css';
import Conditional from "./Conditional"
import Login from "./Login"
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      answer: "yes",
      count: 0,
      unreadMsgs: ["This is the first msg", " ", "This is a second msg"],
      isLoggedIn: true
    }
    this.changeValue = this.changeValue.bind(this)
  }
  textGenerator() {
    return "Hello React World!!"
  }
  changeValue() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }
  componentDidMount() {
    setTimeout(() => {

      this.setState({
        isLoading: false
      })

    }, 1000)
  }
  render() {
    return (<div>
      <Login />
      <h1>{this.state.unreadMsgs && this.state.unreadMsgs}</h1>
      <Conditional isLoading={this.state.isLoading} />
      <h1>{this.state.count}</h1>
      <button onClick={this.changeValue}>Change!</button>
      <hr /><hr />
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


export default App;
