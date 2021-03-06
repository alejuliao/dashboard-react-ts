import { Container } from './styles'


interface IMessageBoxProps {
  title: string;
  description: string;
  footerText: string;
  icon: string;
}
export const MessageBox = ({ title, description, footerText, icon }: IMessageBoxProps) => (
  <Container>
    <header>
      <h1>{title} <img src={icon} alt={title} /> </h1>
      <p>
        {description}
      </p>
    </header>
    <footer>
      <span>{footerText}</span>
    </footer>
  </Container>
)
