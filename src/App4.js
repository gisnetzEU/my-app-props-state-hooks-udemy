import React, { useState } from 'react';
import './App.css';
import PersonaConEstado from './Persona/PersonaConEstado';

const app = props =>{
  const [ personsState, setPersonsState] = useState({
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephany', age: 29}
    ],
    otherState: 'some other value'
  });

  switchNameHandler = () => {
    setPersonsState({
      persons: [
        {name: 'Lisa', age: 23},
        {name: 'Manu', age: 20},
        {name: 'Stephany', age: 27}
      ]
    })
  }

    return (
      <div className="App">
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <PersonaConEstado name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <PersonaConEstado name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <PersonaConEstado name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        </div>
    );
  }



export default app;