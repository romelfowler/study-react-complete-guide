import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';


class App extends Component {

// this only works on components - DEFINE STATE
// State only available from import React (not function comp)
  state = {
    persons: [
      {name: 'Max', age: 29 },
      {name: 'Manu', age: 30 },
      {name: 'Max', age: 27 },
    ]
  }

// buttons handler
switchNameHandler = (newName) => {
  // console.log('Was clicked');
  // DONT MUTATE this.state.persons[0].name = 'maxamilian';
  this.setState({
    persons: [
      {name: newName, age: 40 },
      {name: 'Manufest', age: 10 },
      {name: 'Stephani', age: 100 },
    ]
  })
}

nameChangedHandler = (event) => {
  this.setState({
    persons: [
      {name: 'Max', age: 40 },
      // event.target.value - JS events have targets with values
      {name: event.target.value, age: 10 },
      {name: 'Stephani', age: 100 },
    ]
  })
}
  render() {
    // you can do style by creating JS file
    const style = {
      backgroundColor : 'white',
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px',
      cursor : 'pointer'
    };
    // .bind(this, variable) - calls on this in switchNameHandler - MORE EFFECIENT
    // () => this.switchNameHandler() - ommits a return if its in one line. 
    return (
      <div className="App">
        <h1>Hi from Dev</h1>
        <p>this is really working!</p>
        <button 
          style = {style}
          onClick={() => this.switchNameHandler()}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "maxila=1")}
          changed={this.nameChangedHandler}>
           My Hobbies: Back Scratch
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>

      </div>
    );

    // How react is working in the internals
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'h1', 'hi, I\'m a react app!!'));
  }
}

export default App;
