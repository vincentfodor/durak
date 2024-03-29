import styled from "styled-components";
import { PixelSizeSwitch } from "../../helpers/PixelSizeHelper";

const StyledUserProfile = styled.div`
    display: flex;
    align-items: center;
`;

const StyledUserProfilePic = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;

    margin-right: ${({ opponent }) =>
        opponent ? 0 : PixelSizeSwitch("medium-small")};

    @media only screen and (max-width: 420px) {
        width: 30px;
        height: 30px;
    }
`;

const StyledUserProfileMessage = styled.p`
    padding: 8px 16px;
    background-color: ${({ opponent }) =>
        opponent ? "rgba(237, 78, 66, 0.3)" : "rgba(0, 0, 0, 0.07)"};
    margin: 0 10px 0 0;
    border-radius: 3px;
    display: ${({ hasMessage }) => (hasMessage ? "block" : "none")};
`;

const StyledUserProfileMessageForm = styled.form``;

const StyledUserProfileMessageInput = styled.input`
    padding: 8px;
    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, 0.17);
    width: 200px;
    outline: none;
    font-family: sans-serif;

    :focus {
        border: 1px solid rgba(0, 0, 0, 0.33);
    }
`;

const StyledUserProfileMessageButton = styled.button`
    background-color: transparent;
    border: none;
    font-size: 16px;
    margin: 0 0 0 5px;
    color: rgba(0, 0, 0, 0.9);
    outline: none;
    cursor: pointer;
`;

export {
    StyledUserProfile,
    StyledUserProfilePic,
    StyledUserProfileMessage,
    StyledUserProfileMessageForm,
    StyledUserProfileMessageInput,
    StyledUserProfileMessageButton,
};
