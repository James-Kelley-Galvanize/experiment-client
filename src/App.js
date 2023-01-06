import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
const url = process.env.REACT_APP_API_URL || `localhost:8080`;

function App() {
  const [apiDependantState, setApiDependantState] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setApiDependantState(data);
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {apiDependantState}
        </a>
      </header>
    </div>
  );
}

export default App;
