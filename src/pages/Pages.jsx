import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NotFound from './NotFound.jsx'
import About from './About.jsx'

import Home from "./Home"
import ContactUs from "./ContactUs"
import Education from "./Education"
import GetInvolved from "./GetInvolved.jsx"
import Login from "./Login"
import Footer from "../components/Footer"
import Community from "./Community"

import MenuContext from '../contexts/MenuContext.jsx';
import { useContext } from 'react';

function Pages() {
    const { menuOpen } = useContext(MenuContext);

    return (
        <>
            {!menuOpen && 
            <>
                <Routes>
                    <Route path="/mccmd/" element={<Home />} />
                    <Route path="/mccmd/about-us" element={<About />} />
                    <Route path="/mccmd/community" element={<Community />} />
                    <Route path="/mccmd/contact-us" element={<ContactUs />} />
                    <Route path="/mccmd/education" element={<Education />} />
                    <Route path="/mccmd/get-involved" element={<GetInvolved />} />
                    <Route path="/mccmd/login" element={<Login />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer/>
            </>
            }
        </>
  )
}

export default Pages
