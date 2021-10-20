import React from "react";
import Country from "./Country";
import Countries from "./Countries";

const ShowCountries = ({ filteredCountries, setSearchFilter }) => {
    if (filteredCountries.length > 10) {
        return <div>Too many matches, specify another filter.</div>;
    } else if (filteredCountries.length === 1) {
        return filteredCountries.map((country) => {
            return <Country country={country} />;
        });
    } else {
        return filteredCountries.map((country) => {
            return <Countries name={country.name.common} />;
        });
    }
};

export default ShowCountries;
