import React from 'react';

export default class SelectBox extends React.Component {
    constructor(props) {
        super(props);
        let selected = props.selected;
        if(!selected) {
            // No default value defined, use the value from the first select option
            selected = props.selectOptions[0].value;
        }
        this.state = {value: selected};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.props.fnCallback(event.target.value);
    }

    render() {
        return (
            <div className='selectBox'>
                <label>
                    {this.props.label}
                    <select value={this.state.value} onChange={this.handleChange}>
                        {this.getSelectOptions()}
                    </select>
                </label>
            </div>
        );
    }

    getSelectOptions() {
        return this.props.selectOptions.map((option) => {
            return <option key={option.value} value={option.value}>{option.text}</option>;
        });
    }
}