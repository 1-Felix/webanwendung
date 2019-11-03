import React from "react";
import DefaultProfileImg from "../images/default_profile_pic.jpg";

const UserAside = ({profileImageUrl, username}) => (
    <aside className="d-none d-md-block col-sm-2">
        <div className="card">
            <img src={profileImageUrl || DefaultProfileImg} alt={username} className="card-img-top" />
            <div className="card-body card-username justify-content-center d-flex align-items-center">
                {/* Erster buchstabe vom Username wird groß geschrieben */}
                <h5>{username.charAt(0).toUpperCase() + username.slice(1)}</h5>
            </div>
        </div>
    </aside>
);

export default UserAside;

