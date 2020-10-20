import styled from "styled-components";

import { FontSizeSwitch } from "../../helpers/FontSizeHelper";
import { PixelSizeSwitch } from "../../helpers/PixelSizeHelper";

const StyledLogo = styled.span`
    display: block;
    font-size: ${({ fontSize }) => FontSizeSwitch(fontSize)};
    margin-bottom: ${({ marginBottomPixelSize }) =>
        PixelSizeSwitch(marginBottomPixelSize)};
`;

const StyledLogoBold = styled.span`
    font-weight: bold;
`;

export { StyledLogo, StyledLogoBold };
