import styled from "styled-components";

const StyledTextboxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 10px 0;
`;

const StyledTextbox = styled.input`
    padding: 8px;
    width: ${({ width }) => (width ? width : "100%")};
    border: none;
    border-radius: 3px;
    outline: none;
`;

const StyledLabel = styled.label`
    margin: 0 0 5px 0;
    font-size: 12pt;
`;

export { StyledTextbox, StyledTextboxWrapper, StyledLabel };
