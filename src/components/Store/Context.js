import { createContext } from 'react';

const storeContext = createContext({
    token: localStorage.getItem('name'),
    setToken: () => {},
    name: localStorage.getItem('name'),
    email: localStorage.getItem('email')
});

export default storeContext;