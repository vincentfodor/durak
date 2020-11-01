import styled from "styled-components";

import { PixelSizeSwitch } from "../../helpers/PixelSizeHelper";
import { ColorSwitch } from "../../helpers/ColorHelper";

const StyledGameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

const StyledGame = styled.div`
    display: flex;
    flex-grow: 1;
    padding: ${PixelSizeSwitch("medium")};
    flex-direction: column;
    background-color: ${ColorSwitch("black", 0.02)};
`;

export { StyledGameWrapper, StyledGame };
