import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import axios from 'axios';




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

componentDidMount(){
  axios.get('api/inventory').then(res=>{
    this.setState({inventoryList: res.data});
  })
}


  render() {
    return (
      <div className="App">
        <div>
          <Header/>
          <Dashboard list={this.state.inventoryList}/>
          <Form invlist={this.componentDidMount}/>
        </div>
      </div>
    );
  }
}

export default App;
