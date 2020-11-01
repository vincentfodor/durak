import styled from "styled-components";

import {PixelSizeSwitch} from "../../helpers/PixelSizeHelper"
import {FontSizeSwitch} from "../../helpers/FontSizeHelper"

const StyledProfile = styled.div`
    flex-direction: column;
    text-align: center;

    & > p {
        font-size: ${FontSizeSwitch("medium")};
        margin-bottom: ${PixelSizeSwitch("medium")};
    }
`

const StyledProfilePic = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: ${PixelSizeSwitch("medium-small")}
`

export {StyledProfile, StyledProfilePic};