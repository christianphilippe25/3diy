import './Login.css';
import React, {Component} from 'react';
import axios from 'axios';

class Login extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        let obj = {};
        let param = event.target.name;
        let value = event.target.value;
        obj[param] = value;
        this.setState(obj);
        console.log(this.state);
    };

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state);
        axios.post("http://127.0.0.1:3002/api/authenticate", this.state)
        .then((res) => {
            console.log("enviado")
            console.log("res", res);
            return res
        })
        .catch(err => {
            console.log(err)
        });
    };

    render () {
        return (
            <div className="Login">
                <form method="post" onSubmit={this.handleSubmit}>
                    <table>
                        <tr>
                            <td>
                                <label htmlFor="username">Usuário/email: </label>
                            </td>
                            <td>
                                <input type="text" name="username" id="username" value={this.state.username} onChange={this.handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="password">Senha: </label>
                            </td>
                            <td>
                                <input type="password" name="password" id="password" value={this.state.password} onChange={this.handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="submit" name="Login" id="Login" />
                            </td>
                            <td>
                                <a href="/registrar">Registrar</a>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        )
    }
}

export default Login;