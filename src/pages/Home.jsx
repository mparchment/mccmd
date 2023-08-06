import EventCard from "../components/EventCard";
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
    filter: brightness(80%);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
`;

const EventsWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    gap: 50px;

    @media (min-width:1366px) {
        width: 60%;
        flex-direction: row;
    }

    @media (max-width:1366px) {
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

const ImageWrapper = styled.div`
    position: relative;
    width: 100vw;
`;

const OverlayContent = styled.div`
  position: absolute;
  top: 46%;
  left: 47%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: left;
`;

const OverlayTitle = styled.h1`
  font-size: 2em;
  text-align: left;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, .5);
  text-transform: uppercase;
`;

const OverlayText = styled.p`
  margin-bottom: 2em;
  font-size: 1.1em;
  text-align: left;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, .5);
`;

const OverlayButton = styled(Link)`
    padding: 1em 1.33em;
    font-size: 14px;
    color: #531f19;
    font-weight: 600;
    background-color: #fff;
    border: none;
    text-decoration: none;
    text-transform: uppercase;
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

    return (
        <>  
            {isMobile && <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`slide${index}`} style={{ width: '100%' }} />
                    </div>
                ))}
            </Slider>}
            {!isMobile && (
                <ImageWrapper>
                    <MainImage src={desktopImages[0]} alt=""/>
                    <OverlayContent>
                    <OverlayTitle>Summer 2023 at Muslim Community Center</OverlayTitle>
                    <OverlayText>Summer at Muslim Community Center is loaded with programs for the entire family! We know that there are many of you who are eager to taste the sweetness of Islamic knowledge but do not have the opportunity to do so on a full-time basis. That's why we strive to provide a variety of courses that fit your schedule.
                    </OverlayText>
                    <OverlayButton>Read More</OverlayButton>
                    </OverlayContent>
                </ImageWrapper>
            )}
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
        </>
    )
}

export default Home;
