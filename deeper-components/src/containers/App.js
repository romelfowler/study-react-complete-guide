import React, { Component } from 'react';
// CSS
import Classes from './App.css';
// COMPONENTS
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/WithClass';

// Props gets passed because of "extend Component"
class App extends Component {
  // LIFECYCLE HOOKS
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
    this.state = {
      persons: [
        { id: 'asfa1', name: 'Max', age: 28 },
        { id: 'vasdf1', name: 'Manu', age: 29 },
        { id: 'asdf11', name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false
    }
  }
  componentWillMount() {
    console.log('[App.js] Inside Component Will Mount');
  }
  componentDidMount(){
    console.log('[App.js] Component Did Mount');
  }
// STATE
  // state = {
  //   persons: [
  //     { id: 'asfa1', name: 'Max', age: 28 },
  //     { id: 'vasdf1', name: 'Manu', age: 29 },
  //     { id: 'asdf11', name: 'Stephanie', age: 26 }
  //   ],
  //   otherState: 'some other value',
  //   showPersons: false
  // }
 shouldComponentUpdate (nextProps, nextState) {
   console.log('[App.js] Should Component Update' , nextProps, nextState);
   return true;
 }
  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    } );

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } );
  }

  deletePersonHandler = ( personIndex ) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice( personIndex, 1 );
    this.setState( { persons: persons } );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render () {
    console.log('[App.js] Render');

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          <Persons
              person={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangedHandler}
            />
        </div>
      );
    }
    return (
      <WithClass class={Classes.App}>
         // <div className={Classes.App}>
           <buttons onClick={()=> {this.setState({showPersons: true})}}>Show persons</buttons>

           <ErrorBoundary><Cockpit
             cockpitTitle={this.props.newTitle}
             persons={this.state.persons}
             showPersons={this.state.showPersons}
             clicked={this.togglePersonsHandler}
             /></ErrorBoundary>
          {persons}
        // </div>
        </WithClass>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}
// Higher order component
export default App;


// NOTE: Radium can be added to components, class, and functions
//  StyleRoot is used to block the html - use this with Radium
