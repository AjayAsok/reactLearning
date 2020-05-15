import React from 'react';
import './App.css';
import Footer from "./components/Footer"
import MainContent from "./components/MainContent"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import './Style.css';

function App() {
  return (
    <div className="App">
      {/* <ul>
        <li>
          <input type="checkbox" id="checkitem1"></input>
          <label for="checkitem1">Check Item1</label></li>
        <li>
          <input type="checkbox" id="checkitem2"></input>
          <label for="checkitem2">Check Item2</label>
        </li>
        <li>
          <input type="checkbox" id="checkitem3"></input>
          <label for="checkitem3">Check Item3</label>
        </li>
      </ul> */}
      <Header />
      <Navbar />
      <div className="todo-list">
        <MainContent />
        <MainContent />
        <MainContent />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
