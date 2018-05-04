import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';




class App extends Component {
  constructor() {
    super();

    this.state = {
          inventoryList: [
            {name:"mona list",price:500000,image:"imageurl"},
            {name:"mona list",price:500000,image:"imageurl"},
            {name:"mona list",price:500000,image:"imageurl"}
          ]
      
    }
}


  render() {
    return (
      <div className="App">
        <div>
          <Header/>
          <Dashboard list={this.state.inventoryList}/>
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
