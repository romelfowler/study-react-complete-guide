import React, { Component } from 'react';

import classes from './Person.css';
import wClass from '../../../hoc/wClass';
import Auxiliary from '../../../hoc/Auxiliary';

class Person extends Component {
    constructor( props ) {
        super( props );
        console.log( '[Person.js] Inside Constructor', props );
        this.inputElement = React.createRef();
    }

    componentWillMount () {
        console.log( '[Person.js] Inside componentWillMount()' );
    }

    componentDidMount () {
        console.log( '[Person.js] Inside componentDidMount()' );
        if (this.props.position === 0) {
          this.inputElement.current.focus();
        }
    }
    focus(){
      this.inputElement.current.focus();
    }
    render () {
      // const rnd = Math.random();
      // if (rnd <= 0.7) {
      //   throw new Error('Something went wrong');
      // references are passed using annon func.
        console.log( '[Person.js] Inside render()' );
        return (
            <Auxiliary classes={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input
                  ref={this.inputElement}
                  type="text"
                  onChange={this.props.changed}
                  value={this.props.name} />
            </Auxiliary>
        )
        // return [
        //     <p key="1" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>,
        //     <p key="2">{this.props.children}</p>,
        //     <input key="3" type="text" onChange={this.props.changed} value={this.props.name} />
        // ]
    }
}

export default wClass(Person, classes.Person);
