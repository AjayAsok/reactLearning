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
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(id) {
    // take a look at the entire thing
    this.setState(prevState => {
      let newList = prevState.todoList.map(content => {
        if (content.id === id) {
          content.completed = !content.completed
        }
        return content
      })
      return { todoList: newList }
    })
  }
  render() {
    let contentComponent = this.state.todoList.map(element =>
      <MainContent key={element.id} item={element} handleChange={this.handleChange} />
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
