import React from "react";
import Country from "./Country";
import Countries from "./Countries";

const ShowCountries = ({ filteredCountries, setCountries }) => {
    if (filteredCountries.length > 10) {
        return <div>Too many matches, specify another filter.</div>;
    } else if (filteredCountries.length === 1) {
        return filteredCountries.map((country) => {
            return <Country country={country} />;
        });
    } else {
        return filteredCountries.map((country) => {
            return <Countries filteredCountries={country} />;

            // return the country object under a buton that will display, maybe do this in the countries coomponent
        });
    }
};

export default ShowCountries;
