import { Container, Header, Logo, MenuContainer, MenuItemLink, Title } from './styles'
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from 'react-icons/md';

import LogoImg from '../../assets/logo.svg'
export const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo src={LogoImg} alt="Logo do site" />
        <Title>
          Titulo Dashboard
        </Title>
      </Header>
      <MenuContainer>
        <MenuItemLink href="">
          <MdDashboard />
          Dashboard
        </MenuItemLink>
        <MenuItemLink href="">
          <MdArrowUpward />
          Entrada
        </MenuItemLink>
        <MenuItemLink href="">
          <MdArrowDownward />
          Saída
        </MenuItemLink>
        <MenuItemLink href="">
          <MdExitToApp />
          Sair
        </MenuItemLink>
      </MenuContainer>
    </Container>
  )
}