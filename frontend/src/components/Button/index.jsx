import React from "react";

import { StyledButton } from "./index.style";

const Button = ({
    color = "blue",
    type = "primary",
    onClick = () => {},
    children,
}) => {
    return (
        <StyledButton color={color} type={type} onClick={(e) => onClick(e)}>
            {children}
        </StyledButton>
    );
};

export default Button;
