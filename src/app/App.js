import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from "./components/ui/navBar";
import Main from "./layouts/main";
import Login from "./layouts/login";
import Users from "./layouts/users";
import { ToastContainer } from "react-toastify";
import { ProfessionProvider } from "./hooks/useProfession";

function App() {
    return (
        <div>
            <NavBar />
            <ProfessionProvider>
                <Switch>
                    <Route path="/users/:userId?/:edit?" component={Users} />
                    <Route path="/login/:type?" component={Login} />
                    <Route path="/" exact component={Main} />
                    <Redirect to="/" />
                </Switch>
            </ProfessionProvider>
            <ToastContainer />
        </div>
    );
}

export default App;
