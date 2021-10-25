import React, { useState, useEffect } from "react";
import Person from "./components/Person";
import AddContact from "./components/AddContact";
import SearchContacts from "./components/SearchContacts";
import RenderContacts from "./components/RenderContacts";
import contactService from "./services/contacts";

const App = () => {
    const [contacts, setContacts] = useState([]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [showAll, setShowAll] = useState(true);
    const [filterBy, setFilterBy] = useState("");

    useEffect(() => {
        contactService.getAll().then((response) => {
            setContacts(response.data);
        });
    }, []);

    console.log("render", contacts.length, "contacts");

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

    //  ALL OF THE ABOVE ARE STATE AND EVENT HANDLERS, THEY STAY INSIDE OUR FUNCTION.

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

            contactService.create(contactObject).then((response) => {
                setContacts(contacts.concat(response.data));
                setNewName("");
                setNewNumber("");
            });
        } else {
            alert(`${newName} is already added to phonebook`);
        }
    };

    const rows = () => {
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
            <h1>Phonebook</h1>
            <SearchContacts
                filterBy={filterBy}
                handleFiltering={handleFiltering}
            />
            <AddContact
                addContact={addContact}
                newName={newName}
                newNumber={newNumber}
                handleContactNameChange={handleContactNameChange}
                handleContactNumberChange={handleContactNumberChange}
            />
            <RenderContacts renderContacts={rows()} />
        </div>
    );
};

export default App;
