const { response } = require("express");
const express = require("express");
const app = express();
app.use(express.json());

const contacts = [
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
    res.send(`<div>Phonebook has info for ${contacts.length} people</div> <p>${date}</p>`)
})

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

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
