import { Container } from './styles'
export const Content: React.FC = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <Container>
      {children}
    </Container>
  )
}