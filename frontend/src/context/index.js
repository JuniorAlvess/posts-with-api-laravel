import React from 'react'
import { LoginContextProvider } from './AuthContext';

const GlobalContext = ({ children }) => {
    return <LoginContextProvider>{children}</LoginContextProvider>
}

export default GlobalContext;