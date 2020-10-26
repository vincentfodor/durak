import styled from "styled-components";

import { FontSizeSwitch } from "../../helpers/FontSizeHelper";
import { PixelSizeSwitch } from "../../helpers/PixelSizeHelper";

const StyledLogo = styled.span`
    display: block;
    font-size: ${({ fontSize }) => FontSizeSwitch(fontSize)};
    margin-bottom: ${({ marginBottomPixelSize }) =>
        PixelSizeSwitch(marginBottomPixelSize)};

    @media only screen and (max-width: 420px) {
        display: none;
    }
`;

const StyledLogoBold = styled.span`
    font-weight: bold;
`;

export { StyledLogo, StyledLogoBold };
