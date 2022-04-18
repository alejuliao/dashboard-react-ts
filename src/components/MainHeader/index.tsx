import { Toggle } from '../Toggle'
import { Container, Profile, Welcome, UserName } from './styles'
export const MainHeader: React.FC = () => {
  return (
    <Container>
      <Toggle />

      <Profile>
        <Welcome> Olá, </Welcome>
        <UserName>Alexandre Julião</UserName>
      </Profile>
    </Container>
  )
}