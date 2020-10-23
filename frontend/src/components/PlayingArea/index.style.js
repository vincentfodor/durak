import styled from "styled-components";
import { ColorSwitch } from "../../helpers/ColorHelper";

const StyledPlayingAreaWrapper = styled.div`
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const StyledPlayingArea = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

const StyledPlayingAreaFields = styled.div`
    display: block;
    text-align: center;
    flex-grow: 1;
    margin-left: 0;
    padding: 0 50px;

    @media only screen and (max-width: 924px) {
        margin-left: 40px;
    }
`;

const StyledPlayingAreaDeck = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${ColorSwitch("black", 0.05)};
    width: 56px;
    height: 91px;
    border-radius: 3px;

    @media only screen and (max-width: 924px) {
        width: 39.2px;
        height: 63.7px;
    }
`;

export {
    StyledPlayingAreaWrapper,
    StyledPlayingArea,
    StyledPlayingAreaFields,
    StyledPlayingAreaDeck,
};
