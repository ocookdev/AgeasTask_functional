import React from 'react';

export default class SelectBox extends React.Component {
    constructor(props) {
        super(props);
        let defaultValue = props.default;
        if(!defaultValue) {
            // No default value defined, use the value from the first select option
            defaultValue = props.selectOptions[0].value;
        }
        this.state = {value: defaultValue};

        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <label>
                {this.props.label}
                <select value={this.state.value} onChange={this.handleChange}>
                    {this.getSelectOptions()}
                </select>
            </label>
        );
    }

    getSelectOptions() {
        return this.props.selectOptions.map((option) => {
            return <option key={option.value} value={option.value}>{option.text}</option>;
        });
    }
}