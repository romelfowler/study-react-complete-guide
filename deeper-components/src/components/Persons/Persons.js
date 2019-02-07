import React, {Component} from 'react';
// COMPONENT
import Person from './Person/Person';

class Persons extends Component {
  // LIFECYCLE HOOKS
  constructor(props) {
    super(props);
    console.log('[Persons.js] Persons Constructor', props);

  }
  componentWillMount() {
    console.log('[Persons.js] Persons Component Will Mount');
  }
  componentDidMount(){
    console.log('[Persons.js] Persons Component Did Mount');
  }
  componentWillReceiveProps(nextProps){
      console.log('[Persons.js] Component will receieve props', nextProps);
  }
  shouldComponentUpdate(nextProps, nextState){
      console.log('[Persons.js] Should component update', nextProps, nextState);
      // return nextProps.person !== this.props.person;
      return true;
  }
  componentWillUpdate (nextProps, nextState) {
    console.log('[Persons.js] component will update', nextProps, nextState);
  }
  componentDidUpdate (nextProps, nextState) {
    console.log('[Persons.js] component did update', nextProps, nextState);
  }
  render() {
    console.log('[Persons.js] Persons render');
    // can return an array of elements
    return this.props.person.map( ( person, index ) => {
        return <Person
          key={person.id}
          click={() => this.props.clicked( index )}
          name={person.name}
          position={index}
          age={person.age}
          changed={( event ) => this.props.changed( event, person.id )} />
      } );
    }
  }


export default Persons;
