import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowCountries from "./components/ShowCountries";

const App = () => {
    const [searchFilter, setSearchFilter] = useState("");
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        console.log("effect");
        axios.get("https://restcountries.com/v3.1/all").then((response) => {
            console.log("promise fulfilled");
            setCountries(response.data);
        });
    }, []);

    console.log("rendered", countries.length, "countries");

    const handleFiltering = (e) => {
        setSearchFilter(e.target.value);
        console.log(e.target.value);
    };

    const filteredCountries = countries.filter((country) => {
        const c = country.name.common.toLowerCase();
        const filter = searchFilter.toLowerCase();
        return c.search(filter) !== -1;
    });

    console.log(filteredCountries);

    return (
        <div>
            find countries: <input value={searchFilter} onChange={handleFiltering}></input>
            <ShowCountries filteredCountries={filteredCountries} setSearchFilter={setSearchFilter} />
        </div>
    );
};

export default App;
