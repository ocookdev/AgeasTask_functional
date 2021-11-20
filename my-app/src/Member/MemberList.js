import React, { useState } from "react";
import SelectBox from "../UI/SelectBox.js";
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
  const [memberStatusFilter, setMemberStatusFilter] = useState(STATUS_ALL);
  const [memberOrder, setMemberOrder] = useState(ORDER_AZ);

  const filterMembers = (members) => {
    const filteredMembers = [];
    members.forEach((member) => {
      // Remove all under 18's
      if (member.isUnder18()) return;

      let hasCorrectStatus = false;
      switch (memberStatusFilter) {
        case STATUS_ONLINE:
          hasCorrectStatus = member.isOnline();
          break;
        case STATUS_AWAY:
          hasCorrectStatus = member.isAway();
          break;
        case STATUS_OFFLINE:
          hasCorrectStatus = member.isOffline();
          break;
        default:
          // No filter applied
          hasCorrectStatus = true;
      }

      if (!hasCorrectStatus) return;
      
      filteredMembers.push(member);
    });

    return filteredMembers;
  };

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

  // Filter the members
  const filteredMembers = filterMembers(props.members);

  // Sort the members
  orderMembers(filteredMembers);

  // Make a status box for each member
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
          selected={memberStatusFilter}
          fnCallback={(value) => {
            setMemberStatusFilter(parseInt(value));
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
