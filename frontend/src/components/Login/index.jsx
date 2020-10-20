import React from "react";
import Button from "../Button";
import { Textbox } from "../Input";

import { StyledLoginWrapper, StyledLogin } from "./index.style";

export default class Login extends React.Component {
    render() {
        return (
            <StyledLoginWrapper>
                <StyledLogin>
                    <Textbox label="Username:" width="300px" />
                    <Textbox type="password" label="Password:" width="300px" />
                    <Button>Login</Button>
                </StyledLogin>
            </StyledLoginWrapper>
        )
    }
}