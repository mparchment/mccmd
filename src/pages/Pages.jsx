import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NotFound from './NotFound.jsx'
import About from './About.jsx'

import Home from "./Home"
import ContactUs from "./ContactUs"
import Education from "./Education"
import GetConnected from "./GetConnected"
import Login from "./Login"
import Footer from "../components/Footer"

import Volunteering from "./Volunteering"
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
                    <Route path="/mccmd" element={<Home />} />
                    <Route path="/mccmd/about" element={<About />} />
                    <Route path="/mccmd/community" element={<Community />} />
                    <Route path="/mccmd/contactus" element={<ContactUs />} />
                    <Route path="/mccmd/education" element={<Education />} />
                    <Route path="/mccmd/getconnected" element={<GetConnected />} />
                    <Route path="/mccmd/login" element={<Login />} />
                    <Route path="/mccmd/volunteering" element={<Volunteering />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer/>
            </>
            }
        </>
  )
}

export default Pages
