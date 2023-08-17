import ProgramCard from "../components/ProgramCard";
import styled from 'styled-components';
import MCCFrontSmall from '../assets/mcc-front-small.png';
import MCCFront from '../assets/mcc-front.jpg';
import Bonfire from '../assets/bonfire.jpg';
import Tech from '../assets/tech.jpg';
import Books from '../assets/books.jpg';

import Placeholder1 from '../assets/placeholder-1.jpg';
import Placeholder2 from '../assets/placeholder-2.jpg';
import Placeholder3 from '../assets/placeholder-3.jpg';
import Placeholder4 from '../assets/placeholder-4.jpeg';
import { Link as PageLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

import useIsMobile from '../hooks/useIsMobile';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import ServiceCard from "../components/ServiceCard";

const ProgramTitle = styled.h2`
    font-weight: 600;
    text-transform: uppercase;
    font-size: 175%;
    color: inherit;
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
    height: 555px;
    object-fit: cover;
    filter: brightness(70%);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
`;

const ProgramsWrapper = styled.div`
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
    display: flex;
    overflow: hidden;  // to hide images that are outside of this container
    position: relative;
    width: 100vw;
    height: calc(100vw / 3.57);  // or whatever height you want
`;

const SlidesContainer = styled.div`
    display: flex;
    transition: transform 0.5s ease-in-out;
    transform: translateX(${props => -props.currentIndex * 100}vw);
`;

const Slide = styled.div`
    flex: 0 0 100vw;
    height: calc(100vw / 3.57);
    position: relative;
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
  text-shadow: 
    2px 0 0 rgba(0, 0, 0, 1),
    0 2px 0 rgba(0, 0, 0, 1),
    2px 2px 0 rgba(0, 0, 0, 1); 
  text-transform: uppercase;
`;

const OverlayText = styled.p`
  margin-bottom: 2em;
  font-size: 1.1em;
  text-align: left;
  font-weight: 500;
  text-shadow: 
    2px 0 0 rgba(0, 0, 0, 0.8),
    0 2px 0 rgba(0, 0, 0, 0.8),
    2px 2px 0 rgba(0, 0, 0, 0.8);  
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
        width: 80%;
        max-width: 1366px;
        margin: 0 auto;
        margin-bottom: 30px;
    }
`;

const ProgramsSection = styled.div`

    @media (min-width: 1366px) {
        margin-top: 25px;
    }

    padding-top: 30px;
    padding-bottom: 20px;
    margin-bottom: 55px;
    background: #333;
    color: #fff;

    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
`;

const SlideButton = styled.button`
    background-color: rgba(0, 0, 0, 0); // Semi-transparent black
    height: 100%;
    width: 100px;
    color: white;
    border: none;
    padding: 10px 30px;
    cursor: pointer;
    outline: none;
    font-size: 2rem;
    font-weight: bold;
    transition: background-color 0.3s ease;
`;

const PreviousButton = styled(SlideButton)`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const NextButton = styled(SlideButton)`
    position: absolute;
    right: 20px;  // Adjust as needed
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const images = [MCCFrontSmall, MCCFrontSmall, MCCFrontSmall, MCCFrontSmall];

const desktopImages = [
    {
        image: MCCFront,
        title: "Summer 2023 at Muslim Community Center",
        text: "Summer at Muslim Community Center is loaded with programs for the entire family! We know that there are many of you who are eager to taste the sweetness of Islamic knowledge but do not have the opportunity to do so on a full-time basis. That's why we strive to provide a variety of courses that fit your schedule.",
    },
    {
        image: Bonfire,
        title: "Sisters' Summer Bonfire and Potluck",
        text: "Join the Muslim Sisters' Alliance for an enchanting evening by the bonfire! We are excited to host the Sisters' Summer Bonfire and Potluck on Friday, August 19th, at 6 PM. Dive into heartwarming conversations and strengthen community bonds - don't miss out on this evening of sisterhood!"
    },
    {
        image: Tech,
        title: "AWS Cloud Training at MCC",
        text: "MCC IT Academy is proud to announce its AWS Cloud Training, commencing on September 2nd, 2023. Grasp the opportunity to enhance your technical skills and dive deep into the world of cloud computing. Stay ahead of the curve and enrich your knowledge with our hands-on training sessions."
    },
    {
        image: Books,
        title: "Sunday School Registration at MCC",
        text: "It's that time of year again! MCC Sunday School is excited to open registrations for the 2023-2024 academic year. Whether you're a returning student or new to our community, we welcome all to join our family of learning. Reserve your spot today and embark on a spiritual journey with us!"
    }
];


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

    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);


    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % desktopImages.length);
        setAutoSlide(false);  // Disable automatic sliding
    };
      
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + desktopImages.length) % desktopImages.length);
        setAutoSlide(false);  // Disable automatic sliding
    };
    

    useEffect(() => {
        if (autoSlide) {
            const slideTimer = setInterval(nextSlide, 5000);  // Change slides every 5 seconds
    
            return () => clearInterval(slideTimer);  // Cleanup on component unmount
        }
    }, [autoSlide, currentIndex]);  // Dependencies list
    

    return (
        <>  
            {isMobile && <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`slide${index}`} style={{ width: '100%' }} />
                    </div>
                ))}
            </Slider>}
            {!isMobile && (<>
                <ImageWrapper>
                    <SlidesContainer currentIndex={currentIndex}>
                        {desktopImages.map((slide, index) => (
                            <Slide key={index}>
                                <MainImage src={slide.image} alt=""/>
                                <OverlayContent>
                                    <OverlayTitle>{slide.title}</OverlayTitle>
                                    <OverlayText>{slide.text}</OverlayText>
                                    <OverlayButton>Read More</OverlayButton>
                                </OverlayContent>
                            </Slide>
                        ))}
                    </SlidesContainer>
                    <PreviousButton onClick={prevSlide}>{'\u2039'}</PreviousButton>
                    <NextButton onClick={nextSlide}>{'\u203a'}</NextButton>
                </ImageWrapper>
            </>)}
            {!isMobile && <IntroductionWrapper>
                <IntroductionCard>
                    <IntroductionSubtitle>Our Story</IntroductionSubtitle>
                    <div>Inspired by both Islamic and English religious architectural traditions, our design develops the idea of a British mosque for the 21st century.</div>
                    <ReadMoreWrapper><SubdirectoryArrowRightIcon style={{ fontSize: "100%", marginRight: "5px"}}/><ReadMoreLink to="/mccmd/about-us/">Read More</ReadMoreLink></ReadMoreWrapper>
                </IntroductionCard>
                <IntroductionCard>
                    <IntroductionSubtitle>Get Connected</IntroductionSubtitle>
                    <div>We're within walking distance of Cambridge train station, buses stop right outside & our underground car park has ample space to secure cycles.</div>
                    <ReadMoreWrapper><SubdirectoryArrowRightIcon style={{ fontSize: "100%", marginRight: "5px"}}/><ReadMoreLink to="/mccmd/donate/">Read More</ReadMoreLink></ReadMoreWrapper>
                </IntroductionCard>
                <IntroductionCard>
                    <IntroductionSubtitle>Support Our Masjid</IntroductionSubtitle>
                    <div>Thanks to your generous donations, we are able to host worshippers, offer community services & distribute food to those that need it most.</div>
                    <ReadMoreWrapper><SubdirectoryArrowRightIcon style={{ fontSize: "100%", marginRight: "5px"}}/><ReadMoreLink to="/mccmd/donate/">Read More</ReadMoreLink></ReadMoreWrapper>
                </IntroductionCard>
            </IntroductionWrapper>}
            <ProgramsSection>
                <TitleWrapper><ProgramTitle>Programs</ProgramTitle><Divider/></TitleWrapper>
                <ProgramsWrapper>
                    <ProgramCard
                        imgSrc={Placeholder2}
                        title="Living the Legacy: Journey Through the Life of the Prophet"
                        text="Join us for a journey into the life of the Prophet (صلى الله عليه وآله وسلم) in our weekly seerah class with Shaykh Abdussamad Madad."
                        time="Maghrib to Isha"
                        location="Muslim Community Center"
                        date="Every Monday"
                    />
                    <ProgramCard
                        imgSrc={Placeholder3}
                        title="Gardens of the Righteous: Hadith Study Circle"
                        text="Join us in-person on Wednesday evenings for various lessons and wisdoms from the sunnah with Imam Muhammad Abdullahi."
                        time="Maghrib to Isha"
                        location="Muslim Community Center"
                        date="Every Wednesday"
                    />
                    <ProgramCard
                        imgSrc={Placeholder4}
                        title="Muslim Youth Organization"
                        text="Join our engaging youth events, every Friday. From inspiring workshops to interactive activities, we aim bridge to traditional values with modern experiences."
                        time="Asr to Isha"
                        location="Muslim Community Center"
                        date="Every Friday"
                    />
                </ProgramsWrapper>
            </ProgramsSection>
            <TitleWrapper><ProgramTitle>Services</ProgramTitle><Divider/></TitleWrapper>
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
                    <ServiceCard subtitle="General Programs" to="/mccmd/general-events">
                        To book rooms for other events or Islamic celebrations, from aqiqas and private gatherings to conferences, we offer rooms at reasonable rates of hire.
                    </ServiceCard>
                </ServicesBox>
            </ServicesWrapper>
        </>
    )
}

export default Home;
