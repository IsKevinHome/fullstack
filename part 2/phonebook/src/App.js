import React, { useState } from "react";
import Person from "./components/Person";

const App = (props) => {
    const [persons, setPersons] = useState(props.persons);
    const [newPerson, setNewPerson] = useState("Enter a new name");

    const handleTextChange = (event) => {
        setNewPerson(event.target.value);
    };

    const addPerson = (event) => {
        event.preventDefault();
        const personObject = {
            name: newPerson,
        };
        setPersons(persons.concat(personObject));
        setNewPerson("Enter another name");
    };

    return (
        <div>
            <h2>Phonebook</h2>

            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newPerson} onChange={handleTextChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>

            <h2>Numbers</h2>
            <ul>
                {persons.map((person) => (
                    <Person person={person} />
                ))}
            </ul>
        </div>
    );
};

export default App;
