const { ItemTypes } = require("../Card/index.types");

const [, drop] = useDrop({
  accept: ItemTypes.CARD,
  drop: () => moveCard(x, y)
});
