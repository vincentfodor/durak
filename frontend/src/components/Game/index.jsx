import React from "react";
import { DndProvider } from "react-dnd";
import HTML5toTouch from "react-dnd-multi-backend/dist/esm/HTML5toTouch";

import Hand from "../Hand";
import PlayingArea from "../PlayingArea";
import Header from "../Header";

import { StyledGameWrapper, StyledGame } from "./index.style";
import MultiBackend from "react-dnd-multi-backend";
import { GameContext } from "../../GameContext";
import Games from "../../api/Games";
import ErrorHandler from "../ErrorHandler";

export default class Game extends React.Component {
    state = {
        opponentCardCount: 6,
        playerCards: [],
        playingArea: [{ position: 0, card: null, topCard: null }],
        currentSelectedPlayingCard: null,
        waitingForOpponent: true,
        gameId: null,
        isLoading: true,
        errorMessage: null,
        errorSubMessage: null,
        errorRedirect: null,
    };

    componentDidMount = () => {
        this.setState(
            {
                gameId: this.props.match.params.id,
                errorMessage: "This is some error!",
                errorSubMessage: "This is a submessage..."
            },
            () => {
                Games.Join(this.state.gameId, this.context.user).then(
                    ({ data }) => {
                        if (!data.success) {
                            this.setState({
                                errorMessage: data.errors[0],
                                errorSubMessage: "Disconnecting...",
                                errorRedirect: "/welcome",
                            });

                            return;
                        }

                        this.setState({
                            playerCards: data.data.drawnCards,
                            isLoading: false,
                        });
                    }
                );
            }
        );
    };

    appendCard = (card, position) => {
        const newPlayingArea = this.state.playingArea;
        const newPlayerCards = this.state.playerCards.filter(
            (currentCard) => currentCard.uuid !== card.uuid
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
                <ErrorHandler
                    message={this.state.errorMessage}
                    subMessage={this.state.errorSubMessage}
                    redirect={this.state.errorRedirect}
                />
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
                            trumpSuit="spade"
                            cardCount={this.state.opponentCardCount}
                            socket={this.props.socket}
                            isLoading={this.state.isLoading}
                        />
                        <PlayingArea
                            playingArea={this.state.playingArea}
                            appendCard={this.appendCard}
                            currentSelectedPlayingCard={
                                this.state.currentSelectedPlayingCard
                            }
                        />
                        <Hand
                            trumpSuit="spade"
                            socket={this.props.socket}
                            cards={this.state.playerCards}
                            isLoading={this.state.isLoading}
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

Game.contextType = GameContext;
