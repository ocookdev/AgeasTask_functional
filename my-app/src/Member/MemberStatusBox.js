import React from "react";
import MemberStatusIcon from "./MemberStatusIcon.js";

const MemberStatusBox = (props) => {
  return (
    <div className="MemberStatusBox">
      <MemberStatusIcon status={props.member.status} />
      <div className="statusBoxContent">
        <div className="statusBoxName">{props.member.getName()}</div>
        <div className="statusBoxStatus">{props.member.getStatusDescription()}</div>
      </div>
    </div>
  );
};

export default MemberStatusBox;