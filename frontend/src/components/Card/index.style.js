import styled from "styled-components";

import { FontSizeSwitch } from "../../helpers/FontSizeHelper";
import { PixelSizeSwitch } from "../../helpers/PixelSizeHelper";
import { ColorSwitch } from "../../helpers/ColorHelper";

const StyledCard = styled.div`
    position: ${({ isTopCard }) => (isTopCard ? "absolute" : "relative")};
    top: ${({ isTopCard }) => (isTopCard ? "30px" : "0")};
    display: inline-flex;
    flex-direction: column;
    width: ${({ opponent }) => (opponent ? "56px" : "80px")};
    height: ${({ opponent }) => (opponent ? "91px" : "130px")};
    background-color: ${ColorSwitch("white")};
    box-sizing: border-box;
    margin: 0 5px;
    padding: ${PixelSizeSwitch("small")};
    border-radius: 3px;
    transition: margin-top 0.25s ease;
    cursor: ${({ opponent }) => (opponent ? "inherit" : "pointer")};
    box-shadow: ${({ opponent }) =>
        opponent ? "none" : "0 4px 4px " + ColorSwitch("black", 0.05)};

    :hover {
        margin-top: ${({ opponent }) => (opponent ? "5px" : "-5px")};
    }

    @media only screen and (max-width: 924px) {
        width: ${({ opponent }) => (opponent ? "40px" : "56px")};
        height: ${({ opponent }) => (opponent ? "60px" : "91px")};
        padding: ${PixelSizeSwitch("extra-small")};
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

        @media only screen and (max-width: 924px) {
            font-size: ${FontSizeSwitch("medium-small")};
            font-weight: normal;
        }
    }
`;

const StyledCardMiddle = styled.div`
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;

    & > p {
        font-size: 32px;
        margin: 0;
        padding: 0;
        color: ${({ color }) => color};

        @media only screen and (max-width: 924px) {
            font-size: ${FontSizeSwitch("medium-large")};
            font-weight: normal;
        }
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

        @media only screen and (max-width: 924px) {
            font-size: ${FontSizeSwitch("medium-small")};
            font-weight: normal;
        }
    }
`;

export { StyledCard, StyledCardTop, StyledCardMiddle, StyledCardBottom };
