const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const Contact = require("./models/contact");

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("build"));

const errorHandler = (error, request, response, next) => {
    console.error(error.message);

    if (error.name === "CastError") {
        return response.status(400).send({ error: "malformatted id" });
    }

    next(error);
};

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

app.get("/api/persons/:id", (request, response, next) => {
    Contact.findById(request.params.id)
        .then((contact) => {
            if (contact) {
                response.json(contact);
            } else {
                response.status(404).end();
            }
        })
        .catch((error) => next(error));
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
app.delete("/api/persons/:id", (request, response, next) => {
    Contact.findByIdAndRemove(request.params.id)
        .then((result) => {
            response.status(204).end();
        })
        .catch((error) => next(error));
});

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

// this has to be the last loaded middleware.
app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
