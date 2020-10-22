import React from "react";

import Logo from "../Logo";
import UserName from "../UserName";

import {StyledHeader, StyledHeaderGameId, StyledHeaderStats, StyledHeaderStat} from "./index.style"

const Header = ({gameid, wins, loses, opponent}) => {
    const renderGameId = () => {
        if(gameid) {
            return gameid
        }
    }

    const renderWins = () => {
        if(wins != null) {
             return (
                <StyledHeaderStat>
                    <label>Wins:</label>
                    <span>{wins}</span>
                </StyledHeaderStat>
             )
        }
    }

    const renderLoses = () => {
        if(loses != null) {
             return (
                <StyledHeaderStat>
                    <label>Loses:</label>
                    <span>{loses}</span>
                </StyledHeaderStat>
             )
        }
    }

    const renderOpponent = () => {
        if(opponent) {
            return (
                <StyledHeaderStat>
                    <label>Opponent:</label>
                    <UserName username="test" />
                </StyledHeaderStat>
            )
        }
    }
    
    return (
        <StyledHeader>
            <Logo fontSize="medium" />
            <StyledHeaderGameId>{renderGameId()}</StyledHeaderGameId>
            <StyledHeaderStats>
                {renderOpponent()}
                {renderWins()}
                {renderLoses()}
            </StyledHeaderStats>
        </StyledHeader>
    )
}

export default Header;