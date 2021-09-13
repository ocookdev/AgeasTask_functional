import React from 'react';
import MemberUtil from '../MemberUtil.js';

export default class MemberStatusBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <div className="MemberStatusBox">
            <p>{MemberUtil.getName(this.props.member)}</p>
        </div>;
    }
}