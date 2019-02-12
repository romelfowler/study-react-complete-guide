import React, {Component} from 'react';

import AuthContext from '../auth-context';

class login extends Component {
  // next-gen js keyword
  static contextType = AuthContext;


  render(){
    return(
            <button onClick={this.context.toggleAuth}>
              {this.context.isAuth ? 'Logout' : 'Login'}
            </button>
          );
  }
}


export default login;
