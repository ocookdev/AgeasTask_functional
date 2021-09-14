import React from 'react';
import MemberUtil from '../MemberUtil.js';

const statusNameMap = {
    active: 'Online',
    away: 'Away',
    inactive: 'Offline'
};

export default class MemberStatusBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <div className="MemberStatusBox">
            {this.getStatusIcon()}
            <div className='statusBoxContent'>
                <div className='statusBoxName'>{MemberUtil.getName(this.props.member)}</div>
                <div className='statusBoxStatus'>{statusNameMap[this.props.member.status]}</div>
            </div>
        </div>;
    }

    getStatusIcon() {
        let classNames = 'statusBoxIcon';
        switch(this.props.member.status) {
            case 'active':
                classNames += ' statusBoxIcon--active';
                break;
            case 'away':
                classNames += ' statusBoxIcon--away';
                break;
            case 'inactive':
                classNames += ' statusBoxIcon--inactive';
                break;
        }
        return <span className={classNames}></span>;
    }
}