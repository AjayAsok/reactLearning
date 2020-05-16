import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactCard from "./components/ContactCard"
import Joke from "./components/Joke"
import jokes from "./data/jokeData"
import Product from "./components/Product"
import products from "./data/productData"

function App() {
  const joke = jokes.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
  )
  let product = products.map(product => <Product key={product.id} name={product.name} price={product.price} description={product.description} />)
  return (<div>
    <h1>Product Component</h1>
    {product}
    <hr />
    <hr />
    <hr />
    <hr />
    <h1>ContactcardComponent</h1>
    <ContactCard contact={{
      imageUrl: "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/kitten-440379.jpg?h=c8d00152&itok=1fdekAh2",
      name: "Ajay",
      phone: "+441234567890",
      email: "ajay@12354.com"
    }} />
    <hr />
    <hr />
    <hr />
    <hr />
    <h1>Joke Component</h1>
    {joke}</div>)
}

export default App;