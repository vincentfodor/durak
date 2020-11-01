import React from "react";

import {StyledProfile, StyledProfilePic} from "./index.style";
import XPBar from "../XPBar";

const Profile = () => {
    return (
        <StyledProfile>
            <StyledProfilePic src="https://s3.amazonaws.com/37assets/svn/765-default-avatar.png" alt="Profile picture" />
            <p>
                <b>vincentfodor</b>
                <br />
                vincent.fodor@online.de
            </p>
            <XPBar currentLevel={76} currentXp={2900} totalXp={3000} />
        </StyledProfile>
    )
}

export default Profile;