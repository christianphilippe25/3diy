import './Registrar.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import Form from '../../components/Form/Form';
import formData from './formData.json';

const submit = {
    type: 'submit',
    name: 'Login'
}

function Registrar (){
    let navigate = useNavigate();
    let [state, setState] = useState({
        username: '',
        name: '',
        surname: '',
        password: '',
        phone: '',
        email: '',
        emailConfirmation: '',
        success: false
    });

    function handleChange(event){
        let obj = {};
        let param = event.target.name;
        let value = event.target.value;
        obj[param] = value;
        setState(obj);
        console.log(state);
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(state);
        axios.post("http://127.0.0.1:3002/api/create/users", state)
        .then((res) => {
            return navigate('/login', {replace: true});
        })
        .catch(err => {
            console.log(err)
        });
    }

    return (
        <div className="container">
            <h2 className='center'>Registrar</h2>
            <div className="Registrar">
                <form onSubmit={handleSubmit} method="post">
                    <Form data={formData} submit={submit} handleUpdate={handleChange}></Form>
                </form>
            </div>
        </div>
    )
}

export default Registrar