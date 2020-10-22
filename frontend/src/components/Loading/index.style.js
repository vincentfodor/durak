import styled, { keyframes } from "styled-components";
import { ColorSwitch } from "../../helpers/ColorHelper";
import { FontSizeSwitch } from "../../helpers/FontSizeHelper";
import { PixelSizeSwitch } from "../../helpers/PixelSizeHelper";

const Flash = keyframes`
    0% {
        background-color: ${ColorSwitch("black", 0.03)}
    }

    50% {
        background-color: ${ColorSwitch("black", 0.07)}
    }

    100% {
        background-color: ${ColorSwitch("black", 0.03)}
    }
`;

const Spin = keyframes`
    from {
        transform: rotate(0deg)
    }

    to {
        transform: rotate(360deg)
    }
`;

const StyledLoadingWrapper = styled.div`
    ${StyledLoading}:last-child {
        margin-bottom: 0;
    }
`;

const StyledLoading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ width }) => (width ? width : "100%")};
    height: ${({ height }) => (height ? height : "22px")};
    border-radius: 3px;
    background-color: ${ColorSwitch("black", 0.03)};
    animation: ${Flash} 1s ease-in-out infinite;
    margin-bottom: ${({ linesToRender }) =>
        linesToRender > 1 ? PixelSizeSwitch("small") : "0"};
`;

const StyledLoadingIcon = styled.span`
    font-size: ${FontSizeSwitch("medium")};
    color: ${ColorSwitch("black", 0.5)};
    animation: ${Spin} 1s ease-in-out infinite;
`;

export { StyledLoadingWrapper, StyledLoading, StyledLoadingIcon };
