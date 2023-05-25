import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({
    user: null,
    setUser: () => {}
})

export const AuthContextProvider = ({ children }) => {
    const [user, _setUser] = useState(JSON.parse(localStorage.getItem('verification')))

    const setUser = (value) => {
        _setUser(value)
        localStorage.setItem('verification', JSON.stringify(value))
    }

    return (
        <AuthContext.Provider
            value={{user, setUser}}
        >
            {children}
        </AuthContext.Provider>
    )
}