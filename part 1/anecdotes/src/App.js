import React, { useState } from "react";

const Heading = ({ text }) => <h2>{text}</h2>;

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>;

const VotedHeading = (props) => {
    if (!props.hasVotes) {
        return <Heading text="No votes have been casted yet" />;
    } else {
        return <Heading text="Anecdote with the most votes" />;
    }
};

const App = () => {
    const anecdotes = [
        "If it hurts, do it more often",
        "Adding manpower to a late software project makes it later!",
        "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        "Premature optimization is the root of all evil.",
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
        "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
    ];

    const [selected, setSelected] = useState(0);
    const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0]);
    const [hasVotes, setHasVotes] = useState(false);

    const highestVotes = Math.max(...votes);
    const topAnecdote = anecdotes[votes.indexOf(highestVotes)];

    const newAnecdote = () => {
        let newText = [Math.floor(Math.random() * anecdotes.length)];
        setSelected(newText);
    };

    const addVote = () => {
        const newVotes = [...votes];
        newVotes[selected] += 1;
        setVotes(newVotes);
        setHasVotes(true);
    };

    return (
        <div>
            <Heading text="Anecdote of the day" />
            <p>{anecdotes[selected]}</p>
            <p>has {votes[selected]} votes</p>
            <Button handleClick={newAnecdote} text="next anecdote" />
            <Button handleClick={addVote} text="vote" />
            <VotedHeading hasVotes={hasVotes} />

            <p>{topAnecdote}</p>
            <p>has {Math.max(highestVotes)} votes</p>
        </div>
    );
};

export default App;
