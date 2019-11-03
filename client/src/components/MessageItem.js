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

// }) => (
//   <li className="list-group-item mb-3 d-flex">
//     <img
//       src={profileImageUrl || DefaultProfileImg}
//       alt={username}
//       height="100"
//       width="100"
//       className="img-fluid"
//     />
//     <div className=" ml-4 d-flex w-100">
//       <div>
//         <Link to="/">@{username} </Link>
//       </div>
//       <div className="align-self-center">
//         <p>{text}</p>
//       </div>
//       <div className="text-muted ml-auto h-50 date">
//         <Moment className="text-muted" format="Do MMM YYYY">
//           {date}
//         </Moment>
//       </div>
//       {/* Die Buttons sollen nur angezeigt werden, wenn es die Nachrichten vom User sind. */}
//       {isCorrectUser && (
//         <div className="align-self-end">
//           <a className="btn btn-danger" onClick={removeMessage}>
//             Delete
//           </a>
//           <Link
//             className="btn btn-dark "
//             to={{
//               pathname: `/users/${userId}/messages/${messageId}/update`
//             }}
//           >
//             Update
//           </Link>
//         </div>
//       )}
//     </div>
//   </li>
// );
