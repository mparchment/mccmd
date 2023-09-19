import { useContext, useEffect, useState } from 'react';
import { useLocation, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import styled from 'styled-components';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Committees from './pages/Committees.jsx';
import Community from './pages/Community';
import ContactUs from './pages/ContactUs';
import Converts from './pages/services/Converts.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Donate from './pages/Donate.jsx';
import Education from './pages/Education';
import Footer from './components/Footer';
import GetInvolved from './pages/GetInvolved.jsx';
import Zakat from './pages/services/Zakat.jsx';
import Janazas from './pages/services/Janazas.jsx';
import Marriage from './pages/services/Marriage.jsx';
import Imam from './pages/services/Imam.jsx';
import FoodPantry from './pages/services/FoodPantry.jsx';
import RefugeeAid from './pages/services/RefugeeAid.jsx';
import GeneralPrograms from './pages/services/GeneralPrograms.jsx';
import CreateAccount from './pages/CreateAccount.jsx';
import Account from './pages/Account.jsx';
import OurStory from './pages/OurStory.jsx';

import GlobalStyle from './globalStyles';
import Header from './components/Header';
import Loading from './components/Loading.jsx';
import Login from './pages/Login.jsx';
import NotFound from './pages/NotFound.jsx';
import Services from './pages/Services.jsx';
import TimesContext from './contexts/TimesContext.jsx';
import TimesProvider from './contexts/TimesProvider.jsx';
import MenuContext from './contexts/MenuContext.jsx';
import MenuProvider from './contexts/MenuProvider';
import AuthProvider from './contexts/AuthProvider';
import PostsContext from './contexts/PostsContext.jsx';
import { PageBackground } from './components/PageBackground.jsx';
import PostDetail from './components/PostDetail.jsx';

import useIsMobile from './hooks/useIsMobile';
import PostsProvider from './contexts/PostsProvider.jsx';
import { WhiteBackground } from './components/WhiteBackground.jsx';

const PageWrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

function AppContent() {
  const { menuOpen } = useContext(MenuContext);
  const { isLoading } = useContext(TimesContext);
  const { isPostsLoading } = useContext(PostsContext);
  const { pathname } = useLocation();
  const [showLoading, setShowLoading] = useState(true);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (!isLoading & !isPostsLoading) {
      setShowLoading(false)
    }
  }, [isLoading, isPostsLoading]);


  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);

  return (
      <PageWrapper>
          {showLoading ? <Loading/> : <>
          {!isMobile && <WhiteBackground/>}
          <Header/>
          {!menuOpen && <Routes>
                <Route path="/mccmd/" element={<Home />} />
                <Route path="/mccmd/about-us" element={<About />} />
                <Route path="/mccmd/our-story" element={<OurStory />} />
                <Route path="/mccmd/community" element={<Community />} />
                <Route path="/mccmd/contact-us" element={<ContactUs />} />
                <Route path="/mccmd/education" element={<Education />} />
                <Route path="/mccmd/get-involved" element={<GetInvolved />} />
                <Route path="/mccmd/committees" element={<Committees />} />
                <Route path="/mccmd/donate" element={<Donate />} />
                <Route path="/mccmd/login" element={<Login />} />
                <Route path="/mccmd/account" element={<Account />} />
                <Route path="/mccmd/dashboard" element={<Dashboard />} />
                <Route path="/mccmd/convert-care" element={<Converts />} />
                <Route path="/mccmd/food-pantry" element={<FoodPantry />} />
                <Route path="/mccmd/general-programs" element={<GeneralPrograms />} />
                <Route path="/mccmd/imams-corner" element={<Imam />} />
                <Route path="/mccmd/janazas" element={<Janazas />} />
                <Route path="/mccmd/marriage" element={<Marriage />} />
                <Route path="/mccmd/refugee-aid" element={<RefugeeAid />} />
                <Route path="/mccmd/dashboard" element={<Dashboard />} />
                <Route path="/mccmd/zakat" element={<Zakat />} />
                <Route path="/mccmd/:slug" element={<PostDetail />} />
                <Route path="*" element={<NotFound />} />
            </Routes>}
            <Footer/></>}
        </PageWrapper>
    );
}


function App() {
  return (
    <Router>
      <GlobalStyle/>
      <HelmetProvider>
        <AuthProvider>
        <PostsProvider>
        <TimesProvider>
          <MenuProvider>
            <AppContent/>
          </MenuProvider>
        </TimesProvider>
        </PostsProvider>
        </AuthProvider>
      </HelmetProvider>
    </Router>
  )
}

export default App
