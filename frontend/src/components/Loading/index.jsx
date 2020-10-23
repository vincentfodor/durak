import React from "react";

import {
    StyledLoadingWrapper,
    StyledLoading,
    StyledLoadingIcon,
} from "./index.style.js";

const Loading = ({
    isLoading,
    width,
    height = 20,
    lines,
    hasIcon,
    children,
}) => {
    const renderLines = () => {
        const linesToRender = [];

        for (let i = 0; i < lines; i++) {
            if (hasIcon) {
                linesToRender[i] = (
                    <StyledLoading
                        lines={lines}
                        width={width}
                        height={height}
                        nth={i}
                    >
                        <StyledLoadingIcon>◠</StyledLoadingIcon>
                    </StyledLoading>
                );
            } else {
                linesToRender[i] = (
                    <StyledLoading
                        lines={lines}
                        width={width}
                        height={height}
                        nth={i}
                    />
                );
            }
        }

        return linesToRender;
    };

    if (isLoading) {
        if (lines) {
            return <StyledLoadingWrapper>{renderLines()}</StyledLoadingWrapper>;
        }

        return (
            <StyledLoadingWrapper lines={lines}>
                <StyledLoading width={width} height={height}>
                    {hasIcon ? <StyledLoadingIcon>◠</StyledLoadingIcon> : null}
                </StyledLoading>
            </StyledLoadingWrapper>
        );
    }

    return children;
};

export default Loading;
