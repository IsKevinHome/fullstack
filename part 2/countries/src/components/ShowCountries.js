import React from "react";
import Country from "./Country";

const ShowCountries = ({ filteredCountries, setSearchFilter }) => {
    if (filteredCountries.length > 10) {
        return <div>Too many matches, specify another filter.</div>;
    } else {
        return filteredCountries.map((country) => {
            return <Country name={country.name.common} />;
        });
    }
};

export default ShowCountries;
