import React from 'react';
import Context from './Context';
// import useStorage from '../../utils/useStorage';

const storeProvider = ({ children }) => {

    // const [token, setToken] = useStorage('token');
    const userStorage = localStorage.getItem('token')
    // console.log("userStorage", userStorage)
    const [token, setToken] = (userStorage != null) ?  userStorage : [null, null];

    return (
        <Context.Provider
        value = {{
            token,
            setToken
        }}>
            {children}
        </Context.Provider>
    )
}

export default storeProvider;