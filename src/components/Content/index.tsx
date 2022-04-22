import { Container } from './styles'
export const Content: React.FC = ({ children }: any) => {
  return (
    <Container>
      {children}
    </Container>
  )
}