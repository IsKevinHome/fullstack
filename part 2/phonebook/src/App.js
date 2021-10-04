import React, { useState } from "react";
import Person from "./components/Person";

const App = (props) => {
    const [persons, setPersons] = useState(props.persons);
    const [newName, setNewName] = useState("Enter a new name");

    const handleTextChange = (event) => {
        setNewName(event.target.value);
    };

    const addPerson = (event) => {
        event.preventDefault();
        const personObject = {
            name: newName,
        };
        const isFound = persons.some((person) => person.name.toLowerCase() === newName.toLowerCase());
        if (!isFound) {
            setPersons(persons.concat(personObject));
            setNewName("Enter another name");
        } else {
            alert(`${newName} is already added to phonebook`);
        }
        // for (let i = 0; i < persons.length; i++) {
        //     if (persons[i].name === newName) {
        //         console.log("duplicate");
        //         break;
        //     } else {
        //         setPersons(persons.concat(personObject));
        //         setNewName("Enter another name");
        //         console.log("added");
        //         break;
        //     }
        // }
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handleTextChange} />
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
