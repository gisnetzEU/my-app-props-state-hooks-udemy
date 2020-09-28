import React from 'react';
import Person from './Person';
import PersonWithProps from './PersonWithProps';
import PersonWithChildren from './PersonWithChildren';

import './App.css';

function App2() {
  return (
    <div className="App">
      <header className="App-header">
        <Person></Person>
        <PersonWithProps name="Lisa" age="30"></PersonWithProps>
        <PersonWithChildren name="Nancy" age="34">My hobbies are chess and surf</PersonWithChildren>
       
      </header>
    </div>
  );
}

export default App;
