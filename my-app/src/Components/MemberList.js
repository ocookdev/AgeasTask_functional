import React from 'react';
import SelectBox from '../SelectBox.js';
import MemberUtil from '../MemberUtil.js';
import MemberStatusBox from './MemberStatusBox.js';

// Status's 
const STATUS_ALL = 0;
const STATUS_ONLINE = 1;
const STATUS_AWAY = 2;
const STATUS_OFFLINE = 3;

const STATUS_OPTIONS = [
    {value: STATUS_ALL, text: 'All'},
    {value: STATUS_ONLINE, text: 'Online'},
    {value: STATUS_AWAY, text: 'Away'},
    {value: STATUS_OFFLINE, text: 'Offline'}
];

// Ordering
const ORDER_AZ = 0;
const ORDER_ZA = 1;

const ORDER_OPTIONS = [
    {value: ORDER_AZ, text: 'A-Z'},
    {value: ORDER_ZA, text: 'Z-A'}
];

export default class MemberList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userStatus: STATUS_ALL,
            order: ORDER_AZ
        };
    }

    render() {
        // Get out list of members without any under 18's
        let members = MemberUtil.removeUnder18s(this.props.members)
        // Sort the members
        this.orderMembers(members);
        // Filter the members
        let filteredMembers = this.filterMembers(members);
        let statusBoxes = filteredMembers.map((member) => {
            return <MemberStatusBox key={member.id} member={member}/>
        });
        return <div className="MemberList">
            <h1>Members List</h1>
            <div className='filters'>
                <SelectBox label='Status' selectOptions={STATUS_OPTIONS} selected={this.state.userStatus} fnCallback={(value) => { this.setState({userStatus: parseInt(value)})}} />
                <SelectBox label='Order By' selectOptions={ORDER_OPTIONS} selected={this.state.order} fnCallback={(value) => { this.setState({order: parseInt(value)})}} />
            </div>
            <div className='StatusBoxes'>
                {statusBoxes}
            </div>
        </div>;
    }

    orderMembers(members) {
        members.sort((a, b) => {
            let result = a.firstName.localeCompare(b.firstName);
            
            if(this.state.order === ORDER_ZA) {
                // Invert result when sorting Z to A
                result = result * -1;
            }
            return result;
        });
    }

    filterMembers(members) {
        switch(this.state.userStatus) {
            case STATUS_ONLINE:
                return MemberUtil.getOnlineMembers(members);
            case STATUS_AWAY:
                return MemberUtil.getAwayMembers(members);
            case STATUS_OFFLINE:
                return MemberUtil.getOfflineMembers(members);
            default:
                return members;
        }
    }
}