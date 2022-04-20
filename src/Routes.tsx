import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Dashboard";
import { List } from "./pages/List";

export function AppRoutes() {
  return (
    <Layout>

      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/list/:type" element={<List />} />
        </Routes>
      </Router>
    </Layout>
  )
}