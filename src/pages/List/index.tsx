import React from 'react'
import { ContentHeader } from '../../components/ContentHeader'
import { SelectInput } from '../../components/SelectInput'
import { HistoryFinanceCard } from '../../components/HistoryFinanceCard'
import { Container, Content } from './styles'


export const List: React.FC = () => {

  const months = [
    { value: 10, label: 'Outubro' },
    { value: 11, label: 'Novembro' },
    { value: 12, label: 'Dezembro' },
  ]
  const years = [
    { value: 2019, label: 2019 },
    { value: 2020, label: 2020 },
    { value: 2021, label: 2021 },
  ]
  return (
    <Container>
      <ContentHeader title='Entradas' lineColor='#f1bc4b'>
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>

      <Content>
        <HistoryFinanceCard tagColor='#e44' title='Conta de Luz' subtitle='20/02/2022' amount='R$ 120,00' />

      </Content>
    </Container>
  )
}
// export function List() {
//   return (
//     <h1>Dashboard</h1>
//   )
// }