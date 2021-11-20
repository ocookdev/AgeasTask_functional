const statusDescriptionMap = {
  active: "Online",
  away: "Away",
  inactive: "Offline",
};

export default class Member {
  constructor(memberDef) {
    this.title = memberDef.title;
    this.firstName = memberDef.firstName;
    this.lastName = memberDef.lastName;
    this.email = memberDef.email;
    this.dateOfBirth = new Date(memberDef.dateOfBirth);
    this.status = memberDef.status;
  }

  getName() {
    return `${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const millisecondDifference = Date.now() - this.dateOfBirth.getTime();
    const ageDateObject = new Date(millisecondDifference);
    return Math.abs(ageDateObject.getUTCFullYear() - 1970);
  }

  isUnder18() {
    if (this.calculateAge() < 18) {
      return true;
    } else {
      return false;
    }
  }

  getStatusDescription() {
    return statusDescriptionMap[this.status];
  }

  isOnline() {
    return this.status === "active";
  }

  isAway() {
    return this.status === "away";
  }

  isOffline() {
    return this.status === "inactive";
  }
}
