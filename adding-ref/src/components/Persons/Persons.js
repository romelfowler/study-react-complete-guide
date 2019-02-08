import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Person from './Person/Person';

class Persons extends PureComponent {
    constructor( props ) {
        super( props );
        console.log( '[Persons.js] Inside Constructor', props );
        this.lastPersonRef = React.createRef();
    }

    componentWillMount () {
        console.log( '[Persons.js] Inside componentWillMount()' );
    }

    componentDidMount () {
        console.log( '[Persons.js] Inside componentDidMount()' );
        // this.lastPersonRef.current.focus();
    }

    componentWillReceiveProps ( nextProps ) {
        console.log( '[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps );
    }

    // shouldComponentUpdate ( nextProps, nextState ) {
    //     console.log( '[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState );
    //     return nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked;
    //     // return true;
    // }

    componentWillUpdate ( nextProps, nextState ) {
        console.log( '[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState );
    }

    componentDidUpdate () {
        console.log( '[UPDATE Persons.js] Inside componentDidUpdate' );
    }

    render () {
        console.log( '[Persons.js] Inside render()' );
        return this.props.persons.map( ( person, index ) => {
            return <Person
                click={() =>
                this.props.clicked( index )}
                name={person.name}
                age={person.age}
                ref={this.lastPersonRef}
                key={person.id}
                changed={( event ) => this.props.changed( event, person.id )} />
        } );
    }
}
// JS Object to ensure not to receive wrong props
// Edit class after it was defined
// key value pairs
Person.propTypes = {
  click: PropTypes.func ,
  name:  PropTypes.string,
  age:  PropTypes.number,
  changed: PropTypes.func
};
export default Persons;
