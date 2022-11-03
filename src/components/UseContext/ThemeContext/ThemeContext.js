import React, { useState, createContext } from "react";

const ThemeContext = createContext()

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("dark");

    const handleChangeTheme = () => {
        if (theme === 'dark') {
            setTheme('light');
        }
        else {
            setTheme('dark')
        }
    }

    const context = {
        theme,
        handleChangeTheme
    }
    return (
        <ThemeContext.Provider value={context} >
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider }

// createContext, useContext
// Trường hợp sử dụng:
// truyền dữ liệu từ Component cha về các component thấp hơn. Ví dụ: CompA => CompB => CompC
// Tình huống: muốn truyền dữ liệu từ CompA đến CompC thì phải qua CompB. Mặc dù CompB ko cần đển props đó
// Giải quyết: sủ dụng createContext để tạo ra 1 context. Trong context có 2 component là Provider và Consumber.
// Provider để truyền đi value đến tất cả các component con
// Ở Component con sẽ sủ dụng useContext và tham chiếu đến context được tạo ra ở createContext để lấy được value.