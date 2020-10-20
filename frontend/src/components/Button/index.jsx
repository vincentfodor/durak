import React from "react";

import {StyledButton} from "./index.style"

const Button = ({children}) => {
    return (
        <StyledButton>{children}</StyledButton>
    )
};

export default Button;
