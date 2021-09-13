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

    getOnlineMembers(members) {
        let filteredMembers = [];
        members.forEach((member) => {
            if(member.status == 'active') {
                filteredMembers.push(member);
            }
        });
        return filteredMembers;
    }

    getAwayMembers(members) {
        let filteredMembers = [];
        members.forEach((member) => {
            if(member.status == 'away') {
                filteredMembers.push(member);
            }
        });
        return filteredMembers;
    }

    getOfflineMembers(members) {
        let filteredMembers = [];
        members.forEach((member) => {
            if(member.status == 'inactive') {
                filteredMembers.push(member);
            }
        });
        return filteredMembers;
    }
}

const MemberUtil = new MemberUtilX();
export default MemberUtil;