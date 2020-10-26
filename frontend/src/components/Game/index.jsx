import React from "react";
import { DndProvider } from "react-dnd";
import HTML5toTouch from "react-dnd-multi-backend/dist/esm/HTML5toTouch";

import Hand from "../Hand";
import PlayingArea from "../PlayingArea";
import Header from "../Header";

import { StyledGameWrapper, StyledGame } from "./index.style";
import MultiBackend from "react-dnd-multi-backend";

export default class Game extends React.Component {
    state = {
        opponentCardCount: 6,
        playerCards: [
            {
                id: 0,
                value: "A",
                sign: "♥",
                color: "#f04a30",
            },
            {
                id: 1,
                value: "7",
                sign: "♠",
                color: "rgba(0, 0, 0, 0.9)",
            },
            {
                id: 2,
                value: "10",
                sign: "♠",
                color: "rgba(0, 0, 0, 0.9)",
            },
            {
                id: 3,
                value: "J",
                sign: "♦",
                color: "#f04a30",
            },
            {
                id: 4,
                value: "J",
                sign: "♣",
                color: "rgba(0, 0, 0, 0.9)",
            },
            {
                id: 5,
                value: "J",
                sign: "♣",
                color: "rgba(0, 0, 0, 0.9)",
            },
            {
                id: 6,
                value: "J",
                sign: "♣",
                color: "rgba(0, 0, 0, 0.9)",
            },
            {
                id: 7,
                value: "J",
                sign: "♣",
                color: "rgba(0, 0, 0, 0.9)",
            },
        ],
        playingArea: [{ position: 0, card: null, topCard: null }],
        currentSelectedPlayingCard: null,
        waitingForOpponent: true,
        gameId: null,
    };

    componentDidMount = () => {
        console.log(this.props.match);
        this.setState({
            gameId: this.props.match.params.id,
        });
    };

    appendCard = (card, position) => {
        const newPlayingArea = this.state.playingArea;
        const newPlayerCards = this.state.playerCards.filter(
            (currentCard) => currentCard !== card
        );

        for (let i = 0; i < newPlayingArea.length; i++) {
            if (newPlayingArea[i].position === position) {
                if (newPlayingArea[i].topCard !== null) {
                    return;
                }

                if (newPlayingArea[i].card !== null) {
                    newPlayingArea[
                        i
                    ].topCard = this.state.currentSelectedPlayingCard;
                } else {
                    newPlayingArea[
                        i
                    ].card = this.state.currentSelectedPlayingCard;
                    if (newPlayingArea.length < 6) {
                        newPlayingArea[i + 1] = {
                            position: i + 1,
                            card: null,
                            topCard: null,
                        };
                    }
                }
            }
        }

        this.setState((prevState) => ({
            ...prevState,
            playingArea: newPlayingArea,
            playerCards: newPlayerCards,
        }));
    };

    setCurrentSelectedPlayingCard = (card) => {
        this.setState({
            currentSelectedPlayingCard: card,
        });
    };

    render() {
        return (
            <StyledGameWrapper>
                <Header
                    gameid={this.state.gameId}
                    opponent="test"
                    wins={0}
                    loses={0}
                    leaveButton
                    waitingForOpponent={this.state.waitingForOpponent}
                />
                <StyledGame>
                    <DndProvider options={HTML5toTouch} backend={MultiBackend}>
                        <Hand
                            opponent
                            trumpSign="♠"
                            cardCount={this.state.opponentCardCount}
                            socket={this.props.socket}
                        />
                        <PlayingArea
                            playingArea={this.state.playingArea}
                            appendCard={this.appendCard}
                            currentSelectedPlayingCard={
                                this.state.currentSelectedPlayingCard
                            }
                        />

                        <Hand
                            trumpSign="♠"
                            socket={this.props.socket}
                            cards={this.state.playerCards}
                            appendCard={this.appendCard}
                            setCurrentSelectedPlayingCard={
                                this.setCurrentSelectedPlayingCard
                            }
                        />
                    </DndProvider>
                </StyledGame>
            </StyledGameWrapper>
        );
    }
}
