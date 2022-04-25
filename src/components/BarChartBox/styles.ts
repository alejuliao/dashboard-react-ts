import styled from 'styled-components'
interface ILegendProps {
  color: string
}
export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 48%;
  height: 260px;

  margin: 10px 0;

  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.white};

  border-radius: 7px;
`
export const SideLeft = styled.aside`
  /* width: 40%; */
  padding: 30px 20px;
  > h2 {
    margin-bottom: 10px;
    padding-left: 16px;
  }
`
export const SideRight = styled.main`
  height: 150px;
  flex: 1;

  display: flex;
  justify-content: center;

  padding-top: 35px;
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
  flex-direction: column;
  align-items: center;
  margin-bottom: 7px;
  padding-left: 16px;
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
