import styled from "styled-components";

import { ColorContrastSwitch, ColorSwitch } from "../../helpers/ColorHelper";
import { FontSizeSwitch } from "../../helpers/FontSizeHelper";
import { PixelSizeSwitch } from "../../helpers/PixelSizeHelper";

const ButtonColorSwitch = (
    disabled = false,
    variant = "primary",
    color = "blue"
) => {
    if (!disabled) {
        switch (variant) {
            case "tertiary":
                return "transparent";
            case "secondary":
                return ColorSwitch("black", 0.05);
            case "primary":
            default:
                return ColorSwitch(color);
        }
    } else {
        return ColorSwitch("black", 0.05);
    }
};

const ButtonColorForegroundSwitch = (
    disabled = false,
    variant = "primary",
    color = "blue"
) => {
    if (!disabled) {
        switch (variant) {
            case "tertiary":
                return ColorSwitch(color);
            case "primary":
                return ColorContrastSwitch(color, 1);
            case "secondary":
                return ColorSwitch("black", 0.9);
            default:
                return ColorSwitch(color);
        }
    } else {
        return ColorSwitch("black", 0.5);
    }
};

const StyledButton = styled.button`
    background-color: transparent;
    border: none;
    background-color: ${({ disabled, variant, color }) =>
        ButtonColorSwitch(disabled, variant, color)};
    color: ${({ disabled, variant, color }) =>
        ButtonColorForegroundSwitch(disabled, variant, color)};
    border-radius: 3px;
    font-size: ${FontSizeSwitch("medium-small")};
    padding: ${({ size }) => PixelSizeSwitch(size)} 32px;
    margin-right: ${({ marginRightPixelSize }) =>
        marginRightPixelSize ? PixelSizeSwitch(marginRightPixelSize) : null};
    box-sizing: border-box;
    cursor: pointer;
    outline: none;

    :hover,
    :focus {
        background-color: ${({ disabled, variant, color }) =>
            ButtonColorSwitch(disabled, variant, color)};
    }
`;

export { StyledButton };
