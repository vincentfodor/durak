import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";

import { StyledErrorHandler, StyledErrorHandlerWrapper } from "./index.style";

const ErrorHandler = ({
    message,
    subMessage,
    redirect,
    animationDuration = 3000,
}) => {
    const [isDisplayed, setIsDisplayed] = useState(false);
    const [redirectPath, setRedirectPath] = useState(null);

    useEffect(() => {
        setIsDisplayed(true);

        setTimeout(() => {
            setIsDisplayed(false);

            setRedirectPath(redirect);
        }, animationDuration);
    }, [message]);

    if (message && isDisplayed) {
        return (
            <StyledErrorHandlerWrapper>
                <StyledErrorHandler animationDuration={animationDuration}>
                    <h1>{message}</h1>
                    <p>{subMessage}</p>
                </StyledErrorHandler>
            </StyledErrorHandlerWrapper>
        );
    } else {
        if (redirectPath) {
            return <Redirect to={redirectPath} />;
        } else {
            return <div />;
        }
    }
};

export default ErrorHandler;
