import React, { Component } from 'react';
import './App.css';
import PersonaConEstado from './Persona/PersonaConEstado';

class App3 extends Component {

  state = {
    persons: [
      {name: 'Max', age: 23},
      {name: 'Manu', age: 20},
      {name: 'Mirelle', age: 26}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    this.setState({persons: [
        {name: 'Lisa', age: 23},
        {name: 'Manu', age: 20},
        {name: 'Mirelle', age: 27}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <PersonaConEstado name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <PersonaConEstado name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <PersonaConEstado name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        </div>
    );
  }

}

export default App;