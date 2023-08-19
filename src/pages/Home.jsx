// React imports
import { useState, useEffect, useCallback } from 'react';
import { useSwipeable } from 'react-swipeable';


import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';

import useIsMobile from '../hooks/useIsMobile';

import ProgramCard from "../components/ProgramCard";
import ServiceCard from "../components/ServiceCard";
import { PageBackground } from "../components/PageBackground";

import { 
    ProgramTitle, 
    Divider, 
    MainImage, 
    ProgramsWrapper, 
    TitleWrapper, 
    IntroductionWrapper, 
    IntroductionCard, 
    IntroductionSubtitle, 
    ReadMoreLink, 
    ReadMoreWrapper, 
    ImageWrapper,
    SlidesContainer, 
    Slide, 
    OverlayContent, 
    OverlayTitle, 
    OverlayText, 
    OverlayButton, 
    ServicesBox, 
    ServicesWrapper, 
    ProgramsSection, 
    PreviousButton, 
    NextButton 
} from './Home.styles';

import Placeholder1 from '../assets/placeholder-1.jpg';
import Placeholder2 from '../assets/placeholder-2.jpg';
import Placeholder3 from '../assets/placeholder-3.jpg';
import Placeholder4 from '../assets/placeholder-4.jpeg';

import { images, desktopImages } from './Home.constants';

function Home() {

    const isMobile = useIsMobile();

    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);


    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % desktopImages.length);
        setAutoSlide(false); 
    }, [setCurrentIndex, setAutoSlide]);
      
    const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + desktopImages.length) % desktopImages.length);
        setAutoSlide(false); 
    }, [setCurrentIndex, setAutoSlide]);

    
    const handlers = useSwipeable({
        onSwipedLeft: () => nextSlide(),
        onSwipedRight: () => prevSlide(),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });
    
    useEffect(() => {
        if (autoSlide) {
            const slideTimer = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % desktopImages.length);
            }, 5000); 
    
            return () => clearInterval(slideTimer);
        }
    }, [autoSlide]);
    

    return (
        <>  
            <PageBackground style={{ display: 'none' }}/>
            {isMobile ? (
                <ImageWrapper>
                    <SlidesContainer {...handlers} style={{ transform: `translateX(-${currentIndex * 100}vw)` }}>
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
                </ImageWrapper>
            ) : (
                <ImageWrapper>
                    <SlidesContainer style={{ transform: `translateX(-${currentIndex * 100}vw)` }}>
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
            )}
            {!isMobile && <IntroductionWrapper>
                <IntroductionCard>
                    <IntroductionSubtitle>Our Story</IntroductionSubtitle>
                    <div>For over 30 years, MCC has served Montgomery County as more than just a mosque; it's a center for community growth, education, and belonging.</div>
                    <ReadMoreWrapper><SubdirectoryArrowRightIcon style={{ fontSize: "100%", marginRight: "5px"}}/><ReadMoreLink to="/mccmd/about-us/">Read More</ReadMoreLink></ReadMoreWrapper>
                </IntroductionCard>
                <IntroductionCard>
                    <IntroductionSubtitle>Stay Updated</IntroductionSubtitle>
                    <div>Connect with us on our social media channels and stay updated with our WhatsApp broadcasts. Dive deep into our community, wherever you are.</div>
                    <ReadMoreWrapper><SubdirectoryArrowRightIcon style={{ fontSize: "100%", marginRight: "5px"}}/><ReadMoreLink to="/mccmd/get-involved/">Read More</ReadMoreLink></ReadMoreWrapper>
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
                    <ServiceCard subtitle="Converts" to="/mccmd/converts">
                        Whether you are just interested in Islam, have some questions, or are ready to convert, we are happy to speak to you and guide you through the Shahada. 
                    </ServiceCard>
                    <ServiceCard subtitle="Meet the Imam" to="/mccmd/imam">
                        Book a meeting up to two weeks in advance with the Imam to discuss one of a range of topics. 
                    </ServiceCard>
                    <ServiceCard subtitle="Clinic" to="https://www.mccclinic.org/" external>
                        Our clinic combines health with Islamic values. Serving both Muslims and the larger community, we focus on comprehensive care and community well-being.
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
