import React, { Component } from 'react';

import Auxiliary from '../../../hoc/Auxiliary';
import Classes from './Person.css';
import {AuthContext} from '../../../containers/App';

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');
    return (
      <Auxiliary classes={Classes.Person}>
        <AuthContext.Consumer>
          {auth =>  auth ? <p>authenticated!</p> : null }
        </AuthContext.Consumer>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
    </Auxiliary>
    );
  }
}

export default Person;
