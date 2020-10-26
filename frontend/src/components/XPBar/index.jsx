import React from "react";

import {
    StyledXPBarWrapper,
    StyledXPBarLevel,
    StyledXPBar,
    StyledXPBarAbsolute,
    StyledXPBarDifference,
    StyledXPBarVisual,
} from "./index.style";

const XPBar = ({ currentXp, nextXp, totalXp, currentLevel, width }) => {
    const nextLevel = currentLevel + 1;

    console.log({ component: { currentXp, nextXp, totalXp } });

    return (
        <StyledXPBarWrapper width={width}>
            <StyledXPBarVisual>
                <StyledXPBarLevel>{currentLevel}</StyledXPBarLevel>
                <StyledXPBar>
                    <StyledXPBarAbsolute
                        currentXp={currentXp}
                        nextXp={nextXp}
                        totalXp={totalXp}
                    >
                        <StyledXPBarDifference currentXp={currentXp}>
                            +{(currentXp - nextXp) * -1} XP
                        </StyledXPBarDifference>
                    </StyledXPBarAbsolute>
                </StyledXPBar>
                <StyledXPBarLevel>{nextLevel}</StyledXPBarLevel>
            </StyledXPBarVisual>
        </StyledXPBarWrapper>
    );
};

export default XPBar;
