import styled from "styled-components";

const StyledCard = styled.div`
    position: ${({ isTopCard }) => (isTopCard ? "absolute" : "relative")};
    top: ${({ isTopCard }) => (isTopCard ? "30px" : "0")};
    display: inline-flex;
    flex-direction: column;
    width: ${({ opponent }) => (opponent ? "56px" : "80px")};
    height: ${({ opponent }) => (opponent ? "91px" : "130px")};
    background-color: rgb(240, 240, 240);
    margin: 5px;
    padding: 10px;
    border-radius: 3px;
    transition: margin-top 0.25s ease;
    cursor: ${({ opponent }) => (opponent ? "inherit" : "pointer")};

    :hover {
        margin-top: ${({ opponent }) => (opponent ? "5px" : "-5px")};
    }
`;

const StyledCardTop = styled.div`
    height: 25px;
    display: flex;

    & > p {
        color: ${({ color }) => color};
        margin: 0 0 0 5px;
        padding: 0;
        align-self: center;
    }
`;

const StyledCardMiddle = styled.div`
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    color: ${({ color }) => color};
    & > p {
        font-size: 28pt;
        margin: 0;
        padding: 0;
    }
`;

const StyledCardBottom = styled.div`
    height: 25px;
    display: flex;
    transform: rotate(180deg);

    & > p {
        color: ${({ color }) => color};
        margin: 0 0 0 5px;
        padding: 0;
        align-self: center;
    }
`;

export { StyledCard, StyledCardTop, StyledCardMiddle, StyledCardBottom };
