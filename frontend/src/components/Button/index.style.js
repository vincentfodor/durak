import styled from "styled-components";

import { ColorContrastSwitch, ColorSwitch } from "../../helpers/ColorHelper";
import { FontSizeSwitch } from "../../helpers/FontSizeHelper";

const ButtonColorSwitch = (type = "primary", color = "blue") => {
    switch (type) {
        case "tertiary":
            return "transparent";
        case "primary":
        case "secondary":
        default:
            return ColorSwitch(color);
    }
};

const ButtonColorForegroundSwitch = (type = "primary", color = "blue") => {
    switch (type) {
        case "tertiary":
            return ColorSwitch("black", 0.5);
        case "primary":
            return ColorContrastSwitch(color, 1);
        case "secondary":
            return ColorSwitch(color, 1);
        default:
            return ColorSwitch(color);
    }
};

const StyledButton = styled.button`
    background-color: transparent;
    border: none;
    background-color: ${({ type, color }) => ButtonColorSwitch(type, color)};
    color: ${({ type, color }) => ButtonColorForegroundSwitch(type, color)};
    border-radius: 3px;
    font-size: ${FontSizeSwitch("medium-small")};
    padding: 8px 32px;
    box-sizing: border-box;
    cursor: pointer;
    outline: none;

    :hover,
    :focus {
        background-color: ${({ type, color }) =>
            ButtonColorSwitch(type, color)};
    }
`;

export { StyledButton };
