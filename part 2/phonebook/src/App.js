import React, { useState } from "react";
import Person from "./components/Person";

const App = (props) => {
    const [contacts, setContacts] = useState([
        { name: "Guy Fieri", number: "020-4837473" },
        { name: "Gordon Ramsay", number: "75749483832" },
        { name: "Mr. Tasty", number: "43-4982839" },
        { name: "Dude man", number: "11-33-448382" },
    ]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [showAll, setShowAll] = useState(true);
    const [filterBy, setFilterBy] = useState("");

    const handleContactNameChange = (event) => {
        setNewName(event.target.value);
    };

    const handleContactNumberChange = (event) => {
        setNewNumber(event.target.value);
    };

    const handleFiltering = (event) => {
        console.log(event.target.value);
        // We get the value, and change it to what we're filtering through.
        setFilterBy(event.target.value);
        // Set this false, so that it disables showing all of our contacts
        setShowAll(false);
        console.log(filterBy);
    };

    const addContact = (event) => {
        event.preventDefault();
        //
        if (newName === "") return true;
        if (newNumber === "") return true;

        let checkContact = false;
        contacts.forEach((contact) => {
            if (contact.name === newName) checkContact = true;
        });

        if (!checkContact) {
            const contactObject = {
                name: newName,
                number: newNumber,
            };

            setContacts([...contacts, contactObject]);
            setNewName("");
            setNewNumber("");
        } else {
            alert(`${newName} is already added to phonebook`);
        }
    };

    const persons = contacts.map((person) => <Person person={person} />);

    return (
        <div>
            <h2>Phonebook</h2>
            Filter:
            <input value={filterBy} onChange={handleFiltering} />
            <h2>Add a new</h2>
            <form onSubmit={addContact}>
                <div>
                    name: <input value={newName} onChange={handleContactNameChange} />
                </div>
                <div>
                    number: <input value={newNumber} onChange={handleContactNumberChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <ul>{persons}</ul>
        </div>
    );
};

export default App;
