import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import { Navbar } from "../components/navbar/Navbar";
import { Contact } from "../components/contact/Contact";
import { Demos } from "../components/demos/Demos";
import { Home } from "../components/home/Home";
import { Works } from "../components/works/Works";
import { Footer } from "../components/footer/Footer";
import { Error404 } from "../components/error404/Error404";
import { ScrollToTop } from "../components/ScrollToTop";



export const DashboardRoutes = () => {
    return (
        <Router>
            <ScrollToTop>
                <Navbar />
                <div className="container">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='demos' element={<Demos />} />
                        <Route path='trabajos' element={<Works />} />
                        <Route path='contacto' element={<Contact />} />
                        <Route path='*' element={<Error404 />} />
                    </Routes>
                </div>
                <Footer />
            </ScrollToTop>
        </Router>
    )
}
