class MemberUtilX {
    removeUnder18s(members) {
        const calculateAge = (dateOfBirth) => {
            let millisecondDifference = Date.now() - dateOfBirth.getTime();
            let ageDateObject = new Date(millisecondDifference);
            return Math.abs(ageDateObject.getUTCFullYear() - 1970);
        };
        let filteredMembers = [];
        members.forEach((member) => {
            if(calculateAge(member.dateOfBirth) >= 18) {
                filteredMembers.push(member);
            }
        });
        return filteredMembers;
    }

    getName(member) {
        return `${member.firstName} ${member.lastName}`;
    }
}

const MemberUtil = new MemberUtilX();
export default MemberUtil;