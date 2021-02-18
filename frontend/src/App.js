import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./styles.css";

import Game from "./components/Game";
import Entry from "./components/Entry";
import Welcome from "./components/Welcome";
import { UserProvider } from "./UserContext";

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <UserProvider>
                        <Route exact path="/">
                            <Entry />
                        </Route>
                        <Route path="/welcome">
                            <Welcome />
                        </Route>
                        <Route
                            path="/play/:id"
                            component={(props) => <Game {...props} />}
                        ></Route>
                    </UserProvider>
                </BrowserRouter>
            </div>
        );
    }
}
