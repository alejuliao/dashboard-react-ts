import styled from 'styled-components'
export const Container = styled.div`
  grid-area: AS;
  background: ${props=>props.theme.colors.secondary};
  color: ${props=>props.theme.colors.white};
  border-right:1px solid ${props =>props.theme.colors.gray} ;
  
  display: flex;
  flex-direction:column ;
  align-items:center ;
  `
  export const Header = styled.header`
  height: 70px;
  display:flex;
  align-items:center;
  `
  export const Logo = styled.img`
  margin:0 10px ;
    width:40px ;
    height:40px ;
  `
  export const Title = styled.h3`
  color:${props => props.theme.colors.white};
  /* padding:10px; */
  `
  export const MenuContainer = styled.nav`
  display: flex;
  flex-direction:column ;
  margin:50px 0 0 0 ;

  `
  export const MenuItemLink = styled.a`
  display: flex;
  align-items: center;
  margin:7px 0  ;

  color:${props => props.theme.colors.white};
  text-decoration:none;
  transition: opacity .3s ;
  &:hover{
    opacity: .7;
    }
    >svg{
      font-size: 20px;
      margin-right: 7px;
    }
  `