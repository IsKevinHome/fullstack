import React from "react";

const Country = ({ country }) => {
    return (
        <>
            <h2>{country.name.common}</h2>
            <p>capital city: {country.capital}</p>
            <p>population: {country.population}</p>
            <h3>Languages:</h3>
            <ul>
                {Object.values(country.languages).map((language) => (
                    <li>{language}</li>
                ))}
            </ul>
            <img src={country.flags.png} alt="flag" width="100px"></img>
        </>
    );
};

export default Country;
