import styled from "styled-components";
import { ColorSwitch } from "../../helpers/ColorHelper";
import { PixelSizeSwitch } from "../../helpers/PixelSizeHelper";

const StyledHeader = styled.div`
    display: flex;
    height: 65px;
    align-items: center;
    padding: 0 ${PixelSizeSwitch("medium")};
    background-color: ${ColorSwitch("black", 0.05)};
`;

const StyledHeaderGameId = styled.p`
    margin: 0 ${PixelSizeSwitch("small")};
    color: ${ColorSwitch("black", 0.5)};
`;

const StyledHeaderStats = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;
    margin-right: ${PixelSizeSwitch("medium")};

    @media only screen and (max-width: 924px) {
        display: none;
    }
`;

const StyledHeaderStat = styled.div`
    display: flex;
    align-items: center;
    margin-left: ${PixelSizeSwitch("medium")};

    & > label {
        margin-right: ${PixelSizeSwitch("small")};
        color: ${ColorSwitch("black", 0.5)};
    }

    & > span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${ColorSwitch("black", 0.05)};
        border-radius: 3px;
        height: 35px;
        width: 35px;
    }
`;

const StyledHeaderLeaveButtonWrapper = styled.div`
    @media only screen and (max-width: 924px) {
        display: flex;
        flex-grow: 1;
        justify-content: flex-end;
    }
`;

export {
    StyledHeader,
    StyledHeaderGameId,
    StyledHeaderStats,
    StyledHeaderStat,
    StyledHeaderLeaveButtonWrapper,
};
