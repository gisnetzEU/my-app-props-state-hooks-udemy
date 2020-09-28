import React, { useState } from 'react';
import './App.css';
import PersonaConEstado from './Persona/PersonaConEstado';

const App = props =>{
  const [ personsState, setPersonsState] = useState({
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephany', age: 29}
    ]   
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {name: 'Lisa', age: 23},
        {name: 'Manu', age: 20},
        {name: 'Stephany', age: 27}
      ]          
    });
  };

    return (
      <div className="App">
        <button onClick={switchNameHandler}>Switch Name</button>
        <PersonaConEstado name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <PersonaConEstado name={personsState.persons[1].name} age={personsState.persons[1].age}/>
        <PersonaConEstado name={personsState.persons[2].name} age={personsState.persons[2].age}/>
        </div>
    );
  }

  export default App;