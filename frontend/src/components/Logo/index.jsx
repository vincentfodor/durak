import React from "react";
import { StyledLogo, StyledLogoBold } from "./index.style";

const Logo = ({ fontSize = "medium", marginBottomPixelSize = "none" }) => {
    return (
        <StyledLogo
            fontSize={fontSize}
            marginBottomPixelSize={marginBottomPixelSize}
        >
            <StyledLogoBold>DURAK</StyledLogoBold>
            CHALLANGERS
        </StyledLogo>
    );
};

export default Logo;
