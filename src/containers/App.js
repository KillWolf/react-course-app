import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  state = {
    persons: [
      { id: 'awda', name: 'Jacob', age: 28 },
      { id: '21qaa', name: 'Derp', age: 24 },
      { id: '12r1', name: 'Merp', age: 22 }
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }


  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons clicked={this.deletePersonHandler} changed={this.nameChangedHandler} persons={this.state.persons} />
        </div>
      )
    }

    return (
      <div className={classes.App}>
        <Cockpit persons={this.state.persons}
          showPersons={this.state.showPersons}
          toggle={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
