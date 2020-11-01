import React from "react";
import socketIOClient from "socket.io-client";
import { BrowserRouter, Route } from "react-router-dom";

import "./styles.css";

import Game from "./components/Game";
import Entry from "./components/Entry";
import Welcome from "./components/Welcome";
import { UserProvider } from "./UserContext";

const endpoint = "http://127.0.0.1:8080";

export default class App extends React.Component {
    state = {
        socket: socketIOClient(endpoint),
    };

    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        this.state.socket.on("sendMessageCallback", (data) =>
            console.log(data)
        );
    };

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
                            component={(props) => (
                                <Game {...props} socket={this.state.socket} />
                            )}
                        ></Route>
                    </UserProvider>
                </BrowserRouter>
            </div>
        );
    }
}
