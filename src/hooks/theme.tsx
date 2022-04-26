import { createContext, useContext, useState } from 'react';
import dark from '../styles/theme/dark'
import light from '../styles/theme/light'

interface IThemeContext {
  toggleTheme(): void;
  theme: ITheme;
}

interface ITheme {
  title: string,
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;

    white: string;
    black: string;
    gray: string;

    success: string;
    info: string;
    warning: string;
  },
}
const ThemeContext = createContext<IThemeContext>({} as IThemeContext)

const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<ITheme>(() => {
    const themeSaved = localStorage.getItem('@minha-carteira:theme');
    if (themeSaved) {
      return JSON.parse(themeSaved)
    } else {
      return dark
    }
  })
  const toggleTheme = () => {
    if (theme.title === 'dark') {
      console.log('lig')
      setTheme(light)
      localStorage.setItem('@minha-carteira:theme', JSON.stringify(light))
    } else {
      console.log('dark')
      localStorage.setItem('@minha-carteira:theme', JSON.stringify(dark))
      setTheme(dark)
    }
  }
  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  )
}

function useTheme(): IThemeContext {
  const context = useContext(ThemeContext)

  return context
}

export { ThemeProvider, useTheme }