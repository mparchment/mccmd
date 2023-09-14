import { useState, useEffect, useCallback } from 'react';
import { useSwipeable } from 'react-swipeable';

import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';

import useIsMobile from '../hooks/useIsMobile';

import ProgramCard from '../components/ProgramCard';
import ServiceCard from '../components/ServiceCard';

import MCCFront from '../assets/mcc-front.jpg';


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
    NextButton,
    Icons,
    IconLink,
    Icon
} from './Home.styles';

import FacebookIcon from '../assets/facebook-black.png';
import InstagramIcon from '../assets/instagram-black.png';
import WhatsAppIcon from '../assets/whatsapp-black.png';
import YouTubeIcon from '../assets/youtube-black.png';

import Placeholder1 from '../assets/placeholder-1.jpg';
import Placeholder2 from '../assets/placeholder-2.jpg';
import Placeholder3 from '../assets/placeholder-3.jpg';
import Placeholder4 from '../assets/placeholder-4.jpeg';

import { images } from './Home.constants';
import { WhiteBackground } from '../components/WhiteBackground';

function stripHtml(html) {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
}

function Home() {

    const isMobile = useIsMobile();

    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);
    const [showSocialMedia, setShowSocialMedia] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://mccmd.org/wp-json/wp/v2/posts')
          .then(response => response.json())
          .then(async (data) => {
            const postsWithMedia = await Promise.all(data.map(async (post) => {
              if (post._links && post._links['wp:featuredmedia'] && post._links['wp:featuredmedia'].length > 0) {
                const mediaUrl = post._links['wp:featuredmedia'][0].href;
                const mediaResponse = await fetch(mediaUrl);
                const mediaData = await mediaResponse.json();
                const imageUrl = mediaData.source_url;
                return {
                  ...post,
                  featuredMedia: imageUrl,
                };
              }
              return {
                ...post,
                featuredMedia: null,
              };
            }));
            setPosts(postsWithMedia);
          });
    }, []);
    
    const desktopImages = posts.map(post => ({
        image: post.featuredMedia || MCCFront,
        title: stripHtml(post.title.rendered),
        text: stripHtml(post.excerpt.rendered),
    }));

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % desktopImages.length);
        setAutoSlide(false); 
    }, [setCurrentIndex, setAutoSlide, desktopImages.length]);
      
    const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + desktopImages.length) % desktopImages.length);
        setAutoSlide(false); 
    }, [setCurrentIndex, setAutoSlide, desktopImages.length]);    

    
    const handlers = useSwipeable({
        onSwipedLeft: () => nextSlide(),
        onSwipedRight: () => prevSlide(),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    const toggleSocialMedia = () => {
        setShowSocialMedia(true);
        setTimeout(() => {
            setShowSocialMedia(false);
        }, 5000);
    };

    useEffect(() => {
        const handleVisibilityChange = () => {
          if (document.hidden) {
            setAutoSlide(false);
          } else {
            setAutoSlide(true);
          }
        };
      
        document.addEventListener("visibilitychange", handleVisibilityChange);
      
        return () => {
          document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
      }, []); 
      
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
            <WhiteBackground/>
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
                    <ReadMoreWrapper><SubdirectoryArrowRightIcon style={{ fontSize: "100%", marginRight: "5px"}}/><ReadMoreLink to="/mccmd/our-story/">Read More</ReadMoreLink></ReadMoreWrapper>
                </IntroductionCard>
                <IntroductionCard style={{ paddingBottom: '15px'}}>
                    <IntroductionSubtitle>Stay Updated</IntroductionSubtitle>
                    <div>Connect with us on our social media channels and stay updated with our WhatsApp broadcasts. Dive deep into our community, wherever you are.</div>
                    <Icons style={{ marginTop: '13px'}}>
                        <IconLink href='https://chat.whatsapp.com/EIqeR0Msl2ZB4AjSQBgdgH'><Icon src={WhatsAppIcon}/></IconLink>
                        <IconLink href='https://www.youtube.com/@MCCMD'><Icon src={YouTubeIcon}/></IconLink>
                        <IconLink href='https://www.facebook.com/mccmaryland/'><Icon src={FacebookIcon}/></IconLink>
                        <IconLink href='https://www.instagram.com/mccmaryland/'><Icon src={InstagramIcon}/></IconLink>
                    </Icons>
                </IntroductionCard>
                <IntroductionCard>
                    <IntroductionSubtitle>Support Our Masjid</IntroductionSubtitle>
                    <div>Thanks to your generous donations, we are able to host worshippers, offer community services & distribute food to those that need it most.</div>
                    <ReadMoreWrapper><SubdirectoryArrowRightIcon style={{ fontSize: "100%", marginRight: "5px"}}/><ReadMoreLink to="/mccmd/donate/">Give Today</ReadMoreLink></ReadMoreWrapper>
                </IntroductionCard>
            </IntroductionWrapper>}
            {isMobile && <IntroductionWrapper>
                <IntroductionCard>
                    <IntroductionSubtitle>Stay Updated</IntroductionSubtitle>
                    <div>Connect with us on our social media channels and stay updated with our WhatsApp broadcasts. Dive deep into our community, wherever you are.</div>
                    <Icons style={{ marginTop: '13px'}}>
                        <IconLink href='https://chat.whatsapp.com/EIqeR0Msl2ZB4AjSQBgdgH'><Icon src={WhatsAppIcon}/></IconLink>
                        <IconLink href='https://www.youtube.com/@MCCMD'><Icon src={YouTubeIcon}/></IconLink>
                        <IconLink href='https://www.facebook.com/mccmaryland/'><Icon src={FacebookIcon}/></IconLink>
                        <IconLink href='https://www.instagram.com/mccmaryland/'><Icon src={InstagramIcon}/></IconLink>
                    </Icons>
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
                    <ServiceCard subtitle="Imam Consultation" to="/mccmd/imam">
                        Schedule a meeting up to two weeks in advance with our Imam for spiritual guidance or to discuss any Islamic topic  that concern you.
                    </ServiceCard>
                    <ServiceCard subtitle="Clinic" to="https://www.mccclinic.org/" external>
                        Our clinic combines health with Islamic values. Serving both Muslims and the larger community, we focus on comprehensive care and community well-being.
                    </ServiceCard>
                    <ServiceCard subtitle="Converts" to="/mccmd/converts">
                        Whether you are just interested in Islam, have some questions, or are ready to convert, we are happy to speak to you and answer any questions you have. 
                    </ServiceCard>
                    <ServiceCard subtitle="Marriage" to="/mccmd/marriage">
                        From premarital counseling to nikah ceremonies, we ensure your union begins with the right blessings and preparations.
                    </ServiceCard>
                    <ServiceCard subtitle="Funerals" to="/mccmd/janazas">
                        Our team assists families in carrying out Islamic burials with respect and timeliness, including janazah prayers and guidance on local funeral services.
                    </ServiceCard>
                    <ServiceCard subtitle="Zakat" to="/mccmd/zakat">
                        We facilitate the collection and distribution of Zakat funds, ensuring they reach those most in need within the community.
                    </ServiceCard>
                    <ServiceCard subtitle="Food Pantry" to="/mccmd/food-pantry">
                        Access essential groceries and food items through our pantry. Open to all, we aim to alleviate food insecurity in our community.
                    </ServiceCard>
                    <ServiceCard subtitle="Refugee Aid" to="/mccmd/refugee-aid">
                        We provide critical support to refugees, including financial aid, medical support, as well as help in acclimating to a new environment.
                    </ServiceCard>
                    <ServiceCard subtitle="Domestic Abuse" to="/mccmd/general-events">
                        Reach out to our trained Domestic Violence Ambassadors for confidential support and resource guidance if you or someone you know is facing abuse.
                    </ServiceCard>
                    {/*<ServiceCard subtitle="General Programs" to="/mccmd/general-events">
                        To book rooms for other events or Islamic celebrations, from aqiqas and private gatherings to conferences, we offer rooms at reasonable rates of hire.
                    </ServiceCard>*/}
                </ServicesBox>
            </ServicesWrapper>
        </>
    )
}

export default Home;

