import express from "express";
import router from "./routes";
import ReactEngineFramework from "the-ref-framework";

const port = 3000;

const app = express();

// Use the REF
new ReactEngineFramework({
  viewsPath: __dirname + "/views",
  errorMessage: "An error happened while loading this page.", // If you want to see the compile errors on the browser, comment this option
  jsxOrTsx: "TypeScript XML",
  expressApp: app,
});

// Import router
app.use(router);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
