import { Grid } from './styles'
import { MainHeader } from '../MainHeader'
import { Aside } from '../Aside'
import { Content } from '../Content'
export const Layout = ({ children }: any) => (
  <Grid>
    <MainHeader />
    <Aside />
    <Content>
      {children}
    </Content>
  </Grid>
)