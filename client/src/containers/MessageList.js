import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMessages, removeMessage, updateMessage } from "../store/actions/messages";
import MessageItem from "../components/MessageItem";
import { setCurrentUser } from "../store/actions/auth";

class MessageList extends Component {
  componentDidMount() {
    this.props.fetchMessages();
  }

  render() {
    const { messages, removeMessage, currentUser } = this.props;
    let MessageList = messages.map(m => (
      // Jede message wird auf dem Server mit einer User-Referenz versehen
      // Desewegen habe ich hier Zugriff auf m.user.username
      <MessageItem
        key={m._id}
        date={m.createAt}
        text={m.text}
        messageId={m._id}
        userId={m.user._id}
        username={m.user.username}
        profileImageUrl={m.user.profileImageUrl}
        removeMessage={removeMessage.bind(this, m.user._id, m._id)}
        isCorrectUser={currentUser === m.user._id}
      />
    ));
    return (
        <div className="row col-sm-8">
            <div className="offset-1 col-sm-10">
                <ul className="list-group" id="messages">
                    {MessageList}
                </ul>
            </div>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    currentUser: state.currentUser.user.id
  };
}

export default connect(
  mapStateToProps,
  { fetchMessages, removeMessage, updateMessage }
)(MessageList);
