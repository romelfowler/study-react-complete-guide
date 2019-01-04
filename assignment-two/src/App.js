import React, { Component } from 'react';
import './App.css';
import Validation from './Validate/Validate';
import Char from './Char/Char';


class App extends Component {
  state = {
    input : " "
  }
  changeHandlerInput = ( event ) => {
    this.setState( { input: event.target.value } );
  }
  changeHandlerDelete = (index) => {
    const inputText = this.state.input.split('');
    inputText.splice(index, 1);
    const newInputText = inputText.join('');
    this.setState({input: newInputText});
  }

  render() {
    const char = this.state.input.split('').map((a,index)=>{
      return <Char 
      character={a} 
      key={index}
      clicked={() => this.changeHandlerDelete(index)} />; 
    });


    return (
      <div className="App">
        <h1>Assignment Two</h1>
        <input
        type="text"
         onChange={this.changeHandlerInput} 
          value={this.state.input}/>
        <p>{this.state.input}</p>
        <Validation
          inputLength={this.state.input.length}
        />
        {char}
      </div>
    );
  }
}

export default App;
