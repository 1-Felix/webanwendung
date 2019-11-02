import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMessages } from "../store/actions/messages";
import MessageItem from "../components/MessageItem";

class MessageList extends Component {
  componentDidMount() {
    this.props.fetchMessages();
  }

  render() {
    const { messages } = this.props;
    let MessageList = messages.map(m => (
      // Jede message wird auf dem Server mit einer User-Referenz versehen
      // Desewegen habe ich hier Zugriff auf m.user.username
      <MessageItem
        key={m._id}
        date={m.createAt}
        text={m.text}
        username={m.user.username}
        profileImageUrl={m.user.profileImageUrl}
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
    messages: state.messages
  };
}

export default connect(
  mapStateToProps,
  { fetchMessages }
)(MessageList);
