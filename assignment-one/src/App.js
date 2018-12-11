import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

import './App.css';


class App extends Component {
  state = {
    user : [
      {username : "Username"}
    ]
  }
  changeHandler = (event) => {
    this.setState({
      user : [
        {username : event.target.value}
      ]
    }) 
  }

  render() {

    return (
      <div className="App">
        <UserInput
          username={this.state.user[0].username}
          changed={this.changeHandler}
        />
        <UserOutput 
          username={this.state.user[0].username}
        
        />
      </div>
    );

  }
}

export default App;
