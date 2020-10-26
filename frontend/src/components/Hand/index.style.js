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
    display: flex;
    width: 100%;
    align-items: center;
    padding-top: ${PixelSizeSwitch("medium-small")};
    justify-content: center;

    box-sizing: border-box;

    @media only screen and (max-width: 924px) {
        overflow-x: ${({ opponent }) => (opponent ? "hidden" : "scroll")};
        padding-bottom: ${PixelSizeSwitch("small")};
        justify-content: flex-start;
    }
`;

const StyledHandCards = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    white-space: nowrap;
    padding-left: ${({ opponent }) => (opponent ? "47px" : "0")};
    justify-content: flex-start;
`;

const StyledHandCardOverflow = styled.b`
    display: inline-flex;
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
