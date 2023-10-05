import { useState, useEffect, useCallback, useContext } from "react";
import { useSwipeable } from "react-swipeable";

import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";

import useIsMobile from "../hooks/useIsMobile";

import ProgramCard from "../components/ProgramCard";
import ServiceCard from "../components/ServiceCard";
import OldCalendar from "../components/Calendar";
import WeeklyCalendar from "../components/WeeklyCalendar";

import styled, { css, keyframes } from 'styled-components';

import MCCFront from "../assets/mcc-front.jpg";
import ShaykhAbdussamadPortrait from "../assets/shaykh-abdussamad-portrait.png";

import PostsContext from "../contexts/PostsContext";

import FacebookIcon from "../assets/facebook-color.png";
import InstagramIcon from "../assets/instagram-color.png";
import WhatsAppIcon from "../assets/whatsapp-color.png";
import YouTubeIcon from "../assets/youtube-color.png";

import Placeholder1 from "../assets/placeholder-1.jpg";
import Placeholder2 from "../assets/placeholder-2.jpg";
import Placeholder3 from "../assets/placeholder-3.jpg";
import Placeholder4 from "../assets/placeholder-4.jpeg";

import { events } from "./Home.constants";
import { WhiteBackground } from "../components/WhiteBackground";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { Link as PageLink } from 'react-router-dom';

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
    background-color: var(--accent-color);
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 35px;
    margin: 0 auto;
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
    margin-bottom: 30px;

    @media (max-width: 1440px) {
        width: 75%;
        margin-bottom: 10px;
    }

    @media (max-width: 1366px) {
        width: 100%;
    }
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

    @media (max-width: 1366px) {
        padding-top: 10px;
    }
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
    margin-top: 18px;
    whitespace: nowrap;
    display: flex;
    flex-direction: row;
    align-self: center;
    width: fit-content;
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
    padding-top: 30px;
    padding-bottom: 20px;
    margin-bottom: 55px;
    background: #333;
    color: #fff;

    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
`;

const SlideButton = styled.button`
    background-color: rgba(0, 0, 0, 0);
    height: 100%;
    width: 75px;
    color: white;
    border: none;
    padding: 10px 30px;
    cursor: pointer;
    outline: none;
    font-size: 2rem;
    font-weight: bold;
    transition: background-color 0.3s ease;

    &:hover {
        color: lightgray;
        transition: color .75s ease;
    }
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

const SlideContent = styled.div`
    transition: opacity 0.5s ease-in-out;
    opacity: ${props => props.fadeOut ? '0' : '1'};
    display: ${props => props.fadeOut ? 'none' : 'flex'};
    z-index: ${props => props.fadeOut ? '-1' : '1'};

    display: flex;
    flex-direction: column;

    gap: 10px;
`;

const FollowUsLink = styled.div`
  color: inherit;
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  border-bottom: 2px solid #b98474;
  width: fit-content;

  &:hover {
    color: #b98474;
    transition: all 0.2s ease-in-out;
  }
`;

const Icons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    gap: 10px;
`;


const IconLink = styled.a`
    color: inherit;
    text-decoration: none;
`;

const Icon = styled.img`
    width: 30px;
`;

const SliderSection = styled.div`
  position: relative;
  width: 100%;
  height: 575px;
`;

const Slider = styled.div`
  width: 50%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: 50px;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const SlideImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`

const SlideImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`

const SlideText = styled.div`
  height: 100%;
  width: 50%;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Slide = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  ${props => props.isEntering && css`
    animation: ${slideIn} 0.5s forwards;
  `}
  ${props => props.isExiting && css`
    animation: ${slideOut} 0.5s forwards;
  `}
`

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #333; // or another color that suits your design
  
  ${props => props.left && `
    left: 14rem;
    padding-left: 15px;
  `}
  
  ${props => props.right && `
    right: 14rem;
    padding-right: 15px;
  `}
`;

function stripHtml(html) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
}

function Home() {
  const isMobile = useIsMobile();
  const { posts } = useContext(PostsContext);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);

  const slides = posts.map((post) => ({
    id: post.id,
    slug: post.slug,
    image: post.featuredMedia,
    title: stripHtml(post.title.rendered),
    text: stripHtml(post.excerpt.rendered),
    content: stripHtml(post.content.rendered),
  }));

  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    stopAutoScroll();
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length); 
      setIsTransitioning(false);
    }, 500); // 0.5s to match the CSS animation duration
  }

  const prevSlide = () => {
    stopAutoScroll();
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1)); 
      setIsTransitioning(false);
    }, 500); // 0.5s to match the CSS animation duration
  }

  useEffect(() => {
    const autoSlide = () => {
      if (autoScroll) {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentSlide((prev) => (prev + 1) % slides.length); 
          setIsTransitioning(false);
        }, 500); // 0.5s to match the CSS animation duration
      }
    };
    const interval = setInterval(autoSlide, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide, autoScroll]);

  const stopAutoScroll = () => {
    setAutoScroll(false);
  };

  return (
    <>
      <WhiteBackground />
      <SliderSection>
        <Slider>
          <Slide isExiting={isTransitioning} isEntering={!isTransitioning}>
            <SlideImageWrapper>
              <SlideImage src={slides[currentSlide].image} alt={slides[currentSlide].title} />
            </SlideImageWrapper>
            <SlideText>
              <h1>{slides[currentSlide].title}</h1>
              <p>{slides[currentSlide].text}</p>
            </SlideText>
          </Slide>
        </Slider>
        <ArrowButton onClick={prevSlide} left>
          <FontAwesomeIcon icon={faArrowLeft} />
        </ArrowButton>
        <ArrowButton onClick={nextSlide} right>
          <FontAwesomeIcon icon={faArrowRight} />
        </ArrowButton>
      </SliderSection>
      {!isMobile && (
        <IntroductionWrapper>
          <IntroductionCard>
            <IntroductionSubtitle>Our Story</IntroductionSubtitle>
            <div>
              For over 30 years, MCC has served Montgomery County as more than
              just a mosque; it's a center for community growth, education, and
              belonging.
            </div>
            <ReadMoreWrapper>
              <SubdirectoryArrowRightIcon
                style={{ fontSize: "100%", marginRight: "5px" }}
              />
              <ReadMoreLink to="/mccmd/our-story/">Read More</ReadMoreLink>
            </ReadMoreWrapper>
          </IntroductionCard>
          <IntroductionCard style={{ paddingBottom: "15px" }}>
            <IntroductionSubtitle>Stay Updated</IntroductionSubtitle>
            <div>
              Connect with us on our social media channels and stay updated with
              our WhatsApp broadcasts. Dive deep into our community, wherever
              you are.
            </div>
            <Icons style={{ marginTop: "13px" }}>
              <IconLink href="https://chat.whatsapp.com/EIqeR0Msl2ZB4AjSQBgdgH">
                <Icon src={WhatsAppIcon} />
              </IconLink>
              <IconLink href="https://www.youtube.com/@MCCMD">
                <Icon src={YouTubeIcon} />
              </IconLink>
              <IconLink href="https://www.facebook.com/mccmaryland/">
                <Icon src={FacebookIcon} />
              </IconLink>
              <IconLink href="https://www.instagram.com/mccmaryland/">
                <Icon src={InstagramIcon} />
              </IconLink>
            </Icons>
          </IntroductionCard>
          <IntroductionCard>
            <IntroductionSubtitle>Support Our Masjid</IntroductionSubtitle>
            <div>
              Thanks to your generous donations, we are able to host
              worshippers, offer community services & distribute food to those
              that need it most.
            </div>
            <ReadMoreWrapper>
              <SubdirectoryArrowRightIcon
                style={{ fontSize: "100%", marginRight: "5px" }}
              />
              <ReadMoreLink to="/mccmd/donate/">Give Today</ReadMoreLink>
            </ReadMoreWrapper>
          </IntroductionCard>
        </IntroductionWrapper>
      )}
      {isMobile && (
        <IntroductionWrapper>
          <IntroductionCard>
            <IntroductionSubtitle>Stay Updated</IntroductionSubtitle>
            <div>
              Connect with us on our social media channels and stay updated with
              our WhatsApp broadcasts. Dive deep into our community, wherever
              you are.
            </div>
            <Icons style={{ marginTop: "13px" }}>
              <IconLink href="https://chat.whatsapp.com/EIqeR0Msl2ZB4AjSQBgdgH">
                <Icon src={WhatsAppIcon} />
              </IconLink>
              <IconLink href="https://www.youtube.com/@MCCMD">
                <Icon src={YouTubeIcon} />
              </IconLink>
              <IconLink href="https://www.facebook.com/mccmaryland/">
                <Icon src={FacebookIcon} />
              </IconLink>
              <IconLink href="https://www.instagram.com/mccmaryland/">
                <Icon src={InstagramIcon} />
              </IconLink>
            </Icons>
          </IntroductionCard>
        </IntroductionWrapper>
      )}
      <iframe src="https://masjidbox.com/prayer-times/muslim-community-center" style={{width: "100%", height: "550px", border: "none"}}/>
      {/*<OldCalendar />*/}
      <ProgramsSection>
        <TitleWrapper>
          <ProgramTitle>Programs</ProgramTitle>
          <Divider />
        </TitleWrapper>
        <ProgramsWrapper>
          <ProgramCard
            imgSrc={ShaykhAbdussamadPortrait}
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
      <TitleWrapper>
        <ProgramTitle>Calendar</ProgramTitle>
        <Divider />
      </TitleWrapper>
      <WeeklyCalendar events={events}/>
      <TitleWrapper>
        <ProgramTitle>Services</ProgramTitle>
        <Divider />
      </TitleWrapper>
      <ServicesWrapper>
        <ServicesBox>
          <ServiceCard subtitle="Imam's Corner" to="/mccmd/imams-corner">
            Schedule an appointment up to two weeks in advance with our Imam for
            spiritual guidance or to discuss any Islamic topic that concern you.
          </ServiceCard>
          <ServiceCard
            subtitle="Clinic"
            to="https://www.mccclinic.org/"
            external
          >
            Our clinic combines health with Islamic values. Serving both Muslims
            and the larger community, we focus on comprehensive care and
            community well-being.
          </ServiceCard>
          <ServiceCard subtitle="Convert Care" to="/mccmd/convert-care">
            Whether you are just interested in Islam, have some questions, or
            are ready to convert, we are happy to speak to you and answer any
            questions you have.
          </ServiceCard>
          <ServiceCard subtitle="Marriage" to="/mccmd/marriage">
            From premarital counseling to nikah ceremonies, we ensure your union
            begins with the right blessings and preparations.
          </ServiceCard>
          <ServiceCard subtitle="Funerals" to="/mccmd/janazas">
            Our team assists families in carrying out Islamic burials with
            respect and timeliness, including janazah prayers and guidance on
            local funeral services.
          </ServiceCard>
          <ServiceCard subtitle="Zakat" to="/mccmd/zakat">
            We facilitate the collection and distribution of Zakat funds,
            ensuring they reach those most in need within the community.
          </ServiceCard>
          <ServiceCard subtitle="Food Pantry" to="/mccmd/food-pantry">
            Access essential groceries and food items through our pantry. Open
            to all, we aim to alleviate food insecurity in our community.
          </ServiceCard>
          <ServiceCard subtitle="Refugee Aid" to="/mccmd/refugee-aid">
            We provide critical support to refugees, including financial aid,
            medical support, as well as help in acclimating to a new
            environment.
          </ServiceCard>
          <ServiceCard
            subtitle="Domestic Violence"
            to="/mccmd/domestic-violence"
          >
            Reach out to our trained Domestic Violence Ambassadors for
            confidential support and resource guidance if you or someone you
            know is facing abuse.
          </ServiceCard>
          {/*<ServiceCard subtitle="General Programs" to="/mccmd/general-events">
            To book rooms for other events or Islamic celebrations, from aqiqas and private gatherings to conferences, we offer rooms at reasonable rates of hire.
          </ServiceCard>*/}
        </ServicesBox>
      </ServicesWrapper>
    </>
  );
}

export default Home;
