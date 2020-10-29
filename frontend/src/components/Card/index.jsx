import React, { useEffect } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./index.types";

import {
    StyledCard,
    StyledCardTop,
    StyledCardMiddle,
    StyledCardBottom,
} from "./index.style";
import { ColorSwitch } from "../../helpers/ColorHelper";

const OpponentCard = ({ children }) => {
    return (
        <StyledCard opponent>
            <p>{children}</p>
        </StyledCard>
    );
};

const Card = ({
    sign,
    value,
    suit,
    uuid,
    setCurrentSelectedPlayingCard,
    isTopCard,
    fixed,
}) => {
    const renderSign = (suit) => {
        switch (suit) {
            case "heart":
                return "♡";
            case "diamond":
                return "♢";
            case "spade":
                return "♤";
            case "club":
                return "♧";
        }
    };

    const renderSuitAndSign = (suit, sign) => {
        return `${renderSign(suit)} ${sign}`;
    };

    const renderColor = (suit) => {
        switch (suit) {
            case "heart":
            case "diamond":
                return ColorSwitch("red", 0.9);
            case "spade":
            case "club":
                return ColorSwitch("black", 0.9);
        }
    };

    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.CARD },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
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
            <StyledCardTop color={renderColor(suit)}>
                <p>{renderSuitAndSign(suit, sign)}</p>
            </StyledCardTop>
            <StyledCardMiddle color={renderColor(suit)}>
                <p>{renderSign(suit)}</p>
            </StyledCardMiddle>
            <StyledCardBottom color={renderColor(suit)}>
                <p>{renderSuitAndSign(suit, sign)}</p>
            </StyledCardBottom>
        </StyledCard>
    );
};

export { Card as default, OpponentCard };
