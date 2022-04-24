import styled from 'styled-components'

interface ILegendProps {
  color: string
}
export const Container = styled.div`
  display: flex;
  width: 48%;
  height: 260px;

  margin: 10px 0;

  background-color: ${props => props.theme.colors.secondary};
`
export const SideLeft = styled.aside`
  max-width: 170px;
  padding: 30px 20px;
  > h2 {
    margin-bottom: 20px;
  }
`
export const LegendContainer = styled.ul`
  height: 175px;
  padding-right: 15px;
  list-style: none;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.tertiary};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${props => props.theme.colors.secondary};
  }
`
export const LegendStyle = styled.li<ILegendProps>`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  margin-bottom: 7px;
  > div {
    background-color: ${props => props.color};

    width: 40px;
    height: 40px;
    border-radius: 5px;

    font-size: 14px;
    line-height: 40px;
    text-align: center;
  }
  > span {
    margin-left: 5px;
  }
`
export const SideRight = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;
`
