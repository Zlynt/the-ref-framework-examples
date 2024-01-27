// The original top bar code can be found at https://www.w3schools.com/css/tryit.asp?filename=trycss_navbar_horizontal_black_fixed

import ReactDOM from "react-dom";
import List from "./List";
import Button from "./Button";
import Router from "../Router";

export default function TopBar() {
  const { location, navigate } = Router();

  return (
    <List>
      <Button active={location === "/"} onClick={() => navigate("/")}>
        Home
      </Button>
      <Button active={location === "/about"} onClick={() => navigate("/about")}>
        About
      </Button>
    </List>
  );
}

// This piece of code contains non static content, we need to hydrate it
// As a second parameters of 'ReactDOM.hydrate' we pass the parent component.
// In this case it is the body, so we pass 'document.getElementsByTagName("body")[0]'
try {
  ReactDOM.hydrate(<TopBar />, document.getElementById("topbar"));
} catch (err) {}
