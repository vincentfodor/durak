import React from "react";

import {
    StyledMessage,
    StyledMessageStripe,
    StyledMessageContent,
} from "./index.style";

const Message = ({ color, marginBottomPixelSize, children }) => {
    return (
        <StyledMessage
            color={color}
            marginBottomPixelSize={marginBottomPixelSize}
        >
            <StyledMessageStripe color={color} />
            <StyledMessageContent color={color}>
                {children}
            </StyledMessageContent>
        </StyledMessage>
    );
};

export default Message;
