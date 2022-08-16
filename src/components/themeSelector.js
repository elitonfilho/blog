import * as React from "react"
import Toggle from "react-toggle"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import "react-toggle/style.css"

const ThemeSelector = () => (
    <ThemeToggler>
        {({theme, toggleTheme}) => (
        <Toggle
        defaultChecked={theme === 'dark'}
        onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}/>
        )}
    </ThemeToggler>
)

export default ThemeSelector
