import React from "react";

import {StyledUserName, StyledUserNameProfilePicture, StyledUserNameText} from "./index.style"

const UserName = ({username}) => {
    return (
        <StyledUserName>
            <StyledUserNameProfilePicture src="https://s3.amazonaws.com/37assets/svn/765-default-avatar.png" />
            <StyledUserNameText>
                {username}
            </StyledUserNameText>
        </StyledUserName>
    )
}

export default UserName;