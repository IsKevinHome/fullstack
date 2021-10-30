const express = require("express");
const app = express();
const cors = require("cors");

// Middleware
const requestLogger = (request, response, next) => {
    console.log("Method:", request.method);
    console.log("Path:  ", request.path);
    console.log("Body:  ", request.body);
    console.log("---");
    next();
};

app.use(cors());
app.use(express.json());
app.use(requestLogger);
app.use(express.static("build"));

let contacts = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456",
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-5323523",
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "12-43-234345",
    },
    {
        id: 4,
        name: "Mary Poppendieck",
        number: "39-23-6423122",
    },
];

app.get("/info", (req, res) => {
    var date = new Date();
    res.send(`<div>Phonebook has info for ${contacts.length} people</div> <p>${date}</p>`);
});

app.get("/api/persons", (request, response) => {
    response.json(contacts);
});

app.get("/api/persons/:id", (request, response) => {
    const id = Number(request.params.id);
    const person = contacts.find((person) => person.id === id);

    if (person) {
        response.json(person);
    } else {
        response.status(404).end();
    }
});

const generateId = () => {
    return Math.floor(Math.random() * 10000);
};

//POST
app.post("/api/persons", (request, response) => {
    const body = request.body;

    const person = {
        name: body.name,
        number: body.number,
        id: generateId(),
    };

    if (!body.name) {
        return response.status(400).json({ error: "the name field is missing" });
    }

    if (contacts.find((person) => person.name === body.name)) {
        return response.status(400).json({ error: "the name must be unique" });
    }

    contacts = contacts.concat(person);
    response.json(person);
});

// DELETE
app.delete("/api/persons/:id", (request, response) => {
    const id = Number(request.params.id);
    console.log(id);
    contacts = contacts.filter((person) => person.id !== id);
    console.log(contacts);
    response.status(204).end();
});

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
