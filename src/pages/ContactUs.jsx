import PrayerTimes from "../components/PrayerTimes"
import Header from "../components/Header"
import styled from 'styled-components';

import Footer from "../components/Footer"

const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px;
    padding-top: 0;
`;

const Title = styled.h2`
    font-weight: 800;
    font-size: 200%;
    color: #333;
`;

function About() {
    return (
        <>
            <PrayerTimes/>
            <Header/>
            <AboutWrapper>
                <Title>Contact Us</Title>
            </AboutWrapper>
            <Footer/>
        </>
    )
}

export default About