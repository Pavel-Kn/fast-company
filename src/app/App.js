import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from "./components/ui/navBar";
import Main from "./layouts/main";
import Login from "./layouts/login";
import Users from "./layouts/users";
import EditUserForm from "./components/ui/editUserForm";

function App() {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/users/:userId?/edit" component={EditUserForm} />
                <Route path="/users/:userId?" component={Users} />
                <Route path="/main" exact component={Main} />
                <Route path="/login/:type?" component={Login} />
                <Redirect to="/" />
            </Switch>
        </>
    );
}

export default App;
