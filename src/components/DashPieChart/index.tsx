import { Container, LegendContainer, SideLeft, SideRight, LegendStyle } from "./styles"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'

export function DashPieChart() {
  return (

    <Container>
      <SideLeft>
        <h2>
          Relação
        </h2>
        <LegendContainer>
          <LegendStyle color="#f44">
            <div>90%</div>
            <span>Saidas</span>
          </LegendStyle>
          <LegendStyle color="#aF7317">
            <div>10%</div>
            <span>Entradas</span>
          </LegendStyle>
          <LegendStyle color="#f44">
            <div>90%</div>
            <span>Saidas</span>
          </LegendStyle>
          <LegendStyle color="#aF7317">
            <div>10%</div>
            <span>Entradas</span>
          </LegendStyle>
          <LegendStyle color="#f44">
            <div>90%</div>
            <span>Saidas</span>
          </LegendStyle>
          <LegendStyle color="#aF7317">
            <div>10%</div>
            <span>Entradas</span>
          </LegendStyle>
          <LegendStyle color="#f44">
            <div>90%</div>
            <span>Saidas</span>
          </LegendStyle>
          <LegendStyle color="#aF7317">
            <div>10%</div>
            <span>Entradas</span>
          </LegendStyle>
        </LegendContainer>
      </SideLeft>
      <SideRight>
        {/* <ResponsiveContainer>
        <PieChart>
        <Pie
        data={[{ amount: 30, percent: 90 }]}
        labelLine={false}
        dataKey='percent'
        />
        </PieChart>
      </ResponsiveContainer> */}
      </SideRight>
    </Container>

  )
}