import React, { Component } from 'react';
import './UserInput.css';

class UserInput extends Component {
    render() {
      const style = { padding: '10px' };
      return(
        <div className="UserInput">
          <h1>User Input</h1>
          <input style={style} onChange={this.props.changed} value={this.props.username}/>
        </div>
      );
    }
  }
export default UserInput;