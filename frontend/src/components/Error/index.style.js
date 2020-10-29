import styled, { keyframes } from "styled-components";
import { ColorContrastSwitch, ColorSwitch } from "../../helpers/ColorHelper";
import { FontSizeSwitch } from "../../helpers/FontSizeHelper";
import { PixelSizeSwitch } from "../../helpers/PixelSizeHelper";

const ErrorAnimation = keyframes`
    0% {
        top: 70%;
        transform: scale(0.3);
        opacity: 0;
    }

    10% {
        top: 42%;
        transform: scale(1);
        opacity: 1;
    }

    90% {
        top: 42%;
        transform: scale(1);
        opacity: 1;
    }

    100% {
        top: 42%;
        transform: scale(1);
        opacity: 0;
    }
`;

const StyledErrorHandlerWrapper = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 98;

    display: flex;
    align-items: center;
`;

const StyledErrorHandler = styled.div`
    position: absolute;
    display: flex;
    top: 43%;
    flex-direction: column;

    width: 100%;
    padding: ${PixelSizeSwitch("medium")};
    text-align: center;

    background-color: ${ColorSwitch("red", 0.5)};

    box-sizing: border-box;

    animation: ${ErrorAnimation}
        ${({ animationDuration }) => animationDuration}ms ease-in-out;

    & > h1 {
        color: ${ColorContrastSwitch("black")};
        font-size: ${FontSizeSwitch("large")};
        font-weight: bold;
        margin: 0 0 ${PixelSizeSwitch("small")} 0;
        text-transform: uppercase;
    }

    & > p {
        color: ${ColorContrastSwitch("black")};
        font-size: ${FontSizeSwitch("large")};
        margin: 0;
        text-transform: uppercase;
    }
`;

export { StyledErrorHandlerWrapper, StyledErrorHandler };
