import React from "react";
import DefaultProfileImg from "../images/default_profile_pic.jpg";

const UserAside = ({profileImageUrl, username}) => (
    <aside className="col-sm-2">
        <div className="panel panel-default">
            <div className="panel-body">
                <img src={profileImageUrl || DefaultProfileImg} alt={username} className="img-thumbnail" />
            </div>
        </div>

    </aside>
);

export default UserAside;

