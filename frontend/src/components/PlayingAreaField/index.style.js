import styled from "styled-components";
import { ColorSwitch } from "../../helpers/ColorHelper";

const StyledPlayingAreaField = styled.div`
    position: relative;
    display: inline-flex;
    flex-direction: column;
    width: 80px;
    height: 130px;
    border: ${({ isOver, hasCard }) =>
        isOver
            ? `2px dashed ${ColorSwitch("blue")}`
            : hasCard
            ? "none"
            : "2px dashed rgba(0, 0, 0, 0.3)"};
    border-radius: 3px;
    padding: 0;
    margin: 10px 10px 30px 10px;
    box-sizing: border-box;

    & > div {
        position: absolute;
        margin: 0;
    }

    @media only screen and (max-width: 924px) {
        width: 56px;
        height: 91px;
    }

    @media only screen and (max-width: 924px) {
        width: 56px;
        height: 91px;
        padding: 10px;
        left: -20px;

        & > div {
            position: absolute;
            margin: 0 -10px;
        }
    }
`;

export { StyledPlayingAreaField };
