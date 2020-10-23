import styled from "styled-components";
import { ColorSwitch } from "../../helpers/ColorHelper";
import { PixelSizeSwitch } from "../../helpers/PixelSizeHelper";

const StyledHand = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const StyledHandCardsWrapper = styled.div`
    width: 100%;

    padding-left: ${({ opponent }) => (opponent ? "47px" : "0")};
    box-sizing: border-box;

    @media only screen and (max-width: 924px) {
        overflow-x: ${({ opponent }) => (!opponent ? "scroll" : "hidden")};
        padding-bottom: ${PixelSizeSwitch("small")};
    }
`;

const StyledHandCards = styled.div`
    display: block;
    text-align: center;
    margin: 10px 0 0 0;
    height: ${({ opponent }) => (opponent ? "inherit" : "155px")};
    white-space: nowrap;

    @media only screen and (max-width: 924px) {
        height: 120px;
    }
`;

const StyledHandCardOverflow = styled.b`
    position: relative;
    display: inline-flex;
    top: 50px;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    background-color: ${ColorSwitch("black", 0.05)};
    margin-left: ${PixelSizeSwitch("small")};
`;

export {
    StyledHand,
    StyledHandCardsWrapper,
    StyledHandCards,
    StyledHandCardOverflow,
};
