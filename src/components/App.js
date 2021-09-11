import React from "react";

import { Router } from "react-router-dom";
import history from "../history";
import { Provider as NavigationProvider } from "../context/NavigationContext";
import Layout from "./Layout";


export default function App() {
  return (
    <Router history={history}>
      <NavigationProvider>
        <Layout />
      </NavigationProvider>
    </Router>
  );
}
