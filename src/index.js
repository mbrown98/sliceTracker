import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { SpeechProvider } from "@speechly/react-client";
import { Provider } from "./context/context";
import App from "./App";

ReactDOM.render(
  <SpeechProvider appId="f02da969-d8b8-4910-9546-0c4331134d75" language="en-US">
    {" "}
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
