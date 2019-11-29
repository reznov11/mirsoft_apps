// Initiate App
import React from "react";

// Components
import Login from "./components/login/login";
import CabinetLayout from "./components/layout/cabinet";
import FirstLayout from "./components/layout/first";
import ProtectedRoute from "./components/protected";

// Style
import "./env/css/style.min.css";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  const NoMatch = ({ location }) => (
    <div>
      <h3>
        Страница не найдена <code>{location.pathname}</code>
      </h3>
    </div>
  );

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <ProtectedRoute
          exact
          path="/cabinet"
          component={CabinetLayout}
        ></ProtectedRoute>
        <ProtectedRoute
          exact
          path="/test1"
          component={FirstLayout}
        ></ProtectedRoute>
        <Route path="/404" component={NoMatch} />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;
