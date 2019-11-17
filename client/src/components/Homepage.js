import React from "react";
import MessageTimeline from "./MessageTimeline";

const Homepage = ({ currentUser }) => {
  if (!currentUser.isAuthenticated) {
    return (
      <div className="home-hero row">
        <div className="col"></div>
        <div className="col">
          <h1 className="header-text">
            <span>Got a</span>
            <span>brilliant</span>
            <span className="light">Idea</span>
            <span>to change</span>
            <span>the world?</span>
          </h1>
        </div>
        <div className="col"></div>
        <div className="col">
          <h4 className="header-subtitle">
            <span>Share it</span>
            <span>with the</span>
            <span>community!</span>
          </h4>
        </div>
        <div className="col"></div>
      </div>
    );
  }
  return (
    <div>
      <MessageTimeline profileImageUrl={currentUser.user.profileImageUrl} username={currentUser.user.username}/>
    </div>
  );
};

export default Homepage;
