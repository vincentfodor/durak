import React from "react";
import User from "../../api/User";

import Button from "../Button";
import { Textbox } from "../Input";
import Logo from "../Logo";

import { StyledEntryWrapper, StyledEntry } from "./index.style";

export default class Entry extends React.Component {
    state = {
        isInLoginState: true,
        username: "",
        password: "",
        email: "",
        password: "",
    };

    switchLoginRegisterState = () => {
        this.setState((prevState) => ({
            isInLoginState: !prevState.isInLoginState,
        }));
    };

    registerUser = () => {
        User.Register(
            this.state.username,
            this.state.email,
            this.state.password,
            this.state.passwordRepeat
        );
    };

    renderFields = () => {
        if (this.state.isInLoginState) {
            return (
                <React.Fragment>
                    <Logo marginBottomPixelSize="medium" />
                    <Textbox
                        label="Username:"
                        marginBottomPixelSize="medium-small"
                        value={this.state.username}
                        onChange={(e) =>
                            this.setState({ username: e.target.value })
                        }
                    />
                    <Textbox
                        type="password"
                        label="Password:"
                        marginBottomPixelSize="medium-small"
                        value={this.state.password}
                        onChange={(e) =>
                            this.setState({ password: e.target.value })
                        }
                    />
                    <Button color="blue" type="primary">
                        Login
                    </Button>
                    <Button
                        color="blue"
                        type="tertiary"
                        onClick={this.switchLoginRegisterState}
                    >
                        Register
                    </Button>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <Logo marginBottomPixelSize="medium" />
                    <Textbox
                        type="text"
                        label="Username:"
                        marginBottomPixelSize="medium-small"
                        value={this.state.username}
                        onChange={(e) =>
                            this.setState({ username: e.target.value })
                        }
                    />
                    <Textbox
                        type="email"
                        label="E-Mail:"
                        marginBottomPixelSize="medium-small"
                    />
                    <Textbox
                        type="password"
                        label="Password:"
                        marginBottomPixelSize="medium-small"
                    />
                    <Textbox
                        type="password"
                        label="Repeat password:"
                        marginBottomPixelSize="medium-small"
                    />
                    <Button
                        color="blue"
                        type="primary"
                        onClick={this.registerUser}
                    >
                        Register
                    </Button>
                    <Button
                        color="blue"
                        type="tertiary"
                        onClick={this.switchLoginRegisterState}
                    >
                        Login
                    </Button>
                </React.Fragment>
            );
        }
    };

    render() {
        return (
            <StyledEntryWrapper>
                <StyledEntry>{this.renderFields()}</StyledEntry>
            </StyledEntryWrapper>
        );
    }
}
