import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router-dom";
import Home from "layouts/Home.jsx";
import { createBrowserHistory } from "history";

const hist = createBrowserHistory();
const App = () =>
ReactDOM.render(

            <Router history={hist}>
                <Route path="/" component={Home} />
            </Router>,
  document.getElementById("root")
);

export default App
