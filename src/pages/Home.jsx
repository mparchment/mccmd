import EventCard from "../components/EventCard";
import ServiceCard from "../components/ServiceCard";
import styled from 'styled-components';
import MCCFrontSmall from '../assets/mcc-front-small.png';
import Placeholder1 from '../assets/placeholder-1.jpg';
import Placeholder2 from '../assets/placeholder-2.jpg';
import Placeholder3 from '../assets/placeholder-3.jpg';
import { Link as PageLink } from 'react-router-dom';

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

const Link = styled(PageLink)`
    color: #333;
    font-weight: 600;
    text-decoration: underline;
`;

function Home() {
    return (
        <>
            <MainImage src={MCCFrontSmall} alt="MCC Front" style={{width: '100%'}}/>
            <EventsWrapper>
                <div><WrapperTitle>Events</WrapperTitle></div>
                <Divider/>
                <EventCard
                    imgSrc={Placeholder2}
                    title="Book Launch: Guides to Goodness"
                    text="Join Shaykh Muhammad al-Yaqoubi for a recitation of Dala'il al-Khayrat with his new translation, 'Guides to Goodness'."
                    time="6:30 PM - 8:00 PM"
                    location="Muslim Community Center"
                    date="July 22nd 2023"
                />
                <EventCard
                    imgSrc={Placeholder1}
                    title="Balance: Realigning Our Core"
                    text="Join Shaykh Walead Mohammed Mosaad as he teaches us how to master the art of balance by realgining our core."
                    time="6:30 PM - 8:30 PM"
                    location="Muslim Community Center"
                    date="July 24th 2023"
                />
                <EventCard
                    imgSrc={Placeholder3}
                    title="Hadith Study Circle"
                    text="Join us for in-person Saturday evenings for short study sessions on Hadith with Imam Muhammad Abdullahi."
                    time="After Asr"
                    location="Muslim Community Center"
                    date="Wednesdays"
                />
            </EventsWrapper>
            <ServicesWrapper>
                <div><WrapperTitle>Services</WrapperTitle></div>
                <Divider/>
                <ServiceCard subtitle="Shahadas">
                    Whether you are just interested in Islam, have some questions, or are ready to convert, we are happy to speak to you and guide you through the Shahada. Learn more and book <Link to="#">here</Link>.
                </ServiceCard>
                <ServiceCard subtitle="Meet the Imam">
                    Book a meeting up to two weeks in advance with the Imam to discuss one of a range of topics. Learn more <Link to="#">here</Link>.
                </ServiceCard>
                <ServiceCard subtitle="Clinic">
                    To book rooms for other events or Islamic celebrations, from aqiqas and private gatherings to conferences, we offer rooms at reasonable rates of hire. Book <Link to="#">here</Link>.
                </ServiceCard>
                <ServiceCard subtitle="Nikahs">
                    Offering a unique & stunning yet economical & eco-friendly venue, getting married at Muslim Community Center is the experience of a lifetime. Find out more <Link to="#">here</Link>.
                </ServiceCard>
                <ServiceCard subtitle="Janazas">
                    We ease the burden of bereavement by facilitating preparation of the deceased for burial through use of our dedicated mortuary and leading Janazah prayers. Make arrangements <Link to="#">here</Link>.
                </ServiceCard>
                <ServiceCard subtitle="Zakat">
                    To book rooms for other events or Islamic celebrations, from aqiqas and private gatherings to conferences, we offer rooms at reasonable rates of hire. Book <Link to="#">here</Link>.
                </ServiceCard>
                <ServiceCard subtitle="Food Pantry">
                    Book to join us on weekend mornings for a guided walk through our mosque, or on weekdays if you are part of an organisation such as a school or a local community group. Book <Link to="#">here</Link>.
                </ServiceCard>
                <ServiceCard subtitle="Refugee Aid">
                    Book to join us on weekend mornings for a guided walk through our mosque, or on weekdays if you are part of an organisation such as a school or a local community group. Book <Link to="#">here</Link>.
                </ServiceCard>
                <ServiceCard subtitle="General Events">
                    To book rooms for other events or Islamic celebrations, from aqiqas and private gatherings to conferences, we offer rooms at reasonable rates of hire. Book <Link to="#">here</Link>.
                </ServiceCard>
                <ServiceCard subtitle="Guided Tours">
                    Book to join us on weekend mornings for a guided walk through our mosque, or on weekdays if you are part of an organisation such as a school or a local community group. Book <Link to="#">here</Link>.
                </ServiceCard>
            </ServicesWrapper>
        </>
    )
}

export default Home;
