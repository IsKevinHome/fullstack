import React from "react";

const RenderContacts = ({ renderContacts }) => {
    return (
        <div>
            <h2>Contacts</h2>
            <ul>{renderContacts}</ul>
        </div>
    );
};

export default RenderContacts;
