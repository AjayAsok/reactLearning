import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactCard from "./components/ContactCard"
import Joke from "./components/Joke"

function App() {
  return (
    <div>
      <ContactCard contact={{
        imageUrl: "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/kitten-440379.jpg?h=c8d00152&itok=1fdekAh2",
        name: "Ajay",
        phone: "+441234567890",
        email: "ajay@12354.com"
      }} />
      <Joke joke={{
        punchLine: "This seems to be a punchLine"
      }} />
      <Joke joke={{
        question: "Is this a question?",
        punchLine: "This seems to be a punchLine"
      }} />
      <Joke joke={{
        question: "Is this a question?",
        punchLine: "This seems to be a punchLine"
      }} />
      <Joke joke={{
        question: "Is this a question?",
        punchLine: "This seems to be a punchLine"
      }} />
      <Joke joke={{
        question: "Is this a question?",
        punchLine: "This seems to be a punchLine"
      }} />
    </div>
  )
}

export default App;
