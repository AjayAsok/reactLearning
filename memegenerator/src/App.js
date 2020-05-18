import React from 'react';
import './App.css';
import Footer from "./components/Footer"
import MainContent from "./components/MainContent"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import './Style.css';
import contents from "./data/contentData"


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: contents
    }
  }
  render() {
    let contentComponent = this.state.todoList.map(element =>
      <MainContent key={element.id} item={element} />
    )
    return (
      <div className="App">
        <Header />
        <Navbar />
        <div className="todo-list">
          {contentComponent}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
