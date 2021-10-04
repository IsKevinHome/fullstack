import ReactDOM from "react-dom";
import App from "./App.js";

const persons = [{ name: "Arto Hellas", number: "626-220-8900" }];

ReactDOM.render(<App persons={persons} />, document.getElementById("root"));
