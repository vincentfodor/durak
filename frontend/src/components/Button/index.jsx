import React from "react";

import { StyledButton } from "./index.style";

const Button = (props) => {
    return (
        <StyledButton
            color={props.color}
            variant={props.variant}
            size={props.size}
            disabled={props.disabled}
            {...props}
        >
            {props.children}
        </StyledButton>
    );
};

export default Button;
