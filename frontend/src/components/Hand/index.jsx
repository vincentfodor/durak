import React from "react";

import Card, { OpponentCard } from "../Card";
import UserProfile from "../UserProfile";

import { StyledHand, StyledHandCards } from "./index.style";

export default class Hand extends React.Component {
  renderOpponentCards = () => {
    let cards = [];

    for (let i = 1; i <= this.props.cardCount; i++) {
      cards.push(<OpponentCard />);
    }

    return cards;
  };

  renderPlayerCards = () => {
    const { trumpSign, cards } = this.props;

    return cards
      .sort((x) => (x.sign === trumpSign ? 0 : x ? -1 : 1))
      .map((card) => (
        <Card
          key={`${card.id}-${card.value}`}
          setCurrentSelectedPlayingCard={() =>
            this.props.setCurrentSelectedPlayingCard(card)
          }
          opponent={this.props.opponent}
          value={card.value}
          sign={card.sign}
          color={card.color}
        />
      ));
  };

  renderCards = () =>
    this.props.opponent ? this.renderOpponentCards() : this.renderPlayerCards();

  render() {
    return (
      <StyledHand>
        <UserProfile opponent={this.props.opponent} socket={this.props.socket} />
        <StyledHandCards>
          {this.renderCards()}
        </StyledHandCards>
      </StyledHand>
    );
  }
}
