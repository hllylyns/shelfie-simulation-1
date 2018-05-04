import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';




class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header/>
          <Dashboard/>
          <Form/>
        </div>
      </div>
    );
  }
}

export default App;
