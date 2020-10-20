import React from "react";
import { useDrop } from "react-dnd";
import Card from "../Card";
import { ItemTypes } from "../Card/index.types";

import { StyledPlayingAreaField } from "./index.style";

const PlayingAreaField = ({
  card,
  topCard,
  appendCard,
  position,
  currentSelectedPlayingCard
}) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: () => appendCard(currentSelectedPlayingCard, position),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  });

  return (
    <StyledPlayingAreaField hasCard={card !== null} isOver={isOver} ref={drop}>
      {card ? (
        <Card fixed sign={card.sign} value={card.value} color={card.color} />
      ) : null}
      {topCard ? (
        <Card
          isTopCard
          fixed
          sign={topCard.sign}
          value={topCard.value}
          color={topCard.color}
        />
      ) : null}
    </StyledPlayingAreaField>
  );
};

export default PlayingAreaField;
