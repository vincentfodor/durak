import styled from "styled-components";

import { ColorSwitch } from "../../helpers/ColorHelper";
import { PixelSizeSwitch } from "../../helpers/PixelSizeHelper";

const StyledTextboxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${({ marginBottomPixelSize }) =>
        PixelSizeSwitch(marginBottomPixelSize)};
`;

const StyledTextbox = styled.input`
    padding: 12px;
    width: ${({ width }) => (width ? width : "100%")};
    border: none;
    border-radius: 3px;
    outline: none;
    box-sizing: border-box;
    background-color: ${ColorSwitch("black", 0.05)};
`;

const StyledLabel = styled.label`
    margin-bottom: ${PixelSizeSwitch("small")};
    font-size: 14px;
`;

export { StyledTextbox, StyledTextboxWrapper, StyledLabel };
