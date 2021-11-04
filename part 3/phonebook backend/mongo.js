const mongoose = require("mongoose");

const generateId = () => {
    return Math.floor(Math.random() * 10000);
};

if (process.argv.length < 3) {
    console.log("Please provide the password as an argument: node mongo.js <password>");
    process.exit(1);
}

const password = process.argv[2];
const url = `mongodb+srv://kevin:${password}@phonebook.gqbh1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(url);

const contactSchema = new mongoose.Schema({
    id: Number,
    name: String,
    number: String,
});

const Contact = mongoose.model("Note", contactSchema);

const contact = new Contact({
    id: generateId(),
    name: "Arto Hellas",
    number: "310-227-7697",
});

contact.save().then((result) => {
    console.log("contact saved!");
    mongoose.connection.close();
});

Contact.find({}).then((result) => {
    result.forEach((contact) => {
        console.log(contact);
    });
    mongoose.connection.close();
});
