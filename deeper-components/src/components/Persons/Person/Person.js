import React, {Component} from 'react';
import classes from './Person.css';


class Person extends Component {
  // const rnd = Math.random();
  // if (rnd <= 0.7) {
  //   throw new Error('Something went wrong');
  // references are passed using annon func.
  render() {
    return <div className={classes.Person} >
          <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
          <p>{this.props.children}</p>
          <input
            ref={(input ) => this.inputElement = input }
            type="text"
            onChange={this.props.changed}
            value={this.props.name} />
      </div>;


      // @Note: You can add an array here
      // return [
      //   <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>,
      //   <p>{this.props.children}</p>,
      //   <input type="text" onChange={this.props.changed} value={this.props.name} />,
      // ]
  }
}


export default Person;
