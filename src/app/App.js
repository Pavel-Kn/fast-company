import React from "react";
import NavBar from "./components/navBar";
import { Route, Switch } from "react-router-dom";
import Main from "./layouts/main";
import Login from "./layouts/login";
import Users from "./layouts/users";
import UserPage from "./components/userPage";

function App() {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/main" component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/users/:usersId" component={UserPage} />
                <Route path="/users" component={Users} />
            </Switch>
        </>
    );
}

export default App;
