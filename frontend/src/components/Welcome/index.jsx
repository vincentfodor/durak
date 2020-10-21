import React from "react";

import Header from "./Header";
import {
    Table,
    TableRow,
    TableColumn,
    TableHeadColumn,
    TableHead,
    TableBody,
} from "../Table";

import { StyledWelcome } from "./index.style";
import UserName from "../UserName";
import Button from "../Button";

export default class Welcome extends React.Component {
    render() {
        return (
            <StyledWelcome>
                <Header />
                <div style={{ marginBottom: 30 }}>
                    <h1>Good morning, vincentfodor!</h1>
                    <p>Ready for a game of durak?</p>
                </div>
                <Table
                    buttons={<Button size="extra-small">Create Game</Button>}
                    rightButtons={
                        <Button size="extra-small" variant="tertiary">
                            Refresh
                        </Button>
                    }
                >
                    <TableHead>
                        <TableRow>
                            <TableHeadColumn>Players</TableHeadColumn>
                            <TableHeadColumn>GameID</TableHeadColumn>
                            <TableHeadColumn>Created by</TableHeadColumn>
                            <TableHeadColumn>Created at</TableHeadColumn>
                            <TableHeadColumn>Bet</TableHeadColumn>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableColumn>1 / 2</TableColumn>
                            <TableColumn>GAME00001</TableColumn>
                            <TableColumn>
                                <UserName username="vincentfodor" />
                            </TableColumn>
                            <TableColumn>11:19</TableColumn>
                            <TableColumn>1000</TableColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </StyledWelcome>
        );
    }
}
