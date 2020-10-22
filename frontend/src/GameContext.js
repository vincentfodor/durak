import React, { createContext } from "react";

const initialState = {
    isLoggedIn: false,
    user: {
        username: null,
        email: null,
        uuid: null,
    },
};

export class GameContextProvider extends React.Component {
    state = initialState;

    setUser = (user) => this.setState({ user, isLoggedIn: true });

    render() {
        return (
            <GameContext.Provider
                value={{
                    user: this.state.user,
                    setUser: this.setUser,
                }}
            >
                {this.props.children}
            </GameContext.Provider>
        );
    }
}

export const GameContext = React.createContext(initialState);
