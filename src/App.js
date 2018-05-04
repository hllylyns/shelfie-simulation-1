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
          inventory: []
    }
}

componentDidMount(){
  axios.get('api/inventory').then(res=>{
    console.log(res.data);
    this.setState({inventory: res.data});
  })
}


  render() {
    return (
      <div className="App">
        <div>
          <Header/>
          <Dashboard list={this.state.inventory}/>
          <Form invList={this.componentDidMount}/>
        </div>
      </div>
    );
  }
}

export default App;
