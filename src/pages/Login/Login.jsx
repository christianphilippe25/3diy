import React, {Component, Redirect} from 'react';
import './Login.css';
import Form from '../../components/Form/Form';
import axios from 'axios';
import formData from './formData.json';

const submit = {
    type: 'submit',
    name: 'Login'
}

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            logged: false,
            error: null
        }
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleUpdate(event){
        console.log("LOGIN CHANGE EVENT", event)
        this.setState(event);
    };

    handleSubmit(event){
        event.preventDefault();
        // console.log(this.state);
        axios.post("/api/authenticate", this.state)
        .then((res) => {
            // console.log("enviado")
            console.log("res", res);
            if(res.data !== '' && res.data !== null){
                const token = Math.random().toString(36).substring(2);
                const email = res.data.email
                const name = res.data.name
                
                localStorage.setItem('email', email)
                localStorage.setItem('name', name)
                localStorage.setItem('token', token)
                document.location.reload(true)
                return res
            }else{
                this.setState({error: "Login ou Senha Incorretos"})
            }
        })
        .catch(err => {
            console.log(err)
        });
    };

    render(){
        return(
            <div className="container">
                <h2 className='center'>Meu Espaço</h2>
                <p colSpan={2} className="center">{this.state.error != null ? this.state.error : null}</p>
                <div className="Login">
                    <div className="Form">
                        <form method='post' onSubmit={this.handleSubmit}>
                            <Form data={formData} submit={submit} handleUpdate={this.handleUpdate}></Form>
                        </form>
                        <a href="/registrar">Registrar-se</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login