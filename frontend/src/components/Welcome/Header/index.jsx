import React from "react";

import Logo from "../../Logo";

import {StyledHeader} from "./index.style"

const Header = () => {
    return (
        <StyledHeader>
            <Logo fontSize="medium" />
        </StyledHeader>
    )
}

export default Header;