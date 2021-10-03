import ReactDOM from "react-dom";
import App from "./App.js";

const persons = [{ name: "Arto Hellas" }];

ReactDOM.render(<App persons={persons} />, document.getElementById("root"));
