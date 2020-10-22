import React, { useState } from "react";
import Button from "../Button";
import { Redirect } from "react-router-dom";

import Logo from "../Logo";
import UserName from "../UserName";

import {
    StyledHeader,
    StyledHeaderGameId,
    StyledHeaderStats,
    StyledHeaderStat,
} from "./index.style";
import Loading from "../Loading";

const Header = ({
    gameid,
    wins,
    loses,
    opponent,
    leaveButton,
    waitingForOpponent,
}) => {
    const [gameLeft, setGameLeft] = useState(false);

    const renderGameId = () => {
        if (gameid) {
            return gameid;
        }
    };

    const renderWins = () => {
        if (wins != null) {
            return (
                <StyledHeaderStat>
                    <label>Wins:</label>
                    <span>{wins}</span>
                </StyledHeaderStat>
            );
        }
    };

    const renderLoses = () => {
        if (loses != null) {
            return (
                <StyledHeaderStat>
                    <label>Loses:</label>
                    <span>{loses}</span>
                </StyledHeaderStat>
            );
        }
    };

    const renderOpponent = () => {
        if (opponent) {
            return (
                <StyledHeaderStat>
                    <label>Opponent:</label>
                    <Loading
                        isLoading={waitingForOpponent}
                        width="100px"
                        height="35px"
                        hasIcon
                    >
                        <UserName username="test" />
                    </Loading>
                </StyledHeaderStat>
            );
        }
    };

    const leaveGame = () => {
        setGameLeft(true);
    };

    const renderLeaveButton = () => {
        if (leaveButton) {
            return (
                <Button color="red" size="small" onClick={leaveGame}>
                    Leave game
                </Button>
            );
        }
    };

    return (
        <StyledHeader>
            {gameLeft ? <Redirect to="/welcome" /> : null}
            <Logo fontSize="medium" />
            <StyledHeaderGameId>{renderGameId()}</StyledHeaderGameId>
            <StyledHeaderStats>
                {renderOpponent()}
                {renderWins()}
                {renderLoses()}
            </StyledHeaderStats>
            {renderLeaveButton()}
        </StyledHeader>
    );
};

export default Header;
