import React from "react";

const Header = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    );
};

const Part = (props) => {
    return <p>{props.name}</p>;
};

const Content = (props) => {
    return (
        <div>
            <Part
                name={props.parts.map((course) => (
                    <p>
                        {" "}
                        {course.name} {course.exercises}{" "}
                    </p>
                ))}
            />
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
        id: 1,
        name: "Half Stack application development",
        parts: [
            {
                name: "Fundamentals of React",
                exercises: 10,
                id: 1,
            },
            {
                name: "Using props to pass data",
                exercises: 7,
                id: 2,
            },
            {
                name: "State of a component",
                exercises: 14,
                id: 3,
            },
        ],
    };

    return <Course course={course} />;
};

export default App;
