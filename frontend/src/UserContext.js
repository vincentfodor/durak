import React, { createContext } from "react";

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
    };

    componentDidMount = () => {
        this.setState({ setUser: this.setUser });
    };

    setUser = (user) => {
        this.setState({ user: user });
    };

    render() {
        const { children } = this.props;

        return <Provider value={this.state}>{children}</Provider>;
    }
}

const UserConsumer = () => <Consumer />;

export { UserProvider, UserConsumer, UserContext };
