import React, { useEffect } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./index.types";

import {
  StyledCard,
  StyledCardTop,
  StyledCardMiddle,
  StyledCardBottom
} from "./index.style";

const OpponentCard = () => {
  return <StyledCard opponent />;
};

const Card = ({
  sign,
  value,
  color,
  setCurrentSelectedPlayingCard,
  isTopCard,
  fixed
}) => {
  const renderSignAndValue = () => {
    return `${sign} ${value}`;
  };

  const renderSign = () => {
    return `${sign}`;
  };

  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  });

  useEffect(() => {
    if (!fixed) {
      if (isDragging) {
        setCurrentSelectedPlayingCard({ sign, value });
      }
    }
  }, [isDragging]);

  return (
    <StyledCard ref={fixed ? null : drag} isTopCard={isTopCard}>
      <StyledCardTop color={color}>
        <p>{renderSignAndValue()}</p>
      </StyledCardTop>
      <StyledCardMiddle color={color}>
        <p>{renderSign()}</p>
      </StyledCardMiddle>
      <StyledCardBottom color={color}>
        <p>{renderSignAndValue()}</p>
      </StyledCardBottom>
    </StyledCard>
  );
};

export { Card as default, OpponentCard };
