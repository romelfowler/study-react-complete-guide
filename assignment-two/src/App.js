import React, { Component } from 'react';
import InputList from './Input/Input';

import './App.css';
import ValidateComponent from './Validate/Validate';


class App extends Component {
  state = {
    name: [
      {name: "Jon"}
    ],
    nameLegnth: [
      {name: 5}
    ]
  }
  inputChangeListener = (event) => {
    this.setState({
      name: [
        {name: event.target.value}
      ]
    });
  }
  render() {
    return (
      <div className="App">
        <InputList
          changed={this.inputChangeListener}
        />
        <ValidateComponent
          name={this.state.name[0].name}
        />
      </div>
    );
  }
}

export default App;
