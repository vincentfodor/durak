const PixelSizeSwitch = (size = "none") => {
    switch (size) {
        case "small":
            return "8px";
        case "medium-small":
            return "16px";
        case "medium":
            return "24px";
        case "medium-large":
            return "32px";
        case "large":
            return "42px";
        case "none":
        default:
            return "0";
    }
};

export { PixelSizeSwitch };
