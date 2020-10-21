import styled from "styled-components";

import { ColorContrastSwitch, ColorSwitch } from "../../helpers/ColorHelper";
import { FontSizeSwitch } from "../../helpers/FontSizeHelper";
import { PixelSizeSwitch } from "../../helpers/PixelSizeHelper";

const ButtonColorSwitch = (variant = "primary", color = "blue") => {
    switch (variant) {
        case "tertiary":
            return "transparent";
        case "secondary":
            return ColorSwitch("black", 0.05);
        case "primary":
        default:
            return ColorSwitch(color);
    }
};

const ButtonColorForegroundSwitch = (variant = "primary", color = "blue") => {
    switch (variant) {
        case "tertiary":
            return ColorSwitch("black", 0.5);
        case "primary":
            return ColorContrastSwitch(color, 1);
        case "secondary":
            return ColorSwitch("black", 0.5);
        default:
            return ColorSwitch(color);
    }
};

const StyledButton = styled.button`
    background-color: transparent;
    border: none;
    background-color: ${({ variant, color }) =>
        ButtonColorSwitch(variant, color)};
    color: ${({ variant, color }) =>
        ButtonColorForegroundSwitch(variant, color)};
    border-radius: 3px;
    font-size: ${FontSizeSwitch("medium-small")};
    padding: ${({ size }) => PixelSizeSwitch(size)} 32px;
    box-sizing: border-box;
    cursor: pointer;
    outline: none;

    :hover,
    :focus {
        background-color: ${({ variant, color }) =>
            ButtonColorSwitch(variant, color)};
    }
`;

export { StyledButton };
