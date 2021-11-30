import React, { useState } from "react";
import Country from "./Country";

const Countries = ({ filteredCountries }) => {
    const [showCountry, setShowCountry] = useState(false);
    const onClick = () => (!showCountry ? setShowCountry(true) : setShowCountry(false));

    return (
        <div>
            {filteredCountries.name.common}
            <button onClick={onClick}>show</button>
            {showCountry ? <Country country={filteredCountries} /> : null}
        </div>
    );
};

export default Countries;
