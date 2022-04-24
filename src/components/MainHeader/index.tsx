import { useState } from 'react'
import { useTheme } from '../../hooks/theme'
import { Toggle } from '../Toggle'
import { Container, Profile, Welcome, UserName } from './styles'


export const MainHeader: React.FC = () => {
  const { toggleTheme, theme } = useTheme()
  const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false)
  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  }

  return (
    <Container>
      <Toggle
        labelLeft='Light'
        labelRight='dark'
        checked={darkTheme}
        onChange={handleChangeTheme}

      />

      <Profile>
        <Welcome> Olá, </Welcome>
        <UserName>Alexandre Julião</UserName>
      </Profile>
    </Container>
  )
}