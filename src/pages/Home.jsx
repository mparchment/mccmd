import PrayerTimes from "../components/PrayerTimes"
import Header from "../components/Header"
import Footer from "../components/Footer"
import styled from 'styled-components';
import MCCFrontSmall from '../assets/mcc-front-small.png';
import Placeholder1 from '../assets/placeholder-1.jpg';
import Placeholder2 from '../assets/placeholder-2.jpg';
import Placeholder3 from '../assets/placeholder-3.jpg';

const ServicesWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const WrapperTitle = styled.h2`
    font-weight: 600;
    text-transform: uppercase;
    font-size: 175%;
    color: #333;
    font-family: Lora, serif;
`;

const Divider = styled.div`
    width: 12.5%;
    height: 3px;
    background-color: #b98474;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 35px;
`;

const ServiceCard = styled.div`
    width: 72.5%;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
    margin-bottom: 50px;
    padding: 25px 30px;
    border: 1px solid #ddd;
    box-shadow: 0 1px 9px #ddd;
    font-size: 14px;
    font-weight: 500;
`;

const ServiceCardSubtitle = styled.h3`
    text-transform: uppercase;
`;

const MainImage = styled.img`
    width: 100vw;
    object-fit: cover;
`;

const EventsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const EventCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: 80%;
    margin-bottom: 30px;
`;

const EventCardSubtitle = styled.h3`
    text-transform: uppercase;
    margin-bottom: 25px;
    font-weight: 600;
    color: #333;
    margin-bottom: 8px;
`;

const EventCardText = styled.span`
    font-size: 14px;
    font-weight: 500;
    text-align: center;
`;

const EventDetails = styled.p`
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 0;
`;

function Home() {
    return (
        <>
            <PrayerTimes/>
            <Header/>
            <MainImage src={MCCFrontSmall} alt="MCC Front" style={{width: '100%'}}/>
            <EventsWrapper>
                <div><WrapperTitle>Events</WrapperTitle></div>
                <Divider/>
                <EventCard>
                    <img src={Placeholder2} alt="Shahadas" style={{width: '100%'}}/>
                    <EventCardSubtitle>Book Launch: Guides to Goodness</EventCardSubtitle>
                    <EventCardText>Join Shaykh Muhammad al-Yaqoubi for a recitation of Dala'il al-Khayrat with his new translation, 'Guides to Goodness'.</EventCardText>
                    <EventDetails>6:30 PM - 8:00 PM</EventDetails>
                    <EventDetails>Muslim Community Center</EventDetails>
                    <EventDetails>July 22nd 2023</EventDetails>
                </EventCard>
                <EventCard>
                    <img src={Placeholder1} alt="Shahadas" style={{width: '100%'}}/>
                    <EventCardSubtitle>Balance: Realigning Our Core</EventCardSubtitle>
                    <EventCardText>Join Shaykh Walead Mohammed Mosaad as he teaches us how to master the art of balance by realgining our core.</EventCardText>
                    <EventDetails>6:30 PM - 8:30 PM</EventDetails>
                    <EventDetails>Muslim Community Center</EventDetails>
                    <EventDetails>July 24th 2023</EventDetails>
                </EventCard>
                <EventCard>
                    <img src={Placeholder3} alt="Shahadas" style={{width: '100%'}}/>
                    <EventCardSubtitle>Hadith Study Circle</EventCardSubtitle>
                    <EventCardText>Join us for in-person Saturday evenings for short study sessions on Hadith with Imam Muhammad Abdullahi.</EventCardText>
                    <EventDetails>After Asr</EventDetails>
                    <EventDetails>Muslim Community Center</EventDetails>
                    <EventDetails>Wednesdays</EventDetails>
                </EventCard>
            </EventsWrapper>
            <ServicesWrapper>
                <div><WrapperTitle>Services</WrapperTitle></div>
                <Divider/>
                <ServiceCard>
                    <ServiceCardSubtitle>Shahadas</ServiceCardSubtitle>
                    Whether you are just interested in Islam, have some questions, or are ready to convert, we are happy to speak to you and guide you through the Shahada. Learn more and book here.
                </ServiceCard>
                <ServiceCard>
                    <ServiceCardSubtitle>Guided Tours</ServiceCardSubtitle>
                    Book to join us on weekend mornings for a guided walk through our mosque, or on weekdays if you are part of an organisation such as a school or a local community group.
                </ServiceCard>
                <ServiceCard>
                    <ServiceCardSubtitle>Nikahs</ServiceCardSubtitle>
                    Offering a unique & stunning yet economical & eco-friendly venue, getting married at Muslim Community Center is the experience of a lifetime. Find out more here.
                </ServiceCard>
                <ServiceCard>
                    <ServiceCardSubtitle>Janazas</ServiceCardSubtitle>
                    We ease the burden of bereavement by facilitating preparation of the deceased for burial through use of our dedicated mortuary and leading Janazah prayers. Make arrangements here.
                </ServiceCard>
                <ServiceCard>
                    <ServiceCardSubtitle>Meet the Imam</ServiceCardSubtitle>
                    Book a meeting up to two weeks in advance with the Imam to discuss one of a range of topics. Learn more here.
                </ServiceCard>
                <ServiceCard>
                    <ServiceCardSubtitle>General Events</ServiceCardSubtitle>
                    To book rooms for other events or Islamic celebrations, from aqiqas and private gatherings to conferences, we offer rooms at reasonable rates of hire. Book here.
                </ServiceCard>
            </ServicesWrapper>
            <Footer/>
        </>
    )
}

export default Home