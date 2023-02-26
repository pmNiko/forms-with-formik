import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HomePage, ListUsersPage, UserPage } from "./pages";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ListUsersPage />
  </React.StrictMode>
);
