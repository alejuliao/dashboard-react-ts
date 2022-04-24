import { Container, LegendContainer, SideLeft, SideRight, LegendStyle } from "./styles"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'
interface IPieChartProps {
  data: {
    name: string;
    value: number;
    percent: number;
    color: string;
  }[]
}
export const PieChartBox = ({ data }: IPieChartProps) => {
  return (

    <Container>
      <SideLeft>
        <h2>
          Relação
        </h2>
        <LegendContainer>
          {
            data.map((indicator) => (

              <LegendStyle key={indicator.name} color={indicator.color}>
                <div>{indicator.percent}</div>
                <span>{indicator.name}</span>
              </LegendStyle>
            ))
          }


        </LegendContainer>
      </SideLeft>

      <SideRight>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              // labelLine={false}
              dataKey='percent'
            >
              {
                data.map((indicator) => (
                  <Cell key={indicator.name} fill={indicator.color} />
                ))
              }
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </SideRight>
    </Container>

  )
}