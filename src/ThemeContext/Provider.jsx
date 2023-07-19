import { createContext, useState } from "react";

const ThemeContext = createContext();

function Provider({ children }) {
    const [theme, setTheme] = useState('dark')
    const handleChangeTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    return (
        <ThemeContext.Provider value={{theme, handleChangeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext };
export default Provider;