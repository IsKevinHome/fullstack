import React from "react";

const Header = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    );
};

const Part = (props) => {
    return (
        <p>
            {props.name} {props.excercises}
        </p>
    );
};

const Content = (props) => {
    return (
        <div>
            <Part name={props.parts[0].name} excercises={props.parts[0].exercises} />
            <Part name={props.parts[1].name} excercises={props.parts[1].exercises} />
            <Part name={props.parts[2].name} excercises={props.parts[2].exercises} />
        </div>
    );
};

const Total = (props) => {
    return (
        <p>
            <b>total of {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} exercises</b>
        </p>
    );
};

const Course = ({ course }) => {
    return (
        <>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </>
    );
};

const App = () => {
    const course = {
        name: "Half Stack application development",
        parts: [
            {
                name: "Fundamentals of React",
                exercises: 10,
            },
            {
                name: "Using props to pass data",
                exercises: 7,
            },
            {
                name: "State of a component",
                exercises: 14,
            },
        ],
    };

    return (
        <div>
            <Course course={course} />
        </div>
    );
};

export default App;
