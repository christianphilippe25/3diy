import React, {Component, Redirect} from 'react';

class Input extends Component {

    constructor(props){
        super(props);

        this.state = {}

        this.handleChange = this.handleChange.bind(this);

        if (props.data.name == null){
            throw Error;
        }
};
    
    async handleChange(event){
        let param = event.target.name;
        let value = event.target.value;
        if(event.target.files != null){
            console.log("file", event.target.files[0])
            value = event.target.files[0]
        }
        let obj = {}
        obj[param] = value
        await this.props.handleChange(obj);
    };
    
    render(){
    const label = (data) => {
        if(data == 'submit'){
            return("")
        }
        else{
            const labelValue = (this.props.data.label == null) ? this.props.data.name : this.props.data.label
            return (
                <td>
                    <label htmlFor={this.props.data.name}>{labelValue.charAt(0).toUpperCase() + labelValue.slice(1)}:</label>
                </td>
            )
        }
    }

    const input = (this.props.data.type == 'select') ?
        <select name={this.props.data.name} onChange={this.handleChange}>
            {this.props.data.values.map(a => {
                return(
                    <option value={a.value}>{a.label}</option>
                )
            })}
        </select> : 
        <input type={this.props.data.type} name={this.props.data.name} value={this.state[this.props.data.name]} id={this.props.data.name} onChange={this.handleChange} />


        return(
            <tr>
                {label(this.props.data.type)}
                <td>
                    {input}
                </td>
            </tr>
        )
    }
}

export default Input;