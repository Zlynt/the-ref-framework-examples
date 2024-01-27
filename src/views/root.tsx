import PropTypes from "prop-types";

import TopBar from "./components/TopBar";
import Body from "./components/Body";

function Root(props: any) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>{props.title}</title>
      </head>
      <body>
        <div id="topbar">
          <TopBar />
        </div>
        <div id="body">
          <Body />
        </div>
      </body>
    </html>
  );
}

Root.propTypes = {
  title: PropTypes.string,
};

module.exports = Root;
