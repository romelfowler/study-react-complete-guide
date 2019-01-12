import React, {Component} from 'react';
// COMPONENT
import Person from './Person/Person';

class Persons extends Component {
  // LIFECYCLE HOOKS
  constructor(props) {
    super(props);
    console.log('[App.js] Persons Constructor', props);

  }
  componentWillMount() {
    console.log('[App.js] Persons Component Will Mount');
  }
  componentDidMount(){
    console.log('[App.js] Persons Component Did Mount');
  }
  render() {
    console.log('[App.js] Persons render');

    return this.props.person.map( ( person, index ) => {
        return <Person
          key={person.id}
          click={() => this.props.clicked( index )}
          name={person.name}
          age={person.age}
          changed={( event ) => this.props.changed( event, person.id )} />
      } );
    }
  }


export default Persons;
