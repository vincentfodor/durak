import React from "react";
import PlayingAreaField from "../PlayingAreaField";

import { StyledPlayingArea } from "./index.style";

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

  return <StyledPlayingArea>{renderFields()}</StyledPlayingArea>;
};

export default PlayingArea;
