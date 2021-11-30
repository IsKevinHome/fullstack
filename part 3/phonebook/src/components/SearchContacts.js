import React from "react";

const SearchContacts = ({ filterBy, handleFiltering }) => {
    return (
        <div>
            <h3>Filter:</h3>
            <input value={filterBy} onChange={handleFiltering} />
        </div>
    );
};

export default SearchContacts;
