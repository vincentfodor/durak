import styled from "styled-components";
import { PixelSizeSwitch } from "../../helpers/PixelSizeHelper";

const StyledUserName = styled.span`
    display: flex;
    align-items: center;
`;

const StyledUserNameProfilePicture = styled.img`
    width: 25px;
    height: 25px;
    border-radius: 50%;
`;

const StyledUserNameText = styled.p`
    margin: 0 0 0 ${PixelSizeSwitch("small")};
`;

export { StyledUserName, StyledUserNameProfilePicture, StyledUserNameText };
