import React from "react";

import Card, { OpponentCard } from "../Card";
import UserProfile from "../UserProfile";

import {
    StyledHand,
    StyledHandCardsWrapper,
    StyledHandCards,
    StyledHandCardOverflow,
} from "./index.style";

export default class Hand extends React.Component {
    renderOpponentCards = () => {
        let cards = [];

        for (let i = 0; i < this.props.cardCount; i++) {
            if (i >= 3) {
                return cards;
            }

            cards.push(<OpponentCard position={i} />);
        }

        return cards;
    };

    renderPlayerCards = () => {
        const { trumpSuit, cards, isLoading } = this.props;

        if (isLoading) {
            return null;
        }

        return cards
            .sort((x) => (x.suit === trumpSuit ? 0 : x ? -1 : 1))
            .map((card) => (
                <Card
                    key={`${card.uuid}`}
                    setCurrentSelectedPlayingCard={() =>
                        this.props.setCurrentSelectedPlayingCard(card)
                    }
                    opponent={this.props.opponent}
                    value={card.value}
                    sign={card.sign}
                    suit={card.suit}
                    uuid={card.uuid}
                />
            ));
    };

    renderCards = () =>
        this.props.opponent
            ? this.renderOpponentCards()
            : this.renderPlayerCards();

    renderCardOverflow = () => {
        if (this.props.opponent && this.props.cardCount > 3) {
            return (
                <StyledHandCardOverflow>
                    +{this.props.cardCount - 3}
                </StyledHandCardOverflow>
            );
        }
    };

    render() {
        return (
            <StyledHand opponent={this.props.opponent}>
                <UserProfile
                    opponent={this.props.opponent}
                    socket={this.props.socket}
                />
                <StyledHandCardsWrapper opponent={this.props.opponent}>
                    <StyledHandCards opponent={this.props.opponent}>
                        {this.renderCards()}
                    </StyledHandCards>
                    {this.renderCardOverflow()}
                </StyledHandCardsWrapper>
            </StyledHand>
        );
    }
}
