import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { JobProvider } from "./components/JobContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <JobProvider>
      <App />
    </JobProvider>
  </React.StrictMode>
);
