const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const Contact = require("./models/contact");

// Middleware

app.use(cors());
app.use(express.json());
app.use(express.static("build"));

const requestLogger = (request, response, next) => {
    console.log("Method:", request.method);
    console.log("Path:  ", request.path);
    console.log("Body:  ", request.body);
    console.log("---");
    next();
};

app.use(requestLogger);

app.get("/info", (req, res) => {
    var date = new Date();
    res.send(`<div>Phonebook has info for ${contacts.length} people</div> <p>${date}</p>`);
});

app.get("/api/persons", (request, response) => {
    Contact.find({}).then((person) => {
        response.json(person);
    });
});

app.get("/api/persons/:id", (request, response) => {
    Contact.findById(request.params.id)
        .then((contact) => {
            if (contact) {
                response.json(contact);
            } else {
                response.status(404).end();
            }
        })
        .catch((error) => {
            console.log(error);
            response.status(400).send({ error: "malformatted id" });
        });
});

const generateId = () => {
    return Math.floor(Math.random() * 10000);
};

//POST
app.post("/api/persons", (request, response) => {
    const body = request.body;
    console.log(body);

    if (body.name === undefined) {
        return response.status(400).json({ error: "content missing" });
    }

    const contact = new Contact({
        id: generateId(),
        name: body.name,
        number: body.number,
    });

    contact.save().then((savedContact) => {
        response.json(savedContact);
    });
});

// DELETE
app.delete("/api/persons/:id", (request, response) => {
    const id = Number(request.params.id);
    contacts = contacts.filter((contact) => contact.id !== id);
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
