import EventCard from "../components/EventCard";
import ServiceCard from "../components/ServiceCard";
import styled from 'styled-components';
import MCCFrontSmall from '../assets/mcc-front-small.png';
import MCCFront from '../assets/mcc-front.jpg';
import Placeholder1 from '../assets/placeholder-1.jpg';
import Placeholder2 from '../assets/placeholder-2.jpg';
import Placeholder3 from '../assets/placeholder-3.jpg';
import { Link as PageLink } from 'react-router-dom';

import useIsMobile from '../hooks/useIsMobile';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';

const ServicesBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 25px;
    }
`;

const ServicesWrapper = styled.div`
    @media (min-width: 768px) {
        width: 70%;
        margin: 0 auto;
        margin-bottom: 30px;
    }
`;

const EventTitle = styled.h2`
    font-weight: 600;
    text-transform: uppercase;
    font-size: 175%;
    color: #333;
    user-select: none;
`;

const Divider = styled.div`
    width: 12.5%;
    height: 3px;
    background-color: #b98474;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 35px;
    margin: 0 auto;
`;

const MainImage = styled.img`
    width: 100vw;
    filter: brightness(70%);
`;

const EventsWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    gap: 50px;

    @media (min-width: 768px) {
        width: 60%;
        flex-direction: row;
    }

    @media (max-width: 768px) {
        align-items: center;
    }
`;

const Link = styled(PageLink)`
    color: #333;
    font-weight: 600;
    text-decoration: underline;
`;

const TitleWrapper = styled.div`
    text-align: center;
    margin-bottom: 35px;
`;

const IntroductionWrapper = styled.div`
    width: 63%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin: 0 auto;
    gap: 30px;
`;

const IntroductionCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 25px 50px;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    gap: 10px;
`;

const IntroductionSubtitle = styled.h3`
    text-transform: uppercase;
    font-weight: 700;
    color: #333;
    margin-bottom: 8px;
`;

const ReadMoreLink = styled(Link)`
    color: inherit;
    text-decoration: none;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 14px;
    border-bottom: 2px solid #b98474;

    &:hover {
        color: #b98474;
        
        transition: all 0.2s ease-in-out;
    }
`;

const ReadMoreWrapper = styled.div`
    margin-top: 8px;
`;

const ImageContainer = styled.div`
    position: relative;
    text-align: center;
    color: white;
`;

const images = [MCCFrontSmall, MCCFrontSmall, MCCFrontSmall, MCCFrontSmall];
const desktopImages = [MCCFront];
const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

function Home() {

    const isMobile = useIsMobile();

    return (<>
        <>  
            {isMobile && <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`slide${index}`} style={{ width: '100%' }} />
                    </div>
                ))}
            </Slider>}
            {!isMobile && <ImageContainer>
                <MainImage src={desktopImages[0]} alt=""/>
            </ImageContainer>}
            {!isMobile && <IntroductionWrapper>
                <IntroductionCard>
                    <IntroductionSubtitle>Our Story</IntroductionSubtitle>
                    <div>Inspired by both Islamic and English religious architectural traditions, our design develops the idea of a British mosque for the 21st century.</div>
                    <ReadMoreWrapper><SubdirectoryArrowRightIcon style={{ fontSize: "100%", marginRight: "5px"}}/><ReadMoreLink to="/mccmd/about-us/">Read More</ReadMoreLink></ReadMoreWrapper>
                </IntroductionCard>
                <IntroductionCard>
                    <IntroductionSubtitle>Plan Your Visit</IntroductionSubtitle>
                    <div>We're within walking distance of Cambridge train station, buses stop right outside & our underground car park has ample space to secure cycles.</div>
                    <ReadMoreWrapper><SubdirectoryArrowRightIcon style={{ fontSize: "100%", marginRight: "5px"}}/><ReadMoreLink to="/mccmd/donate/">Read More</ReadMoreLink></ReadMoreWrapper>
                </IntroductionCard>
                <IntroductionCard>
                    <IntroductionSubtitle>Support Our Masjid</IntroductionSubtitle>
                    <div>Thanks to your generous donations, we are able to host worshippers, offer community services & distribute food to those that need it most.</div>
                    <ReadMoreWrapper><SubdirectoryArrowRightIcon style={{ fontSize: "100%", marginRight: "5px"}}/><ReadMoreLink to="/mccmd/donate/">Read More</ReadMoreLink></ReadMoreWrapper>
                </IntroductionCard>
            </IntroductionWrapper>}
            <TitleWrapper><EventTitle>Events</EventTitle><Divider/></TitleWrapper>
            <EventsWrapper>
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
                    time="Maghrib to Isha"
                    location="Muslim Community Center"
                    date="Wednesdays"
                />
            </EventsWrapper>
            <TitleWrapper><EventTitle>Services</EventTitle><Divider/></TitleWrapper>
            <ServicesWrapper>
                <ServicesBox>
                    <ServiceCard subtitle="Shahadas" to="/mccmd/shahadas">
                        Whether you are just interested in Islam, have some questions, or are ready to convert, we are happy to speak to you and guide you through the Shahada. 
                    </ServiceCard>
                    <ServiceCard subtitle="Meet the Imam" to="/mccmd/imam">
                        Book a meeting up to two weeks in advance with the Imam to discuss one of a range of topics. 
                    </ServiceCard>
                    <ServiceCard subtitle="Clinic" to="/mccmd/clinic">
                        To book rooms for other events or Islamic celebrations, from aqiqas and private gatherings to conferences, we offer rooms at reasonable rates of hire.
                    </ServiceCard>
                    <ServiceCard subtitle="Nikahs" to="/mccmd/nikahs">
                        Offering a unique & stunning yet economical & eco-friendly venue, getting married at Muslim Community Center is the experience of a lifetime. 
                    </ServiceCard>
                    <ServiceCard subtitle="Janazas" to="/mccmd/janazahs">
                        We ease the burden of bereavement by facilitating preparation of the deceased for burial through use of our dedicated mortuary and leading Janazah prayers. 
                    </ServiceCard>
                    <ServiceCard subtitle="Zakat" to="/mccmd/zakat">
                        To book rooms for other events or Islamic celebrations, from aqiqas and private gatherings to conferences, we offer rooms at reasonable rates of hire.
                    </ServiceCard>
                    <ServiceCard subtitle="Food Pantry" to="/mccmd/food-pantry">
                        Book to join us on weekend mornings for a guided walk through our mosque, or on weekdays if you are part of an organisation such as a school or a local community group.
                    </ServiceCard>
                    <ServiceCard subtitle="Refugee Aid" to="/mccmd/refugee-aid">
                        Book to join us on weekend mornings for a guided walk through our mosque, or on weekdays if you are part of an organisation such as a school or a local community group.
                    </ServiceCard>
                    <ServiceCard subtitle="General Events" to="/mccmd/general-events">
                        To book rooms for other events or Islamic celebrations, from aqiqas and private gatherings to conferences, we offer rooms at reasonable rates of hire.
                    </ServiceCard>
                </ServicesBox>
            </ServicesWrapper>
        </>
        </>
    )
}

export default Home;
