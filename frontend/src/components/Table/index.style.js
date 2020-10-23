import styled from "styled-components";

import { ColorSwitch } from "../../helpers/ColorHelper";
import { FontSizeSwitch } from "../../helpers/FontSizeHelper";
import { PixelSizeSwitch } from "../../helpers/PixelSizeHelper";

const StyledTableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: ${({ width }) => (width ? width : "100%")};
`;

const StyledTableButtons = styled.div`
    margin-bottom: ${PixelSizeSwitch("medium-small")};
`;

const StyledTableLeftButtons = styled.div`
    position: relative;
    float: left;
`;

const StyledTableRightButtons = styled(StyledTableLeftButtons)`
    position: relative;
    float: right;
`;

const StyledTableOverflow = styled.div`
    overflow-x: auto;
`;

const StyledTableScrollHandler = styled.div`
    overflow-y: scroll;
    max-height: ${({ rowsToDisplay }) =>
        rowsToDisplay ? 78 + rowsToDisplay * 42 + "px" : 78 + 8 * 42 + "px"};
    padding: 0 ${PixelSizeSwitch("medium-small")} 0 0;

    @media only screen and (max-width: 600px) {
        padding: 0;
    }
`;

const StyledTable = styled.table`
    width: calc(100% - 1px);
    border-collapse: collapse;
`;

const StyledTableRow = styled.tr`
    cursor: ${({ onClick }) => (onClick ? "pointer" : "inherit")};

    :hover {
        background-color: ${({ onClick }) =>
            onClick ? ColorSwitch("black", 0.02) : "inherit"};
    }
`;

const StyledTableColumn = styled.td`
    border: 1px solid ${ColorSwitch("black", 0.1)};
    box-sizing: border-box;
    padding: 8px;
    font-size: ${FontSizeSwitch("medium-small")};
`;

const StyledTableHeadColumn = styled(StyledTableColumn)`
    border: none;
    font-weight: 600;
`;

const StyledTableHead = styled.thead``;

const StyledTableBody = styled.tbody`
    overflow: hidden;
`;

export {
    StyledTableWrapper,
    StyledTableButtons,
    StyledTableLeftButtons,
    StyledTableRightButtons,
    StyledTableOverflow,
    StyledTableScrollHandler,
    StyledTable,
    StyledTableRow,
    StyledTableColumn,
    StyledTableHeadColumn,
    StyledTableHead,
    StyledTableBody,
};
