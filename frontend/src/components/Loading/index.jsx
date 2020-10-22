import React from "react";

import {
    StyledLoadingWrapper,
    StyledLoading,
    StyledLoadingIcon,
} from "./index.style.js";

const Loading = ({
    isLoading,
    width,
    height,
    lines = 1,
    hasIcon,
    children,
}) => {
    const renderLines = () => {
        const linesToRender = [];

        for (let i = 0; i < lines; i++) {
            if (hasIcon) {
                linesToRender[i] = (
                    <StyledLoading width={width} height={height}>
                        <StyledLoadingIcon>◠</StyledLoadingIcon>
                    </StyledLoading>
                );
            } else {
                linesToRender[i] = (
                    <StyledLoading width={width} height={height} />
                );
            }
        }

        return linesToRender;
    };

    if (isLoading) {
        return <StyledLoadingWrapper>{renderLines()}</StyledLoadingWrapper>;
    }

    return children;
};

export default Loading;
