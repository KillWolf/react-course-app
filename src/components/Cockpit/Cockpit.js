import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
    const assignedClasses = [];

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.waitingListBold)
    }

    if (props.persons.length === 0) {
      assignedClasses.push(classes.waitingListGreen)
    }
    return (
        <div>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>
                {props.persons.length} person{props.persons.length === 1 ? '' : 's'} on waiting list.
                </p>
            <button
                className={props.showPersons ? classes.toggleButtonOff : classes.toggleButtonOn}
                onClick={props.toggle}>Toggle persons
            </button>
        </div>
    );

};

export default cockpit;