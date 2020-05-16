import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactCard from "./components/ContactCard"

function App() {
  return (
    <div>
      <ContactCard contact={{
        imageUrl: "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/kitten-440379.jpg?h=c8d00152&itok=1fdekAh2",
        name: "Ajay",
        phone: "+441234567890",
        email: "ajay@12354.com"
      }} />
      <ContactCard contact={{
        imageUrl: "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/kitten-440379.jpg?h=c8d00152&itok=1fdekAh2",
        name: "Ajay",
        phone: "+441234567890",
        email: "ajay@12354.com"
      }} />
      <ContactCard contact={{
        imageUrl: "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/kitten-440379.jpg?h=c8d00152&itok=1fdekAh2",
        name: "Ajay",
        phone: "+441234567890",
        email: "ajay@12354.com"
      }} />
    </div>
  )
}

export default App;
