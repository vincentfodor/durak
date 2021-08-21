import React, { createContext, useReducer } from "react";
import { io } from "socket.io-client";

const UserContext = createContext();

const userReducer = (state, action) => {
    // action.type = Type of action
    // action.payload = Data payload

    switch (action.type) {
        case "INIT_USER": {
            const endpoint = "http://127.0.0.1:8080";

            return {
                username: action.payload.username,
                email: action.payload.email,
                uuid: action.payload.uuid,
                socket: io(endpoint),
            };
        }
        case "SET_USERNAME":
            return { username: action.payload };
        case "SET_EMAIL":
            return { email: action.payload };
        case "SET_UUID":
            return { uuid: action.payload };
        default: {
            throw new Error(
                `Unhandled action type (${action.type}) in UserContext`
            );
        }
    }
};

const initialUserContext = {
    username: null,
    email: null,
    uuid: null,
    socket: null,
};

const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialUserContext);

    const value = { state, dispatch };

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};

const UserConsumer = ({ children }) => {
    return (
        <UserContext.Consumer>
            {(context) => {
                if (context === undefined) {
                    throw new Error(
                        "UserConsumer has to be used within a UserContext.Provider"
                    );
                }

                return children(context);
            }}
        </UserContext.Consumer>
    );
};

const useUser = () => {
    const context = createContext(UserContext);

    if (context === undefined) {
        throw new Error(
            "useUser hook can only be used within a UserContext.Provider"
        );
    }

    return context;
};

export { UserProvider, UserConsumer, useUser };
