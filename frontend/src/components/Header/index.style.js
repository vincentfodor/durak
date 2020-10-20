import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rgba(0, 0, 0, 0.07);
  padding: 15px;

  & > h1 {
    margin: 0;
    font-size: 16pt;
    color: rgba(0, 0, 0, 0.9);
    text-transform: uppercase;
    align-self: center;
  }
`;

const StyledHeaderWinLoseRate = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: flex-end;
  flex-grow: 1;

  & > span {
    background-color: rgba(0, 0, 0, 0.06);
    padding: 8px 16px;
    margin: 0 0 0 4px;
    color: rgba(0, 0, 0, 0.6);
  }

  & > p {
    margin: 0 8px;
    align-self: center;
    color: rgba(0, 0, 0, 0.6);
  }
`;

export { StyledHeader, StyledHeaderWinLoseRate };
