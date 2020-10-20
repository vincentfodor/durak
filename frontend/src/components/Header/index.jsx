import React from "react";

import { StyledHeader, StyledHeaderWinLoseRate } from "./index.style";

const Header = ({ gamename }) => {
  return (
    <StyledHeader>
      <h1>{gamename}</h1>
      <StyledHeaderWinLoseRate>
        <span>Wins: 1</span>
        <p>{"‹"}</p>
        <span>Loses: 2</span>
      </StyledHeaderWinLoseRate>
    </StyledHeader>
  );
};

export default Header;
