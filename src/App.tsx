import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Dashboard";
import { List } from "./pages/List";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import dark from "./styles/theme/dark";
import light from "./styles/theme/light";

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout>
        <List />
      </Layout>
    </ThemeProvider>
  )
}