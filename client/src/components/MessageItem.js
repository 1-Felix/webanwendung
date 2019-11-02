import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import DefaultProfileImg from "../images/default_profile_pic.jpg";

const MessageItem = ({ date, profileImageUrl, text, username, userId, messageId, removeMessage, isCorrectUser }) => (
  <div>
    <li className="list-group-item">
      <img
        src={profileImageUrl || DefaultProfileImg}
        alt={username}
        height="100"
        width="100"
        className="timeline-image"
      />
      <div className="message-area">
        <Link to="/">@{username} </Link>
        <span className="text-muted">
          <Moment className="text-muted" format="Do MMM YYYY">
            {date}
          </Moment>
        </span>
        <p>{text}</p>
        {/* Die Buttons sollen nur angezeigt werden, wenn es die Nachrichten vom User sind. */}
        {isCorrectUser && (
          <div>
            <a className="btn btn-danger" onClick={removeMessage}>Delete</a>
            <Link className="btn btn-dark" to={{
              pathname: `/users/${userId}/messages/${messageId}/update`,
            }}>Update</Link>
          </div>
        )}
      </div>
    </li>
  </div>
);

export default MessageItem;
