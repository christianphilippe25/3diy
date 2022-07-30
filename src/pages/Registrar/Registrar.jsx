import './Registrar.css';
import React, { Suspense, lazy, Component } from 'react';
import axios from 'axios';

class Registrar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username: '',
            name: '',
            surname: '',
            password: '',
            phone: '',
            email: '',
            emailConfirmation: '',
            success: false
        };
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
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state);
        axios.post("http://127.0.0.1:3002/api/create/users", this.state)
        .then((res) => {
            console.log("enviado")
            console.log("res", res);
            let obj = this.state;
            obj.success= true
            this.setState(obj);
            console.log("obj", obj)
            return res
        })
        .catch(err => {
            console.log(err)
        });
    }

    render() {
        let success = (this.state.success) ? 'block' : 'hidden';
        return (
            <div className="container">
                <h2 className='center'>Registrar</h2>
                <div className="Registrar">
                    <form onSubmit={this.handleSubmit} className={(success) ? 'block' : 'hidden'} method="post">
                        <table>
                            <tr>
                                <td>
                                    <label htmlFor="username">Usuário:</label>
                                </td>
                                <td>
                                    <input type="text" name="username" id="username" value={this.state.username} onChange={this.handleChange} required/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="name">Nome:</label>
                                </td>
                                <td>
                                    <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} required/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="surname">Sobrenome:</label>
                                </td>
                                <td>
                                    <input type="text" name="surname" id="surname" value={this.state.surname} onChange={this.handleChange} required/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="email">Email:</label>
                                </td>
                                <td>
                                    <input type="email" name="email" id="email" value={this.state.email} onChange={this.handleChange} required/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="phone">phone:</label>
                                </td>
                                <td>
                                    <input type="text" name="phone" id="phone" value={this.state.phone} onChange={this.handleChange} required/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="emailemailConfirmation">Confirmar Email:</label>
                                </td>
                                <td>
                                    <input type="email" name="emailConfirmation" id="emailConfirmation" value={this.state.emailConfirmation} onChange={this.handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="password">Senha:</label>
                                </td>
                                <td>
                                    <input type="password" name="password" id="password" value={this.state.password} onChange={this.handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="submit" value="Registrar" />
                                </td>
                            </tr>
                        </table>
                    </form>
                    <div className="center">
                        <div className={success}>
                            <h2>Cadastro realizado</h2>
                            <a href="/login"><p>Fazer Login</p></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Registrar