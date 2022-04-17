import { Layout } from "./components/Layout";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import dark from "./styles/theme/dark";
import light from "./styles/theme/light";

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  )
}