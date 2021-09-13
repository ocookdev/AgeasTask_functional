import React from 'react';
import SelectBox from '../SelectBox.js';
import MemberUtil from '../MemberUtil.js';
import MemberStatusBox from './MemberStatusBox.js';

const STATUS_OPTIONS = [
    {value: 0, text: 'All'},
    {value: 1, text: 'Online'},
    {value: 2, text: 'Away'},
    {value: 3, text: 'Offline'}
];

const ORDER_OPTIONS = [
    {value: 0, text: 'A-Z'},
    {value: 1, text: 'Z-A'}
];

export default class MemberList extends React.Component {
    constructor(props) {
        super(props);
        this.filteredMembers = MemberUtil.removeUnder18s(props.members);
        this.state = {};
    }

    render() {
        let statusBoxes = this.filteredMembers.map((member) => {
            return <MemberStatusBox key={member.id} member={member}/>
        });
        return <div className="MemberList">
            <h1>Members List</h1>
            <SelectBox selectOptions={STATUS_OPTIONS} />
            <SelectBox selectOptions={ORDER_OPTIONS} />
            {statusBoxes}
        </div>;
    }
}