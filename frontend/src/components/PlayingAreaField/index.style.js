import styled from "styled-components";

const StyledPlayingAreaField = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  width: 100px;
  height: 150px;
  border: ${({ isOver, hasCard }) =>
    isOver
      ? "2px dashed rgba(56, 245, 85, 1)"
      : hasCard
      ? "none"
      : "2px dashed rgba(0, 0, 0, 0.3)"};
  padding: 10px;
  border-radius: 3px;
  padding: 0;
  margin: 10px;
  & > div {
    position: absolute;
    margin: 0;
  }
`;

export { StyledPlayingAreaField };
