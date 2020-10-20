import styled from "styled-components";

import { ColorSwitch } from "../../helpers/ColorHelper";
import { FontSizeSwitch } from "../../helpers/FontSizeHelper";
import { PixelSizeSwitch } from "../../helpers/PixelSizeHelper";

const StyledMessage = styled.div`
    display: flex;
    background-color: ${({ color }) => ColorSwitch(color, 0.1)};
    margin-bottom: ${({ marginBottomPixelSize }) =>
        PixelSizeSwitch(marginBottomPixelSize)};
`;

const StyledMessageStripe = styled.div`
    width: 3px;
    background-color: ${({ color }) => ColorSwitch(color, 0.2)};
`;

const StyledMessageContent = styled.p`
    flex-grow: 1;
    padding: 16px;
    color: ${() => ColorSwitch("black", 0.6)};
    margin: 0;
    font-size: ${FontSizeSwitch("medium-small")};
`;

export { StyledMessage, StyledMessageStripe, StyledMessageContent };
