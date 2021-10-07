import React, { useState } from "react";

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
        setFilterBy(event.target.value);
        setShowAll(false);
    };

    const addContact = (event) => {
        event.preventDefault();
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

    const rows = () => {
        console.log(filterBy);
        const contactsToShow = showAll
            ? contacts
            : contacts.filter((contact) => {
                  const c = contact.name.toUpperCase();
                  const filter = filterBy.toUpperCase();
                  return c.search(filter) !== -1;
              });
        const contactsRender = contactsToShow.map((contact) => {
            console.log(contact);
            return <Person key={contact.name} person={contact} />;
        });

        return contactsRender;
    };

    return (
        <div>
            <h2>Phonebook</h2>
            Filter:
            <input value={filterBy} onChange={handleFiltering} />
            <h2>Add a new Contact</h2>
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
            <h2>Contacts</h2>
            <ul>{rows()}</ul>
        </div>
    );
};

export default App;
