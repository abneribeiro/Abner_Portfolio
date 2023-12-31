import { React, createContext, useContext, useState } from "react";

const DarkModeContext = createContext()

export const ContextProvider = ({ children }) => {
    const [ isDarkMode, setIsDarkMode ] = useState(false)

    return (
        <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
            { children }
        </DarkModeContext.Provider>
    )
}

export const useDarkModeContext = () => useContext(DarkModeContext)