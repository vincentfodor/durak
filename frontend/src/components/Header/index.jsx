import React, { useContext, useState } from "react";
import Button from "../Button";
import { Redirect } from "react-router-dom";

import Logo from "../Logo";
import UserName from "../UserName";

import {
    StyledHeader,
    StyledHeaderGameId,
    StyledHeaderStats,
    StyledHeaderStat,
    StyledHeaderLeaveButtonWrapper,
} from "./index.style";
import Loading from "../Loading";
import { UserContext } from "../../UserContext";

const Header = ({
    gameId,
    wins,
    loses,
    opponent,
    leaveButton,
    waitingForOpponent,
}) => {
    const [gameLeft, setGameLeft] = useState(false);
    const context = useContext(UserContext);

    const renderGameId = () => {
        if (gameId) {
            return gameId;
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
                        height={35}
                        hasIcon
                    >
                        <UserName username="test" />
                    </Loading>
                </StyledHeaderStat>
            );
        }
    };

    const leaveGame = () => {
        const { socket, user } = context;

        console.log(gameId);

        socket.emit("leaveGameEvent", { gameId, user });

        setGameLeft(true);
    };

    const renderLeaveButton = () => {
        if (leaveButton) {
            return (
                <Button color="red" size="small" onClick={leaveGame}>
                    Leave
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
            <StyledHeaderLeaveButtonWrapper>
                {renderLeaveButton()}
            </StyledHeaderLeaveButtonWrapper>
        </StyledHeader>
    );
};

export default Header;
