import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Pages from './pages/Pages.jsx';
import MenuProvider from "./contexts/MenuProvider"

import GlobalStyle from "./globalStyles"
import PrayerTimes from "./components/PrayerTimes"
import Header from "./components/Header"
import styled from "styled-components";
import TimesProvider from './contexts/TimesProvider.jsx';

const PageWrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <HelmetProvider>
          <TimesProvider>
          <MenuProvider>
            <PageWrapper>
              <Header/>
              <Pages/>
            </PageWrapper>
          </MenuProvider>
          </TimesProvider>
      </HelmetProvider>
    </Router>
  )
}

export default App
