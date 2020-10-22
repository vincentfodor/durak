import styled from "styled-components";
import { ColorSwitch } from "../../helpers/ColorHelper";
import { PixelSizeSwitch } from "../../helpers/PixelSizeHelper";

const StyledHeader = styled.div`
    display: flex;
    height: 65px;
    align-items: center;
    margin: 0 0 15px 0;
    padding: 0 25px;
    background-color: ${ColorSwitch("black", 0.05)};
`;

const StyledHeaderGameId = styled.p`
    margin: 0;
    margin-left: ${PixelSizeSwitch("small")};
    color: ${ColorSwitch("black", 0.5)};
`;

const StyledHeaderStats = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;
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
        padding: ${PixelSizeSwitch("small")} ${PixelSizeSwitch("medium-small")};
        background-color: ${ColorSwitch("black", 0.05)};
    }
`;

export {
    StyledHeader,
    StyledHeaderGameId,
    StyledHeaderStats,
    StyledHeaderStat,
};
