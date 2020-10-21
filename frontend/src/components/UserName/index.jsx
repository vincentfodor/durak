import React from "react";

import {StyledUserName, StyledUserNameProfilePicture, StyledUserNameText} from "./index.style"

const UserName = ({username}) => {
    return (
        <StyledUserName>
            <StyledUserNameProfilePicture src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" />
            <StyledUserNameText>
                {username}
            </StyledUserNameText>
        </StyledUserName>
    )
}

export default UserName;