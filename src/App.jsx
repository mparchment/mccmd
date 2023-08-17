import { useLocation, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useContext, useEffect, useState } from 'react';

import NotFound from './pages/NotFound.jsx'
import About from './pages/About.jsx'
import Home from "./pages/Home"
import ContactUs from "./pages/ContactUs"
import Education from "./pages/Education"
import GetInvolved from "./pages/GetInvolved.jsx"
import Community from "./pages/Community"
import Services from './pages/Services.jsx';
import Donate from './pages/Donate.jsx';

import MenuProvider from "./contexts/MenuProvider"
import MenuContext from './contexts/MenuContext.jsx';
import TimesProvider from './contexts/TimesProvider.jsx';
import TimesContext from './contexts/TimesContext.jsx';

import GlobalStyle from "./globalStyles"
import Header from "./components/Header"
import Footer from "./components/Footer"
import styled from "styled-components";

import Loading from './components/Loading.jsx';

const PageWrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

function AppContent() {
  const { menuOpen } = useContext(MenuContext);
  const { isLoading } = useContext(TimesContext);
  const { pathname } = useLocation();

  const [showLoading, setShowLoading] = useState(true);
  
  useEffect(() => {
    if (!isLoading) {
        const timer = setTimeout(() => {
            setShowLoading(false);
        }, 750);

        return () => clearTimeout(timer);
    }
  }, [isLoading]);


  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);

  return (
      <PageWrapper>
          {showLoading && <Loading/>}
          <Header/>
          {!menuOpen && <Routes>
                <Route path="/mccmd/" element={<Home />} />
                <Route path="/mccmd/about-us" element={<About />} />
                <Route path="/mccmd/community" element={<Community />} />
                <Route path="/mccmd/contact-us" element={<ContactUs />} />
                <Route path="/mccmd/education" element={<Education />} />
                <Route path="/mccmd/get-involved" element={<GetInvolved />} />
                {/*<Route path="/mccmd/services" element={<Services />} />*/}
                <Route path="/mccmd/services/shahadas" element={<Services />} />
                <Route path="/mccmd/services/imam" element={<Services />} />
                <Route path="/mccmd/services/clinic" element={<Services />} />
                <Route path="/mccmd/services/nikahs" element={<Services />} />
                <Route path="/mccmd/services/janazahs" element={<Services />} />
                <Route path="/mccmd/services/zakat" element={<Services />} />
                <Route path="/mccmd/services/food-pantry" element={<Services />} />
                <Route path="/mccmd/services/refugee-aid" element={<Services />} />
                <Route path="/mccmd/services/general-events" element={<Services />} />
                <Route path="/mccmd/donate" element={<Donate />} />
                <Route path="*" element={<NotFound />} />
            </Routes>}
            <Footer/>
        </PageWrapper>
    );
}


function App() {
  return (
    <Router>
      <GlobalStyle/>
      <HelmetProvider>
        <TimesProvider>
          <MenuProvider>
            <AppContent/>
          </MenuProvider>
        </TimesProvider>
      </HelmetProvider>
    </Router>
  )
}

export default App
