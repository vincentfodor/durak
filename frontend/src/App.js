import React from "react";
import socketIOClient from "socket.io-client";
import { BrowserRouter, Route } from "react-router-dom";

import "./styles.css";

import Header from "./components/Header";
import Game from "./components/Game";
import Entry from "./components/Entry";
import Welcome from "./components/Welcome";

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
                    <Route exact path="/">
                        <Entry />
                    </Route>
                    <Route path="/welcome">
                        <Welcome />
                    </Route>
                    <Route path="/play">
                        <Game socket={this.state.socket} />
                    </Route>
                </BrowserRouter>
            </div>
        );
    }
}
