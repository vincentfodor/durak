import React, { createContext } from "react";

const GameContext = React.createContext();

class GameContextProvider extends React.Component {
    state = {
        username: null,
    };

    setUsername = (username) => this.setState({ username });

    render() {
        return (
            <GameContext.Provider
                value={{
                    username: this.state.username,
                    setUsername: this.setUsername,
                }}
            >
                {this.props.children}
            </GameContext.Provider>
        );
    }
}
