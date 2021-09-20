import React from "react";

const Header = (props) => <h1>{props.title}</h1>;

const Part = (props) => (
    <p>
        {props.part} {props.exercise}
    </p>
);

const Content = ({ parts }) => {
    return parts.map((part) => <Part key={part.name} part={part.name} exercise={part.exercises} />);
};

const Total = ({ parts }) => {
    const total = parts.reduce((accumulator, currentValue) => (accumulator += currentValue.exercises), 0);
    return <p>total of {total} exercises</p>;
};

const Course = ({ course }) => (
    <div>
        <Header title={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
    </div>
);

// const App = () => {
//     const course = {
//         id: 1,
//         name: "Half Stack application development",
//         parts: [
//             {
//                 name: "Fundamentals of React",
//                 exercises: 10,
//                 id: 1,
//             },
//             {
//                 name: "Using props to pass data",
//                 exercises: 7,
//                 id: 2,
//             },
//             {
//                 name: "State of a component",
//                 exercises: 14,
//                 id: 3,
//             },
//         ],
//     };

//     return <Course course={course} />;
// };

export default Course;
