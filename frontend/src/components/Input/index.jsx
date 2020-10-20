import React from "react";

import {StyledTextboxWrapper, StyledTextbox, StyledLabel} from "./index.style"

const Textbox = (props) => {
    return (
        <StyledTextboxWrapper>
            <StyledLabel>{props.label}</StyledLabel>
            <StyledTextbox {...props} />
        </StyledTextboxWrapper>
    )
}

export {Textbox};