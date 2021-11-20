import React, { useState } from "react";
import SelectBox from "../UI/SelectBox.js";
import MemberUtil from "../MemberUtil.js";
import MemberStatusBox from "./MemberStatusBox.js";

// Status's
const STATUS_ALL = 0;
const STATUS_ONLINE = 1;
const STATUS_AWAY = 2;
const STATUS_OFFLINE = 3;

const STATUS_OPTIONS = [
  { value: STATUS_ALL, text: "All" },
  { value: STATUS_ONLINE, text: "Online" },
  { value: STATUS_AWAY, text: "Away" },
  { value: STATUS_OFFLINE, text: "Offline" },
];

// Ordering
const ORDER_AZ = 0;
const ORDER_ZA = 1;

const ORDER_OPTIONS = [
  { value: ORDER_AZ, text: "A-Z" },
  { value: ORDER_ZA, text: "Z-A" },
];

const MemberList = (props) => {
  const [memberStatus, setMemberStatus] = useState(STATUS_ALL);
  const [memberOrder, setMemberOrder] = useState(ORDER_AZ);

  const orderMembers = (members) => {
    members.sort((a, b) => {
      let result = a.firstName.localeCompare(b.firstName);

      if (memberOrder === ORDER_ZA) {
        // Invert result when sorting Z to A
        result = result * -1;
      }
      return result;
    });
  };

  const filterMembers = (members) => {
    switch (memberStatus) {
      case STATUS_ONLINE:
        return MemberUtil.getOnlineMembers(members);
      case STATUS_AWAY:
        return MemberUtil.getAwayMembers(members);
      case STATUS_OFFLINE:
        return MemberUtil.getOfflineMembers(members);
      default:
        return members;
    }
  };

  // Get our list of members without any under 18's
  const members = MemberUtil.removeUnder18s(props.members);
  // Sort the members
  orderMembers(members);
  // Filter the members
  const filteredMembers = filterMembers(members);
  const statusBoxes = filteredMembers.map((member) => {
    return <MemberStatusBox key={member.id} member={member} />;
  });
  return (
    <div className="MemberList">
      <h1>Members List</h1>
      <div className="filters">
        <SelectBox
          label="Status"
          selectOptions={STATUS_OPTIONS}
          selected={memberStatus}
          fnCallback={(value) => {
            setMemberStatus(parseInt(value));
          }}
        />
        <SelectBox
          label="Order By"
          selectOptions={ORDER_OPTIONS}
          selected={memberOrder}
          fnCallback={(value) => {
            setMemberOrder(parseInt(value));
          }}
        />
      </div>
      <div className="StatusBoxes">{statusBoxes}</div>
    </div>
  );
};

export default MemberList;
