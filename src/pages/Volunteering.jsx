import PrayerTimes from "../components/PrayerTimes"
import Header from "../components/Header"
import styled from 'styled-components';

import Placeholder from '../assets/placeholder-image.png';

import Footer from "../components/Footer";

const VolunteeringWrapper = styled.div`
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

const Subtitle = styled.h3`
    font-weight: 800;
    color: #333;
    text-transform: uppercase;
`;

const Card = styled.div`
    width: 80%;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
    margin-bottom: 35px;
    padding: 25px 30px;
    border: 1px solid #ddd;
    box-shadow: 0 1px 9px #ddd;
    font-size: 14px;
    font-weight: 500;
`;

const Image = styled.img`
    width: 97%;
    margin-bottom: 35px;
`;

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Divider = styled.div`
    width: 12.5%;
    height: 3px;
    background-color: #b98474;
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 30px;
`;

const Link = styled.a`
    color: inherit;
    font-weight: 600;
`;

function Volunteering() {
    return (
        <>
            <PrayerTimes/>
            <Header/>
            
            <VolunteeringWrapper>
                <div>
                    <Title>Volunteering</Title>
                    <p>
                        Over the past three decades, we have relied upon unrelenting support of the Muslim community. We are always looking for dedicated volunteers to continue to offer several programs and services. 
                    </p>
                    <p>
                        If you have some time and would like to help, please fill out <Link href="">this</Link> form and we will get back to you as soon as possible.
                    </p>
                </div>
            </VolunteeringWrapper>

            <Footer/>
        </>
    )
}

export default Volunteering