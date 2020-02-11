import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

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
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              click={() => this.deletePersonHandler(index)} />
          })}
        </div>
      )
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('waitingListBold')
    }

    if (this.state.persons.length === 0) {
      classes.push('waitingListGreen')
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>{this.state.persons.length} person{this.state.persons.length === 1 ? '' : 's' } on waiting list.</p>
        <button className={this.state.showPersons ? 'toggleButtonOff' : 'toggleButtonOn'} onClick={this.togglePersonsHandler}>Toggle persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
