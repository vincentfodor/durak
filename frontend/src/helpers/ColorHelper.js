const ColorSwitch = (colorName = "black", opacityValue = 1) => {
    switch (colorName) {
        case "blue":
            return `rgba(35, 145, 255, ${opacityValue})`;
        case "red":
            return `rgba(255, 104, 104, ${opacityValue})`;
        case "light-green":
            return `rgba(45, 242, 98, ${opacityValue})`;
        case "black":
        default:
            return `rgba(0, 0, 0, ${opacityValue})`;
    }
};

const ColorContrastSwitch = (colorName = "black", opacityValue = 1) => {
    switch (colorName) {
        case "blue":
        case "red":
            return `rgba(255, 255, 255, ${opacityValue})`;
        case "black":
        default:
            return `rgba(0, 0, 0, ${opacityValue})`;
    }
};

export { ColorSwitch, ColorContrastSwitch };
