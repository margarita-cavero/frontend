import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import { Auth } from "../components/auth/Auth";


export const BackofficeRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='admin' element={<Auth />} />
        </Routes>
    </Router>
  )
}
