import React from "react";

import { StyledButton } from "./index.style";

const Button = ({
    color = "blue",
    type = "primary",
    size = "small",
    onClick = () => {},
    children,
}) => {
    return (
        <StyledButton color={color} type={type} size={size} onClick={(e) => onClick(e)}>
            {children}
        </StyledButton>
    );
};

export default Button;
