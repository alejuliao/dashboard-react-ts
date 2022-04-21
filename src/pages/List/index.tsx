import React, { useMemo, useState, useEffect } from 'react'
import { ContentHeader } from '../../components/ContentHeader'
import { SelectInput } from '../../components/SelectInput'
import { HistoryFinanceCard } from '../../components/HistoryFinanceCard'
import { Container, Content } from './styles'
import { matchRoutes, useParams } from 'react-router-dom'
import gains from '../../repositories/gains'
import expenses from '../../repositories/expenses'
import { formatCurrency } from '../../utils/formatCurrency'
import { formatDate } from '../../utils/formatDate'
interface IRouteParams {
  // matchRoutes: {

  params: {
    type: string;
  }
  // }
}
interface IData {
  id: string;
  description: string;
  amountFormatted: string;
  frequency: string;
  dateFormatted: string;
  tagColor: string;
}
export const List: React.FC<IRouteParams> = () => {
  const [data, setData] = useState<IData[]>([])
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
  const listData = useMemo(() => {
    return type === 'entry-balance' ? gains : expenses;
  }, [type])
  useEffect(() => {
    const response = listData.map(item => {
      return {
        Id: String(Math.random() * data.length),
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dateFormatted: formatDate(item.date),
        tagColor: item.frequency === 'recorrente' ? '#4e41f0' : '#e44'
      }
    })
    setData(response)
  }, []);
  return (
    <Container>
      <ContentHeader title={titles.title} lineColor={titles.lineColor}>
        <SelectInput options={months} />
      </ContentHeader>

      <Content>
        {data.map(item => (

          <HistoryFinanceCard
            key={item.id}
            tagColor={item.tagColor}
            title={item.description}
            subtitle={item.dateFormatted}
            amount={item.amountFormatted}
          />
        ))
        }


      </Content>
    </Container>
  )
}
// export function List() {
//   return (
//     <h1>Dashboard</h1>
//   )
// }