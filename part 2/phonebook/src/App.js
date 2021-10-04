import React, { useState } from "react";
import Person from "./components/Person";

const App = (props) => {
    const [persons, setPersons] = useState(props.persons);
    const [newName, setNewName] = useState("Enter a new name");
    const [newNumber, setNewNumber] = useState("Enter a new number");

    const handleTextChangeName = (event) => {
        setNewName(event.target.value);
    };

    const handleTextChangeNumber = (event) => {
        setNewNumber(event.target.value);
    };

    const addPerson = (event) => {
        event.preventDefault();
        const personObject = {
            name: newName,
            number: newNumber,
        };
        // Conditional, boolean value
        const isFound = persons.some((person) => person.name.toLowerCase() === newName.toLowerCase());
        // that way we can use ! to check if it's true or not.
        if (!isFound) {
            setPersons(persons.concat(personObject));
            setNewName("");
            setNewNumber("");
        } else {
            alert(`${newName} is already added to phonebook`);
        }
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handleTextChangeName} />
                </div>
                <div>
                    number: <input value={newNumber} onChange={handleTextChangeNumber} />
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
