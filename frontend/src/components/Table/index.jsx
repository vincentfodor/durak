import React from "react";

import {
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
} from "./index.style";

const Table = ({
    children,
    width,
    buttons,
    rightButtons,
    rowsToDisplay,
    ref,
}) => {
    const renderButtons = () => (buttons ? buttons : null);

    const renderRightButtons = () => (rightButtons ? rightButtons : null);

    return (
        <StyledTableWrapper width={width} ref={ref}>
            <StyledTableButtons>
                <StyledTableLeftButtons>
                    {renderButtons()}
                </StyledTableLeftButtons>
                <StyledTableRightButtons>
                    {renderRightButtons()}
                </StyledTableRightButtons>
            </StyledTableButtons>
            <StyledTableOverflow rowsToDisplay={rowsToDisplay}>
                <StyledTableScrollHandler>
                    <StyledTable>{children}</StyledTable>
                </StyledTableScrollHandler>
            </StyledTableOverflow>
        </StyledTableWrapper>
    );
};

const TableRow = ({ children, onClick, disabled }) => {
    return (
        <StyledTableRow onClick={onClick} disabled={disabled}>
            {children}
        </StyledTableRow>
    );
};

const TableColumn = ({ children }) => {
    return <StyledTableColumn>{children}</StyledTableColumn>;
};

const TableHeadColumn = ({ children }) => {
    return <StyledTableHeadColumn>{children}</StyledTableHeadColumn>;
};

const TableHead = ({ children }) => {
    return <StyledTableHead>{children}</StyledTableHead>;
};

const TableBody = ({ children }) => {
    return <StyledTableBody>{children}</StyledTableBody>;
};

export { Table, TableRow, TableColumn, TableHeadColumn, TableHead, TableBody };
