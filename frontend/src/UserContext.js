import React, { createContext } from "react";
import * as io from "socket.io-client";

const UserContext = createContext();

const { Provider, Consumer } = UserContext;

class UserProvider extends React.Component {
    state = {
        user: {
            username: null,
            email: null,
            uuid: null,
        },
        setUser: null,
        socket: null,
    };

    componentDidMount = () => {
        const endpoint = "http://127.0.0.1:8080";

        this.setState({ setUser: this.setUser, setSocket: this.setSocket });

        this.setState({
            socket: io(endpoint),
        });
    };

    setUser = (user) => {
        this.setState({ user });
    };

    setSocket = (socket) => {
        this.setState({ socket });
    };

    render() {
        const { children } = this.props;

        return <Provider value={this.state}>{children}</Provider>;
    }
}

const UserConsumer = () => <Consumer />;

export { UserProvider, UserConsumer, UserContext };
