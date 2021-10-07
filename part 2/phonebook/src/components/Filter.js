import React from "react";
import Person from "./components/Person";

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

const Filter = () => {
    return <div></div>;
};

export default Filter;
