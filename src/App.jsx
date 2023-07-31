import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Pages from './pages/Pages.jsx';
import MenuProvider from "./contexts/MenuProvider"

import GlobalStyle from "./globalStyles"
import PrayerTimes from "./components/PrayerTimes"
import Header from "./components/Header"
import styled from "styled-components";

const PageWrapper = styled.div`
  height: 100vh;
  width: 100vw;

  // REMOVE WHEN DESKTOP-COMPATIBLE
  max-width: 414px;
  margin: 0 auto;
`;

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <HelmetProvider>
          <MenuProvider>
            <PageWrapper>
              <PrayerTimes/>
              <Header/>
              <Pages/>
            </PageWrapper>
          </MenuProvider>
      </HelmetProvider>
    </Router>
  )
}

export default App
