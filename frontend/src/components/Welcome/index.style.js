import styled from "styled-components";
import { ColorSwitch } from "../../helpers/ColorHelper";
import { PixelSizeSwitch } from "../../helpers/PixelSizeHelper";

const StyledWelcomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledWelcome = styled.div`
    display: flex;
    height: 100%;
    padding: ${PixelSizeSwitch("medium")};

    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`;

const StyledWelcomeMain = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

const StyledWelcomeMessage = styled.div`
    margin-bottom: ${PixelSizeSwitch("medium-small")};
`;

const StyledWelcomeSecondary = styled.div`
    width: 500px;
    margin-right: ${PixelSizeSwitch("medium")};
    padding: ${PixelSizeSwitch("medium")};
    box-sizing: border-box;
    border-radius: 3px;

    @media only screen and (max-width: 600px) {
        width: 100%;
        margin-right: 0;
        margin-bottom: ${PixelSizeSwitch("medium")};
    }
`;

export {
    StyledWelcomeWrapper,
    StyledWelcome,
    StyledWelcomeMain,
    StyledWelcomeMessage,
    StyledWelcomeSecondary
};
