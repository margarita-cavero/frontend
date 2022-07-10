import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import { Navbar } from "../components/navbar/Navbar";
import { Contact } from "../components/contact/Contact";
import { Demos } from "../components/demos/Demos";
import { Home } from "../components/home/Home";
import { Works } from "../components/works/Works";



export const DashboardRoutes = () => {
    return (
        <Router>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='demos' element={<Demos />} />
                    <Route path='trabajos' element={<Works />} />
                    <Route path='contacto' element={<Contact />} />
                </Routes>
            </div>
        </Router>
    )
}
