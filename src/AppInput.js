import React, { Component } from 'react';
import './App.css';
import PersonaInput from './Persona/PersonaInput';

class AppInput extends Component {

  state = {
    persons: [
      {name: 'Max', age: 23},
      {name: 'Manu', age: 20},
      {name: 'Minerva', age: 26}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    this.setState({persons: [
        {name: newName, age: 23},
        {name: 'Manu', age: 20},
        {name: 'Minerva', age: 27}
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({persons: [
        {name: 'Max', age: 23},
        {name: event.target.value, age: 20},
        {name: 'Minerva', age: 27}
      ]
    })
  }

  render() {
    
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    }
    return (
      <div className="App">
          <h1>First Component</h1>
          <p>Be happy!</p>
        <button 
          style= {style}
        onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
        <PersonaInput name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <PersonaInput name={this.state.persons[1].name} age={this.state.persons[1].age} click = {this.switchNameHandler.bind(this, 'Max!')}
        changed={this.nameChangeHandler} >My Hobbies: Racing</PersonaInput>
        <PersonaInput name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        </div>
    );
  }

}

export default AppInput;