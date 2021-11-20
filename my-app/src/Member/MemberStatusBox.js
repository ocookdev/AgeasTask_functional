import React from "react";
import MemberUtil from "../MemberUtil.js";
import MemberStatusIcon from "./MemberStatusIcon.js";

const statusNameMap = {
  active: "Online",
  away: "Away",
  inactive: "Offline"
};

const MemberStatusBox = (props) => {
  return (
    <div className="MemberStatusBox">
      <MemberStatusIcon status={props.member.status} />
      <div className="statusBoxContent">
        <div className="statusBoxName">{MemberUtil.getName(props.member)}</div>
        <div className="statusBoxStatus">{statusNameMap[props.member.status]}</div>
      </div>
    </div>
  );
};

export default MemberStatusBox;