import React from "react";

import {
    StyledDialogWrapper,
    StyledDialog,
    StyledDialogHeader,
    StyledDialogBody,
    StyledDialogFooter,
} from "./index.style";

const Dialog = ({ title, buttons, open, children }) => {
    const renderButtons = () => {
        if (buttons) {
            return buttons;
        }
    };

    if (open) {
        return (
            <StyledDialogWrapper>
                <StyledDialog>
                    <StyledDialogHeader>
                        <h2>{title}</h2>
                    </StyledDialogHeader>
                    <StyledDialogBody>{children}</StyledDialogBody>
                    <StyledDialogFooter>{renderButtons()}</StyledDialogFooter>
                </StyledDialog>
            </StyledDialogWrapper>
        );
    } else {
        return <span />;
    }
};

export default Dialog;
