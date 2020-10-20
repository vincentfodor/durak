const FontSizeSwitch = (size = "default") => {
    switch (size) {
        case "small":
            return "8px";
        case "medium-small":
            return "14px";
        case "medium":
            return "16px";
        case "medium-large":
            return "22px";
        case "large":
            return "26px";
        case "default":
        default:
            return "14px";
    }
};

export { FontSizeSwitch };
