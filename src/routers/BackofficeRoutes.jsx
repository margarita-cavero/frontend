import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Auth } from "../components/auth/Auth";
import { DashboardRoutes } from "./DashboardRoutes";


export const BackofficeRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/admin' element={<Auth />}/>
            <Route path='*' element={<DashboardRoutes />}/>
        </Routes>
    </Router>
  )
}
