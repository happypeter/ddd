import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import dog from './dog.jpg'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>小鸡快跑</h2>
          <img className='dog' src={dog} alt='dog' />
        </div>
      </div>
    )
  }
}

export default App
