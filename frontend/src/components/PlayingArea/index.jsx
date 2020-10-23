import React from "react";
import PlayingAreaField from "../PlayingAreaField";

import { StyledPlayingArea, StyledPlayingAreaWrapper, StyledPlayingAreaFields, StyledPlayingAreaDeck } from "./index.style";

const PlayingArea = ({
  playingArea,
  appendCard,
  currentSelectedPlayingCard
}) => {
  const renderFields = () =>
    playingArea.map((field) => (
      <PlayingAreaField
        card={field.card}
        topCard={field.topCard}
        position={field.position}
        appendCard={appendCard}
        currentSelectedPlayingCard={currentSelectedPlayingCard}
      />
    ));

  return (
    <StyledPlayingAreaWrapper>
      <StyledPlayingArea>
        <StyledPlayingAreaDeck>17</StyledPlayingAreaDeck>
        <StyledPlayingAreaFields>
          {renderFields()}
        </StyledPlayingAreaFields>
      </StyledPlayingArea>
    </StyledPlayingAreaWrapper>
  );
};

export default PlayingArea;
