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
    margin-bottom: ${PixelSizeSwitch("extra-small")};
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

const StyledTable = styled.table`
    width: calc(100% - 1px);
    border-collapse: collapse;
`;

const StyledTableRow = styled.tr``;

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
    StyledTable,
    StyledTableRow,
    StyledTableColumn,
    StyledTableHeadColumn,
    StyledTableHead,
    StyledTableBody,
};
