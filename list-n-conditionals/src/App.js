import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';


class App extends Component {

// this only works on components - DEFINE STATE
// State only available from import React (not function comp)
  state = {
    persons: [
      {id : "ab", name: 'Max', age: 29 },
      {id : "bc", name: 'Manu', age: 30 },
      {id : "cd", name: 'Max', age: 27 },
    ],
    showPersons : false
  }


// Changes name when typed in an input
nameChangedHandler = (event, id) => {
  // find() - finds the el
  // findIndex() - find el but get index
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  });

  const person = {
    ...this.state.persons[personIndex]
  };
  // This is another option
  // const person = Object.assign({}, this.state.persons[personIndex]);

  person.name = event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex] = person; 
  
  this.setState({
    // add a property
    persons : persons
    
  })
}

deletePersonHandler = (personIndex) => {
  // slice() - Copies the full (non-reference) array 
  const persons = this.state.persons.slice();
  // splice removes a variable in array of persons
  persons.splice(personIndex, 1);
  this.setState({persons: persons});
}

// toggles personListHide ID to visible 
togglePeronsHandler = () => {
  // grabs showPerson from state (set to false)
  const doesShow = this.state.showPersons;
  this.setState({
    // changes to true
    showPersons: !doesShow
  });
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

    let persons = null;

    if (this.state.showPersons) {
      // adding = () creates JSX code
      persons = (
        <div id="personListHide">
        {/* map() executes a method for every el. map() takes a var */}
        {/* if you use more than one args in arrow(), you need to wrap in () */}
        {this.state.persons.map((person, index) => {
          // return what you want to map() to convert
          return <Person 
          click={() => this.deletePersonHandler(index)}
          name={person.name} 
          age={person.age}
          all props should have 
          // key prop helps react update lists with a unique key
          key={person.id}
          changed={(event) => this.nameChangedHandler(event, person.id)}/>
        })}

      </div> 

      );
    }
    // .bind(this, variable) - calls on this in switchNameHandler - MORE EFFECIENT
    // () => this.switchNameHandler() - ommits a return if its in one line. 
    return (
      <div className="App">
        <h1>Hi from Dev</h1>
        <p>this is really working!</p>
        
        {/* <button style = {style} onClick={() => this.switchNameHandler("maximizing")}>Switch Name</button> */}
        <button 
          style = {style} 
          onClick={ this.togglePeronsHandler}>Switch Name
        </button>
        {/* More effecient way of doing a check. All checks must happen after render() */}
        {persons}

      </div>
    );

    // How react is working in the internals
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'h1', 'hi, I\'m a react app!!'));
  }
}

export default App;
