import React, { useState } from "react";

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>;

const Statistic = (props) => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.value}</td>
        </tr>
    );
};

const Statistics = ({ good, bad, neutral, total }) => {
    if (total === 0) {
        return (
            <div>
                <p>No feedback given</p>
            </div>
        );
    }
    return (
        <table>
            <Statistic name="neutral" value={neutral} />
            <Statistic name="bad" value={bad} />
            <Statistic name="total" value={total} />
            <Statistic name="average" value={good - bad / total} />
            <Statistic name="positive" value={(good / total) * 100} />
        </table>
    );
};

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [total, setTotal] = useState(0);

    const handleGoodClick = () => {
        setGood(good + 1);
        setTotal(total + 1);
    };

    const handleNeutralClick = () => {
        setNeutral(neutral + 1);
        setTotal(total + 1);
    };

    const handleBadClick = () => {
        setBad(bad + 1);
        setTotal(total + 1);
    };

    return (
        <div>
            <h1>give feedback</h1>
            <Button handleClick={handleGoodClick} text="good" />
            <Button handleClick={handleNeutralClick} text="neutral" />
            <Button handleClick={handleBadClick} text="bad" />

            <h1>statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad} total={total} />
        </div>
    );
};

export default App;
