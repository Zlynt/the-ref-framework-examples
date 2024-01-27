import ReactDOM from "react-dom";
import Router from "../Router";

import { BodyStyle } from "./style";
import { useEffect, useState } from "react";

export default function Body() {
  const { location, navigate } = Router();

  const [username, setUsername] = useState("");

  function requestUsername() {
    fetch("/username", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.text())
      .then((value: string) => {
        setUsername(value);
      });
  }

  useEffect(() => {
    requestUsername();
  }, []);

  return (
    <div style={BodyStyle}>
      {location === "/" && (
        <div>
          <h1>Home Page</h1>
          <p>Your todays username: {username}</p>
          <button onClick={() => requestUsername()}>
            Request a new username
          </button>
        </div>
      )}
      {location === "/about" && (
        <div>
          <h1>About</h1>
          <p>Well well, if it ain't React and Express together!</p>
        </div>
      )}
    </div>
  );
}

// This piece of code contains non static content, we need to hydrate it
// As a second parameters of 'ReactDOM.hydrate' we pass the parent component.
// In this case it is the body, so we pass 'document.getElementsByTagName("body")[0]'
try {
  ReactDOM.hydrate(<Body />, document.getElementById("body"));
} catch (err) {}
