import React, { useState, useEffect } from 'react';
import './App.css';
// import Conditional from "./Conditional"
// import Login from "./Login"

const cityList = ["Cochin", "London", "Manchester"];
function App() {
  return (

    <>

      <City cities={cityList} />
      <Fragment />
      <StateChanger />
    </>)
}

function City({ cities }) {
  return (<ul>
    {cities.map(city => (
      <li key={city}>{city}</li>
    ))}
  </ul>)
}

function Fragment() {
  const [first, , third] = [1, 2, 3]
  return <h2>This is a fragment{first + " " + third}</h2>
}

//Use state Hook

function StateChanger() {
  const [status, setStatus] = useState("Open");
  useEffect(() => {
    alert(`status: ${status}`)
  }, [status])
  const [val1, setVal1] = useState({})
  const [val2, setVal2] = useState("")

  useEffect(() => {
    fetch("http://localhost:3100/students").then(response => response.json())
      .then(responseData => {
        this.setState({
          responseData: responseData
        })
      })
  }, [val1])
  useEffect(() => {
    alert(val2)
  }, [val2])
  return <>
    Here You can Change the Status
    <h3>Status: {status}</h3>
    val1
    <input value={val1} onChange={e => setVal1(e.target.value)} />
    <br />
    val2
    <input value={val2} onChange={e => setVal2(e.target.value)} />

    <button onClick={() => setStatus("Closed")}>Close</button>
    <button onClick={() => setStatus("Open")}>Open</button>
  </>
}

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       isLoading: true,
//       answer: "yes",
//       count: 0,
//       unreadMsgs: ["This is the first msg", " ", "This is a second msg"],
//       isLoggedIn: true
//     }
//     this.changeValue = this.changeValue.bind(this)
//   }
//   textGenerator() {
//     return "Hello React World!!"
//   }
//   changeValue() {
//     this.setState(prevState => {
//       return {
//         count: prevState.count + 1
//       }
//     })
//   }
//   componentDidMount() {
//     setTimeout(() => {

//       this.setState({
//         isLoading: false
//       })

//     }, 1000)
//   }
//   render() {
//     return (<div>
//       <Login />
//       <h1>{this.state.unreadMsgs && this.state.unreadMsgs}</h1>
//       <Conditional isLoading={this.state.isLoading} />
//       <h1>{this.state.count}</h1>
//       <button onClick={this.changeValue}>Change!</button>
//       <hr /><hr />
//       <h1>Is the state important? {this.state.answer} </h1>
//       <Header userName="user" />
//     </div>
//     )

//   }
// }
// class Header extends React.Component {
//   render() {
//     return (<header>
//       <p>Welcome, {this.props.userName}</p>
//     </header>)
//   }
// }


export default App;
