import React from "react";
import { Redirect } from "react-router";
import User from "../../api/User";

import Button from "../Button";
import { Textbox } from "../Input";
import Logo from "../Logo";
import Message from "../Message";

import { StyledEntryWrapper, StyledEntry } from "./index.style";

export default class Entry extends React.Component {
    state = {
        isInLoginState: true,
        username: "",
        password: "",
        email: "",
        repeatedPassword: "",
        registerErrors: [],
        loginErrors: [],
        registerSuccess: false,
        loginSuccess: false,
    };

    switchLoginRegisterState = () => {
        this.setState((prevState) => ({
            isInLoginState: !prevState.isInLoginState,
        }));
    };

    registerUser = (e) => {
        e.preventDefault();

        this.setState({ registerErrors: [] });

        User.Register(
            this.state.username,
            this.state.email,
            this.state.password,
            this.state.repeatedPassword
        )
            .then((res) => {
                if (!res.success) {
                    this.setState({ registerErrors: res.errors });
                } else {
                    this.setState({ registerSuccess: true });
                }
            })
            .catch((err) => console.log(err));
    };

    loginUser = (e) => {
        e.preventDefault();

        this.setState({ loginErrors: [] });

        User.Login(this.state.username, this.state.password)
            .then((res) => {
                if (!res.success) {
                    this.setState({ loginErrors: res.errors });
                } else {
                    this.setState({ loginSuccess: true });
                }
            })
            .catch((err) => console.log(err));
    };

    renderRegisterErrors = () => {
        if (this.state.registerErrors.length >= 0) {
            return this.state.registerErrors.map((errorMessage) => (
                <Message color="red" marginBottomPixelSize="small">
                    {errorMessage}
                </Message>
            ));
        }
    };

    renderLoginErrors = () => {
        if (this.state.loginErrors.length >= 0) {
            return this.state.loginErrors.map((errorMessage) => (
                <Message color="red" marginBottomPixelSize="small">
                    {errorMessage}
                </Message>
            ));
        }
    };

    renderFields = () => {
        if (this.state.isInLoginState) {
            return (
                <React.Fragment>
                    <Logo marginBottomPixelSize="medium" />
                    <form onSubmit={(e) => this.loginUser(e)}>
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
                        {this.renderLoginErrors()}
                        <Button
                            color="blue"
                            variant="primary"
                            size="small"
                            type="submit"
                        >
                            Login
                        </Button>
                        <Button
                            color="blue"
                            variant="tertiary"
                            size="small"
                            onClick={this.switchLoginRegisterState}
                        >
                            Register
                        </Button>
                    </form>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <Logo marginBottomPixelSize="medium" />
                    <form onSubmit={(e) => this.registerUser(e)}>
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
                            value={this.state.email}
                            onChange={(e) =>
                                this.setState({ email: e.target.value })
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
                        <Textbox
                            type="password"
                            label="Repeat password:"
                            marginBottomPixelSize="medium-small"
                            value={this.state.repeatedPassword}
                            onChange={(e) =>
                                this.setState({
                                    repeatedPassword: e.target.value,
                                })
                            }
                        />
                        {this.renderRegisterErrors()}
                        {this.state.registerSuccess ? (
                            <Message
                                color="light-green"
                                marginBottomPixelSize="medium-small"
                            >
                                Registration successful. You can now login into
                                your account.
                            </Message>
                        ) : null}
                        <Button color="blue" variant="primary" size="small">
                            Register
                        </Button>
                        <Button
                            color="blue"
                            variant="tertiary"
                            size="small"
                            onClick={this.switchLoginRegisterState}
                        >
                            Login
                        </Button>
                    </form>
                </React.Fragment>
            );
        }
    };

    render() {
        return (
            <StyledEntryWrapper>
                {this.state.loginSuccess ? <Redirect to="/welcome" /> : null}
                <StyledEntry>{this.renderFields()}</StyledEntry>
            </StyledEntryWrapper>
        );
    }
}
