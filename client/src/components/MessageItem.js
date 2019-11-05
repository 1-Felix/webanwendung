import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import DefaultProfileImg from "../images/default_profile_pic.jpg";

const MessageItem = ({ date, profileImageUrl, text, username, userId, messageId, removeMessage, isCorrectUser }) => (
  <div>
    <li className="row mb-4 message-area py-2">
      <div className="col-lg-2 d-flex align-items-center">
      <img
        src={profileImageUrl || DefaultProfileImg}
        alt={username}
        height="100"
        width="100"
        className="timeline-image d-none d-lg-block"
      />
      </div>
      <div className="col-12 col-lg-10">
      <div className="w-100 d-flex mb-1">
        <Link className="username" to="/">@{username} </Link>
        <span className="text-muted ml-auto">
          <Moment className="text-muted" format="Do MMM YYYY">
            {date}
          </Moment>
        </span>
        </div>
        <p className="message-body">{text}</p>
        {/* Die Buttons sollen nur angezeigt werden, wenn es die Nachrichten vom User sind. */}
        {isCorrectUser && (
          <div className="message-buttons">
            <a className="btn btn-danger mr-3" onClick={removeMessage}>Delete</a>
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
