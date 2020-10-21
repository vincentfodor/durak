import React from "react";
import Header from "./Header";

import {StyledWelcome} from "./index.style"

export default class Welcome extends React.Component {
    render() {
        return (
            <StyledWelcome>
                <Header />
                <h1>Good morning, Vincent!</h1>
                <p>Ready for a game of durak?</p>
            </StyledWelcome>
        )
    }
} 