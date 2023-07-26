import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NotFound from './pages/NotFound.jsx'
import About from './pages/About.jsx'

import GlobalStyle from "./globalStyles"

import Home from "./pages/Home"
import ContactUs from "./pages/ContactUs"
import Education from "./pages/Education"
import GetConnected from "./pages/GetConnected"
import Login from "./pages/Login"

import Volunteering from "./pages/Volunteering"
import Community from "./pages/Community"

import PrayerTimes from "./components/PrayerTimes"
import Header from "./components/Header"
import Footer from "./components/Footer";
import styled from "styled-components";

const PageWrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

import { HeaderContext } from "./contexts/HeaderContext"
import { useState } from "react"

function App() {

  const [headerHeight, setHeaderHeight] = useState(0);

  return (
    <Router>
      <GlobalStyle/>
      <HeaderContext.Provider value={{ headerHeight, setHeaderHeight }}>
        <PageWrapper>
          <PrayerTimes/>
          <Header/>
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
        </PageWrapper>
      </HeaderContext.Provider>
    </Router>
  )
}

export default App
