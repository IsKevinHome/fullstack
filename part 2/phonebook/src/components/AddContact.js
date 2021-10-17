import React from "react";
const AddContact = ({ addContact, newName, newNumber, handleContactNameChange, handleContactNumberChange }) => {
    return (
        <div>
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
        </div>
    );
};

export default AddContact;
