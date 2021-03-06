import styled from 'styled-components'

export const Container = styled.div`
  width: 48%;
  height: 260px;

  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.white};

  margin: 10px 0;
  padding: 30px 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > header img {
    width: 35px;
  }
  > header p {
    font-size: 18px;
  }
  @media (max-width: 770px) {
    > header h1 {
      img {
        height: 20px;
        width: 20px;
      }
    }
    > header padding,
    footer span {
      font-size: 14px;
    }
  }
  @media (max-width: 420px) {
    width: 100%;
    height: auto;

    > header p {
      margin-bottom: 15px;
    }
  }
`
