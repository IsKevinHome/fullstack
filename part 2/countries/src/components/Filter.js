import React from "react";

const Filter = ({ filterBy, handleFiltering }) => {
    return (
        <div>
            <div>
                <label>countries: </label>
                <input value={filterBy} onChange={handleFiltering} />
            </div>
        </div>
    );
};

export default Filter;
