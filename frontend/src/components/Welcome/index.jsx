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
import User from "../../api/User";
import Loading from "../Loading";
import Games from "../../api/Games";
import Profile from "../Profile";
import ErrorHandler from "../ErrorHandler";
import { Redirect } from "react-router";
import { UserContext } from "../../UserContext";

export default class Welcome extends React.Component {
    state = {
        isLoading: false,
        isLoadingGames: false,
        mainContainerWidth: 0,
        games: [],
        selectedGameId: null,
        errorMessage: null,
        errorSubmessage: null,
        errorRedirect: null,
    };

    constructor(props) {
        super(props);
        this.mainContainer = React.createRef();
    }

    componentDidMount = () => {
        const auth = localStorage.getItem("durak-challengers-auth");

        console.log(auth);

        if (
            !this.context.user.username &&
            !this.context.user.email &&
            !this.context.user.uuid &&
            auth
        ) {
            this.setState({
                isLoading: true,
                isLoadingGames: true,
                mainContainerWidth: this.mainContainer.current.offsetWidth,
            });

            User.Auth(auth)
                .then(({ data }) => {
                    if (!data.success) {
                        this.setState({
                            errorMessage: data.errors[0],
                            errorRedirect: "/",
                            errorSubmessage: "Redirecting to login...",
                        });
                    }

                    this.context.setUser({
                        username: data.data.username,
                        email: data.data.email,
                        uuid: data.data.uuid,
                    });
                })
                .catch((err) => {
                    this.setState({
                        errorMessage: err,
                    });
                });

            this.setState({ isLoading: false, isLoadingGames: false });
        }

        this.refreshGames();
    };

    renderWelcomeMessage = (username) => {
        const currentHours = new Date().getHours();

        if (this.state.isLoading) {
            return <Loading height={25} width="250px" />;
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
            <TableRow onClick={() => this.joinGame(game.gameId)}>
                <TableColumn>1 / {game.config.maxPlayers}</TableColumn>
                <TableColumn>{game.gameId}</TableColumn>
                <TableColumn>
                    <UserName username={game.creator} />
                </TableColumn>
                <TableColumn>{game.config.bet}</TableColumn>
            </TableRow>
        ));
    };

    refreshGames = () => {
        this.setState({ isLoadingGames: true });

        Games.Fetch()
            .then(({ data }) => {
                this.setState({
                    games: data.games,
                    isLoadingGames: false,
                });
            })
            .catch((err) => {
                this.setState({
                    errorMessage: err,
                });
            });
    };

    createGame = () => {
        Games.Create(this.context.user)
            .then(({ data }) => {
                if (data.success) {
                    this.joinGame(data.data.newGame.gameId);
                }
            })
            .catch(() => {
                this.setState({
                    errorMessage: "Couldn't create game",
                });
            });
        this.joinGame();
    };

    joinGame = (gameId) => {
        this.setState({
            selectedGameId: gameId,
        });
    };

    render() {
        return (
            <StyledWelcomeWrapper>
                <ErrorHandler
                    message={this.state.errorMessage}
                    redirect={this.state.errorRedirect}
                />
                {this.state.selectedGameId ? (
                    <Redirect to={`/play/${this.state.selectedGameId}`} />
                ) : null}
                <Header />
                <StyledWelcome>
                    <StyledWelcomeSecondary>
                        <Profile />
                    </StyledWelcomeSecondary>
                    <StyledWelcomeMain ref={this.mainContainer}>
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
                        <Table
                            buttons={
                                <Button size="small" onClick={this.createGame}>
                                    Create Game
                                </Button>
                            }
                            rightButtons={
                                <Button
                                    size="small"
                                    variant="secondary"
                                    disabled={this.state.isLoadingGames}
                                    onClick={this.refreshGames}
                                >
                                    Refresh
                                </Button>
                            }
                        >
                            <TableHead>
                                <TableRow>
                                    <TableHeadColumn>Players</TableHeadColumn>
                                    <TableHeadColumn>GameID</TableHeadColumn>
                                    <TableHeadColumn>
                                        Created by
                                    </TableHeadColumn>
                                    <TableHeadColumn>Bet</TableHeadColumn>
                                </TableRow>
                            </TableHead>
                            <Loading
                                isLoading={this.state.isLoadingGames}
                                lines={4}
                                height={30}
                                width={this.state.mainContainerWidth + "px"}
                            >
                                <TableBody>{this.renderGames()}</TableBody>
                            </Loading>
                        </Table>
                    </StyledWelcomeMain>
                </StyledWelcome>
            </StyledWelcomeWrapper>
        );
    }
}

Welcome.contextType = UserContext;
