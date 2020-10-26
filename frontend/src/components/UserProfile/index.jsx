import React from "react";

import {StyledUserProfile, StyledUserProfilePic, StyledUserProfileMessage, StyledUserProfileMessageForm, StyledUserProfileMessageInput, StyledUserProfileMessageButton} from "./index.style"

export default class UserProfile extends React.Component {
    state = {
        message: null,
        preMessage: null
    }
    
    componentDidMount = () => {
        this.props.socket.on("sendMessageCallback", (data) => {
            if(this.props.opponent) {
                this.setState({message: data.message})
            }
        })
    }

    sendMessage = (message) => {
        this.props.socket.emit("sendMessage", { message });
        this.setState({message})
    };

    componentDidUpdate = () => {
        if(this.state.message !== null) {
            setTimeout(() =>
                this.setState({message: null})
            , 5000)
        }
    }

    handleMessageSubmit = e => {
        e.preventDefault();

        if(this.state.message === null && this.state.preMessage !== null && this.state.preMessage !== "") {
            this.sendMessage(this.state.preMessage)
            this.setState({preMessage: ""})
        }
    }

    renderMessageInput = () => {
        if(!this.props.opponent) {
            return (
                <StyledUserProfileMessageForm onSubmit={(e) => this.handleMessageSubmit(e)}>
                    <StyledUserProfileMessageInput placeholder="Good hand?" value={this.state.preMessage} onChange={(e) => this.setState({preMessage: e.target.value})} />
                    <StyledUserProfileMessageButton type="submit">➽</StyledUserProfileMessageButton>
                </StyledUserProfileMessageForm>
            )
        }
    }
    
    render() {
        return (
            <StyledUserProfile>
                <StyledUserProfileMessage opponent={this.props.opponent} hasMessage={this.state.message !== null}>{this.state.message}</StyledUserProfileMessage>
                <StyledUserProfilePic opponent={this.props.opponent} src="https://s3.amazonaws.com/37assets/svn/765-default-avatar.png" />
                {
                    this.renderMessageInput()
                }
            </StyledUserProfile>
        )
    }
}