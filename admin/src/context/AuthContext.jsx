import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
    admin: null,
    setAdmin: () => {}
})

export const AuthContextProvider = ({ children }) => {
    const [admin, _setAdmin] = useState(JSON.parse(localStorage.getItem('adminAuth')))

    const setAdmin = (value) => {
        _setAdmin(value)
        localStorage.setItem('adminAuth', JSON.stringify(value))
    }

    return (
        <AuthContext.Provider
            value={{admin, setAdmin}}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)

