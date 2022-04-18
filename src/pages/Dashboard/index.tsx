import React from 'react'
import { ContentHeader } from '../../components/ContentHeader'
import { SelectInput } from '../../components/SelectInput'
import { Container } from './styles'
export const Dashboard: React.FC = () => {
  const nomes = [
    { value: 'Ale', label: 'Ale' },
    { value: 'ana', label: 'ana' },
    { value: 'rosana', label: 'rosana' },
  ]
  const numeros = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
  ]
  return (
    <Container>
      <ContentHeader title='Dashboard' lineColor='#f1bc4b'>
        <SelectInput options={nomes} />
      </ContentHeader>
    </Container>
  )
}
// export function Dashboard() {
//   return (
//     <h1>Dashboard</h1>
//   )
// }