import { Container, Profile, Welcome, UserName } from './styles'
export const MainHeader: React.FC = () => {
  return (
    <Container>
      <h1>Toogle</h1>

      <Profile>
        <Welcome> Olá, </Welcome>
        <UserName>Alexandre Julião</UserName>
      </Profile>
    </Container>
  )
}