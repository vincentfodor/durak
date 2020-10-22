import React from "react";

import Header from "../Header";
import {
    Table,
    TableRow,
    TableColumn,
    TableHeadColumn,
    TableHead,
    TableBody,
} from "../Table";

import {
    StyledWelcomeWrapper,
    StyledWelcome,
    StyledWelcomeMain,
    StyledWelcomeMessage,
    StyledWelcomeSecondary,
} from "./index.style";
import UserName from "../UserName";
import Button from "../Button";
import { GameContext } from "../../GameContext";
import User from "../../api/User";
import Loading from "../Loading";
import Games from "../../api/Games";

export default class Welcome extends React.Component {
    state = {
        isLoading: false,
        isLoadingGames: false,
        games: [],
    };

    componentDidMount = () => {
        const auth = localStorage.getItem("durak-challengers-auth");

        if (
            !this.context.user.username &&
            !this.context.user.email &&
            !this.context.user.uuid &&
            auth
        ) {
            this.setState({ isLoading: true, isLoadingGames: true });

            User.Auth(auth)
                .then(({ data }) => {
                    this.context.setUser({
                        username: data.data.username,
                        email: data.data.email,
                        uuid: data.data.uuid,
                    });

                    Games.Fetch()
                        .then((res) => {
                            console.log(res);
                            this.setState({
                                games: res.data.data,
                            });
                        })
                        .catch((err) => {
                            // TODO: Handle fetch games error
                        });
                })
                .catch((err) => {
                    // TODO: Handle login error
                });

            this.setState({ isLoading: false, isLoadingGames: false });
        }
    };

    renderWelcomeMessage = (username) => {
        const currentHours = new Date().getHours();

        if (this.state.isLoading) {
            return "loading";
        }

        if (currentHours <= 18) {
            return `Hi, ${username}. Hope you are doing well today!`;
        } else if (currentHours <= 10) {
            return `Good morning, ${username}. Did you sleep well?`;
        } else {
            return `Good evening, ${username}. Remember to have some healthy amount of sleep!`;
        }
    };

    renderGames = () => {
        return this.state.games.map((game) => (
            <TableRow onClick={() => this.joinGame(game.gameid)}>
                <TableColumn>1 / 2</TableColumn>
                <TableColumn>{game.gameid}</TableColumn>
                <TableColumn>
                    <UserName username={game.creator} />
                </TableColumn>
                <TableColumn>{game.bet}</TableColumn>
            </TableRow>
        ));
    };

    refreshGames = () => {
        this.setState({ isLoadingGames: true });

        Games.Fetch()
            .then((res) => {
                this.setState({
                    games: res.data.data,
                    isLoadingGames: false,
                });
            })
            .catch((err) => {
                // TODO: Handle fetch games error
            });
    };

    createGame = () => {
        Games.Create(this.context.user);
    };

    joinGame = (gameid) => {
        window.location = `/play/${gameid}`;
    };

    render() {
        return (
            <StyledWelcomeWrapper>
                <Header />
                <StyledWelcome>
                    <StyledWelcomeSecondary />
                    <StyledWelcomeMain>
                        <StyledWelcomeMessage>
                            <h1>
                                <Loading
                                    isLoading={this.state.isLoading}
                                    width="400px"
                                    height="35px"
                                >
                                    {this.renderWelcomeMessage(
                                        this.context.user.username
                                    )}
                                </Loading>
                            </h1>
                            <p>Ready for a game of durak?</p>
                        </StyledWelcomeMessage>
                        <Loading
                            isLoading={this.state.isLoadingGames}
                            lines={10}
                            height="30px"
                        >
                            <Table
                                buttons={
                                    <Button
                                        size="extra-small"
                                        onClick={this.createGame}
                                    >
                                        Create Game
                                    </Button>
                                }
                                rightButtons={
                                    <Button
                                        size="extra-small"
                                        variant="tertiary"
                                        onClick={this.refreshGames}
                                    >
                                        Refresh
                                    </Button>
                                }
                            >
                                <TableHead>
                                    <TableRow>
                                        <TableHeadColumn>
                                            Players
                                        </TableHeadColumn>
                                        <TableHeadColumn>
                                            GameID
                                        </TableHeadColumn>
                                        <TableHeadColumn>
                                            Created by
                                        </TableHeadColumn>
                                        <TableHeadColumn>Bet</TableHeadColumn>
                                    </TableRow>
                                </TableHead>
                                <TableBody>{this.renderGames()}</TableBody>
                            </Table>
                        </Loading>
                    </StyledWelcomeMain>
                </StyledWelcome>
            </StyledWelcomeWrapper>
        );
    }
}

Welcome.contextType = GameContext;
