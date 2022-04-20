import React, { useMemo } from 'react'
import { ContentHeader } from '../../components/ContentHeader'
import { SelectInput } from '../../components/SelectInput'
import { HistoryFinanceCard } from '../../components/HistoryFinanceCard'
import { Container, Content } from './styles'
import { matchRoutes, useParams } from 'react-router-dom'

interface IRouteParams {
  // matchRoutes: {

  params: {
    type: string;
  }
  // }
}
export const List: React.FC<IRouteParams> = () => {
  const { type } = useParams()
  console.log(type)
  const titles = useMemo(() => {
    return type === 'entry-balance' ? { title: 'Entradas', lineColor: '#f7931b' } : { title: 'Saídas', lineColor: '#e44' }
  }, [type]);

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
      <ContentHeader title={titles.title} lineColor={titles.lineColor}>
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