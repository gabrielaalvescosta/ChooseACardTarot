import './App.css'
import React, { Component } from 'react'
import Cards from './components/Cards/Cards'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <Cards />
       <Footer />
      </div>
    )
  }
}

export default App;