import React, {Component, Redirect} from 'react';
import axios from 'axios';
import Input from './Input';

class Form extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            logged: false,
            error: null
        }

        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    };

    async handleChange(event){
        await this.setState(event)
        await this.props.handleUpdate(this.state);
    };

    // handleSubmit(event){
    //     console.log("FORM STATE", this.state)
    //     this.props.handleSubmit(this.state);
    // }

    render(){
 
        return(
                <table>
                    {
                        this.props.data.map(row => {
                            // console.log(row)
                            // return row
                            return(
                                <Input data={row} handleChange={this.handleChange}></Input>
                            )
                        })
                    }
                    {
                        (this.props.submit != null) ? <Input data={this.props.submit} handleChange={this.handleChange}></Input> :
                        <input type="submit" value="Enviar" handleChange={this.handleChange} />
                    }
                </table>
        )
    }
}

export default Form