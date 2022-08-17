import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import { Navbar } from "../components/navbar/Navbar";
import { Contact } from "../components/contact/Contact";
import { Demos } from "../components/demos/Demos";
import { Home } from "../components/home/Home";
import { AllWorks } from "../components/works/AllWorks";
import { Footer } from "../components/footer/Footer";
import { Error404 } from "../components/error404/Error404";
import { ScrollToTop } from "../components/ScrollToTop";
import { Auth } from "../components/auth/Auth";
import { WorksScreen } from "../components/worksScreen/WorksScreen";
// import { BackofficeRoutes } from "./BackofficeRoutes";



export const DashboardRoutes = () => {
    return (
        <Router>
            <ScrollToTop>
                <Navbar />
                <div className="container">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='demos' element={<Demos />} />
                        <Route path='trabajos' element={<AllWorks />} />
                        <Route path='trabajos/:trabajosId' element={<WorksScreen />} />
                        <Route path='contacto' element={<Contact />} />
                        {/* <Route path='admin' element={<BackofficeRoutes />} /> */}
                        <Route path='*' element={<Error404 />} />
                    </Routes>
                </div>
                <Footer />
            </ScrollToTop>
        </Router>
    )
}
