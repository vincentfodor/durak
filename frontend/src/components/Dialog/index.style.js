import styled from "styled-components";

import { PixelSizeSwitch } from "../../helpers/PixelSizeHelper";
import { ColorSwitch } from "../../helpers/ColorHelper";
import { FontSizeSwitch } from "../../helpers/FontSizeHelper";

const StyledDialogWrapper = styled.div`
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${ColorSwitch("black", 0.2)};
    z-index: 99;
    box-sizing: border-box;
    padding: ${PixelSizeSwitch("large")};
    align-items: center;
    justify-content: center;
`;

const StyledDialog = styled.div`
    width: 100%;
    background-color: ${ColorSwitch("white")};
    width: 800px;
    border-radius: 3px;
`;

const StyledDialogHeader = styled.div`
    background-color: ${ColorSwitch("black", 0.05)};
    padding: ${PixelSizeSwitch("medium")};

    & > h1 {
        font-size: ${FontSizeSwitch("medium-large")};
        margin: 0;
    }
`;

const StyledDialogBody = styled.div`
    padding: ${PixelSizeSwitch("medium")};
`;

const StyledDialogFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: ${PixelSizeSwitch("medium")};
`;

export {
    StyledDialogWrapper,
    StyledDialog,
    StyledDialogHeader,
    StyledDialogBody,
    StyledDialogFooter,
};
