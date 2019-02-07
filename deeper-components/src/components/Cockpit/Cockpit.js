import React from 'react';
import Auxilary from '../../hoc/Auxilary'
// css
import Classes from './Cockpit.css'

const Cockpit = (props) => {
  // get red, bold
  // let classes = ['red','bold'].join('');
  const assignedClass = [];
  let btnClass = Classes.Button;
  if(props.showPersons) {
    btnClass =[Classes.Button, Classes.Red].join(' ');
  }
  if ( props.persons.length <= 2 ) {
    assignedClass.push( Classes.red ); // classes = ['red']
  }
  if ( props.persons.length <= 1 ) {
    assignedClass.push( Classes.bold ); // classes = ['red', 'bold']
  }


  return(
    <Auxilary class={Classes.Button}>
      <h1>{props.cockpitTitle} : Hi, I'm a CockPit</h1>
      {/* join('') - this assigns string. */}
      <p className={assignedClass.join( ' ' )}>This is really working!</p>
      <button
        className={btnClass}
        onClick={props.clicked}>Toggle Persons
      </button>
    </Auxilary>
  );
}


export default Cockpit;
