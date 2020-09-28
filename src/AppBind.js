import React, { Component } from 'react';
import './App.css';
import PersonaBind from './Persona/PersonaBind';

class AppBind extends Component {

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

  render() {
    return (
      <div className="App">
        <button onClick={this.switchNameHandler.bind(this, 'Maximilium')}>Switch Name</button>
        <PersonaBind name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <PersonaBind name={this.state.persons[1].name} age={this.state.persons[1].age} click = {this.switchNameHandler.bind(this, 'Max!')} >My Hobbies: Racing</PersonaBind>
        <PersonaBind name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        </div>
    );
  }

}

export default AppBind;