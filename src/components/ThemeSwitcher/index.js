import React from 'react';

const ThemeSwitcher =({toggleTheme})=>{ 
    return (
    <button onClick={toggleTheme}>Alterar tema</button>
)
}

export default ThemeSwitcher