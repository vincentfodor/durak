import { PixelSizeSwitch } from "../../helpers/PixelSizeHelper";

import styled, { keyframes } from "styled-components";
import { ColorSwitch } from "../../helpers/ColorHelper";

const LevelAnimation = (currentXp, nextXp, totalXp) => {
    console.log({ currentXp, nextXp, totalXp });

    return keyframes`
    0% {
        width: ${calculateXpPercentage(currentXp, totalXp)};
        box-shadow: 0 0 0 ${ColorSwitch("light-green", 1)}
    }

    10% {
        width: ${calculateXpPercentage(currentXp, totalXp)};
        box-shadow: 0 0 10px ${ColorSwitch("light-green", 1)}
    }

    70% {
        width: ${calculateXpPercentage(nextXp, totalXp)};
        box-shadow: 0 0 0 ${ColorSwitch("light-green", 0)}
    }

    75% {
        width: ${calculateXpPercentage(nextXp * 0.97, totalXp)};
    }

    80% {
        width: ${calculateXpPercentage(nextXp, totalXp)};
    }

    85% {
        width: ${calculateXpPercentage(nextXp * 0.985, totalXp)};
    }

    90% {
        width: ${calculateXpPercentage(nextXp, totalXp)};
    }

    95% {
        width: ${calculateXpPercentage(nextXp * 0.998, totalXp)};
    }

    100% {
        width: ${calculateXpPercentage(nextXp, totalXp)};
    }
`;
};

const DifferenceAnimation = keyframes`
    0% {
        opacity: 1;
    }

    70% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
`;

const calculateXpPercentage = (current, total) => {
    if (current && total) {
        return `${(current / total) * 100}%`;
    }

    return "0";
};

const StyledXPBarWrapper = styled.div`
    margin-top: 25px;
    width: ${({ width }) => (width ? width + "px" : "inherit")};
`;

const StyledXPBarVisual = styled.div`
    display: flex;
`;

const StyledXPBarLevel = styled.label`
    margin: ${PixelSizeSwitch("medium-small")};
    font-weight: bold;
`;

const StyledXPBar = styled.span`
    display: flex;
    align-items: center;
    flex-grow: 1;
    background-color: ${ColorSwitch("black", 0.05)};
    border-radius: 3px;
`;

const StyledXPBarAbsolute = styled.span`
    display: flex;
    align-items: center;
    width: ${({ nextXp, totalXp }) => calculateXpPercentage(nextXp, totalXp)};
    float: left;
    height: 100%;
    background-color: ${ColorSwitch("light-green")};
    animation: ${({ currentXp, nextXp, totalXp }) =>
            LevelAnimation(currentXp, nextXp, totalXp)}
        3s cubic-bezier(0.52, 0.05, 0.9, 0.42);
`;

const StyledXPBarDifference = styled.p`
    margin: 0;
    padding-right: ${PixelSizeSwitch("small")};
    opacity: 0;
    animation: ${DifferenceAnimation} 1800ms ease-out;
    font-weight: 600;
    color: ${ColorSwitch("white")};
    flex-grow: 1;
    text-align: right;
`;

export {
    StyledXPBarWrapper,
    StyledXPBarVisual,
    StyledXPBarLevel,
    StyledXPBar,
    StyledXPBarAbsolute,
    StyledXPBarDifference,
};
