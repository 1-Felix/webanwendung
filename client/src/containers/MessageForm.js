import React, { Component } from "react";
import { connect } from "react-redux";
import { createNewMessage, updateMessage } from "../store/actions/messages";

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }

  // Das wird ausgefügrt wenn die Nachricht submittet wird
  handleNewSubmit = e => {
    e.preventDefault();
    // Check ob man eine Nachricht updaten, oder neu erstellen möchte
    if(this.props.match.params.message_id){
      // Führt den PUT-Request aus, um eine Nachricht zu ändern
      this.props.updateMessage(this.props.match.params.id, this.props.match.params.message_id, this.state.message);
    } else {
      // Führt den POST-Request aus, um eine Nachricht zu erstellen
      this.props.createNewMessage(this.state.message);
    }
    this.setState({message: ""});
    this.props.history.push("/")

  };

  render() {
    return (
      <form onSubmit={this.handleNewSubmit}>
        {/* {this.props.errors.message && (
          <div className="alert alert-danger">{this.props.errors.message}</div>
        )} */}
        <input
          type="text"
          className="form-control"
          value={this.state.message}
          onChange={e => this.setState({message: e.target.value})}
        />
        <button type="submit" className="btn btn-dark">
            Submit my Idea
        </button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    errors: state.errors
  };
}

export default connect(
  mapStateToProps,
  { createNewMessage, updateMessage }
)(MessageForm);
