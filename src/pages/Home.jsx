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

    @media (max-width: 1366px) {
      width: 50%;
    }
`;

const ProgramsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  gap: 30px;
  flex-wrap: wrap;

  @media (min-width: 1366px) {
    width: 95%;
    flex-direction: row;
  }

  @media (max-width: 1366px) {
    align-items: center;
  }
`;

const EventsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  gap: 50px;

  @media (max-width:1366px) {
    gap: 30px;
  }
`;

const EventsSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  gap: 20px;
  padding-top: 30px;
  padding-bottom: 100px;
  background-color: #f5f5f5;

  @media (max-width:1366px) {
      align-items: center;
      gap: 0;
  }
  
`;

const EventCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    gap: 50px;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 5px;

    @media (max-width: 1366px) {
        flex-direction: column;
        gap: 0;
        width: 80%;
        margin: 0 auto;
      }
`;

const EventContent = styled.div`
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;

    @media (min-width: 1366px) {
      padding-right: 40px;
    }
`;

const EventTitle = styled.h3`

`;

const EventText = styled.div`
    margin-bottom: 20px;

    max-width: 650px;
    text-align: center;


    @media (max-width: 1366px) {
        padding-right: 0;
    }
`;

const EventTime = styled.div`
    font-weight: 600;


    margin-bottom: 10px;
`;

const EventDate = styled.div`
    font-weight: 600;

    @media (max-width: 1366px) {
        margin-bottom: 25px;
    }
`;

const EventImage = styled.img`
    max-height: 250px;
    border-radius: 5px 0 0 5px;

    @media (max-width: 1366px) {
        border-radius: 5px;
        width: 100%;
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

const ReadMoreSpan = styled(Link)`
    color: inherit;
    text-decoration: none;
    font-weight: inherit;
    border-bottom: 2px solid #b98474;
    whitespace: nowrap;
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

const ServicesSection = styled.div`

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

export const SlidesContainer = styled.div`
    display: flex;
    transition: transform 0.5s ease-in-out;
`;

export const Slide = styled.div`
    flex: 0 0 100vw;
    height: calc(100vw / 3.57);
    position: relative;
`;

export const SlideButton = styled.button`
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


export const PreviousButton = styled(SlideButton)`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const NextButton = styled(SlideButton)`
    position: absolute;
    right: 20px;  // Adjust as needed
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;



export const OverlayContent = styled.div`
  position: absolute;
  top: 46%;
  left: 47%;
  transform: translate(-50%, -50%);
  color: #000;  // Changing color to black
  text-align: left;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;

    top: 46%;
    left: 47%;
    transform: translate(-50%, -7.5%);

    gap: 20px;

    height: 100%;
    width: 75%;
  }
`;

export const OverlayTitle = styled.h1`
  color: #fff;
  font-size: 2em;
  text-align: left;
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  z-index: 1;
  padding: 20px;
  margin-bottom: 5px;  // Adjust as needed

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: -10px;  // Adjust as needed
    right: -10px;  // Adjust as needed
    background-color: rgba(0, 0 , 0, 0.5);
  }

  @media (max-width: 768px) {
    font-size: 1.34em;
  }

  @media (max-width: 400px) {
    font-size: 1em;
  }
`;

export const OverlayText = styled.p`
  color: #fff;
  font-size: 1.1em;
  text-align: left;
  font-weight: 500;
  position: relative;
  display: inline-block;
  z-index: 1;
  padding: 10px;
  margin-bottom: 10px;  // Adjust as needed
  padding: 20px;
  font-weight: 600;

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: -10px;  // Adjust as needed
    right: -10px;  // Adjust as needed
    background-color: rgba(0, 0 , 0, 0.5);
  }

  @media (max-width: 768px) {
    font-size: 1em;
  }

  @media (max-width: 400px) {
    font-size: 0.93em;
  }
`;



export const OverlayButton = styled(Link)`
    color: #fff;  // black text
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
    position: relative;
    display: inline-block;
    padding: 1em 1.33em;
    z-index: 1;

    &:before {
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      bottom: 0;
      left: -10px;  // Adjust as needed
      right: -10px;  // Adjust as needed
      background-color: rgba(0, 0 , 0, 0.5);
    }

    &:hover {
        // Your hover styles here, e.g.,
        color: #000;  // Adjust as needed
        &:before {
            background-color: #fff;  // Adjust as needed
        }
    }

    @media (max-width: 768px) {
        align-self: flex-start;
    }

    @media (min-width: 1366px) {
        margin-top: 10px;
    }
`;



export const ImageWrapper = styled.div`
    display: flex;
    overflow: hidden;  // to hide images that are outside of this container
    position: relative;
    width: 100vw;
    height: calc(100vw / 3.57);  // or whatever height you want

    @media (max-width: 1366px) {
        height: 100vw;
    }
`;

export const MainImage = styled.img`
    width: 100vw;
    height: 555px;
    object-fit: cover;
    filter: brightness(70%);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
`;

function stripHtml(html) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
}

function Home() {
  const isMobile = useIsMobile();
  const { posts } = useContext(PostsContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  const sliderPosts = posts.filter(post => post.category.includes("Slider"));

  const slides = sliderPosts.map((post) => ({
    id: post.id,
    slug: post.slug,
    image: post.featuredMedia,
    category: post.category,
    title: stripHtml(post.title.rendered),
    text: stripHtml(post.excerpt.rendered),
    content: stripHtml(post.content.rendered),
  }));

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    setAutoSlide(false);
  }, [setCurrentIndex, setAutoSlide, slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
    setAutoSlide(false);
  }, [setCurrentIndex, setAutoSlide, slides.length]);

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

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
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 5000);

      return () => clearInterval(slideTimer);
    }
  }, [autoSlide]);

  useEffect(() => {
    slides.forEach(slide => {
      const img = new Image();
      img.src = slide.image;
    });
  }, [slides]);

  return (
    <>
      <WhiteBackground />
      {isMobile ? (
        <ImageWrapper>
          <SlidesContainer
            {...handlers}
            style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
          >
            {slides.map((slide, index) => (
              <Slide key={index}>
                <MainImage src={slide.image} alt="" />
                <OverlayContent>
                  <OverlayTitle>{slide.title}</OverlayTitle>
                  <OverlayText>{slide.text}</OverlayText>
                  <OverlayButton to={`/mccmd/${slide.slug}`}>
                    Read More
                  </OverlayButton>
                </OverlayContent>
              </Slide>
            ))}
          </SlidesContainer>
        </ImageWrapper>
      ) : (
        <ImageWrapper>
          <SlidesContainer
            style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
          >
            {slides.map((slide, index) => (
              <Slide key={index}>
                <MainImage src={slide.image} alt="" />
                <OverlayContent>
                  <OverlayTitle>{slide.title}</OverlayTitle>
                  <OverlayText>{slide.text}</OverlayText>
                  <OverlayButton to={`/mccmd/${slide.slug}`}>
                    Read More
                  </OverlayButton>
                </OverlayContent>
              </Slide>
            ))}
          </SlidesContainer>
          {slides.length > 1 && (
            <>
              <PreviousButton onClick={prevSlide}>{"\u2039"}</PreviousButton>
              <NextButton onClick={nextSlide}>{"\u203a"}</NextButton>
            </>
          )}
        </ImageWrapper>
      )}
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
      <TitleWrapper>
        <ProgramTitle>Calendar</ProgramTitle>
        <Divider />
      </TitleWrapper>
      <WeeklyCalendar events={events}/>
      <EventsSection>
        <TitleWrapper>
          <ProgramTitle>Events</ProgramTitle>
          <Divider />
        </TitleWrapper>
        <EventsWrapper>
          <EventCard>
            <EventImage src={Placeholder1}/>
            <EventContent>
              <EventTitle>RESTART A HEART</EventTitle>
              <EventText>Raising awareness about cardiac arrest and helping you learn lifesaving skills.</EventText>
              <EventTime>2 PM - 4 PM</EventTime>
              <EventDate>11th October</EventDate>
            </EventContent>
          </EventCard>
          <EventCard>
            <EventImage src={Placeholder2}/>
            <EventContent>
              <EventTitle>WOMEN’S WELLNESS DAY</EventTitle>
              <EventText>A special women's wellness event including a presentation on perimenopause. Open to all!</EventText>
              <EventTime>1 PM - 3 PM</EventTime>
              <EventDate>21st October</EventDate>
            </EventContent>
          </EventCard>
        </EventsWrapper>
      </EventsSection>
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
            title="Tazkiyah Tuesdays"
            text="Join us every Tuesday for a weekly gathering with a focus on spiritual growth and rejuvenation of the heart through a diverse lineup of esteemed teachers, scholars, and peer-led discussions."
            time="Maghrib to Isha"
            location="Muslim Community Center"
            date="Every Tuesday"
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
            title="YAP Book Club"
            text="Join our engaging youth events, every Friday. From inspiring workshops to interactive activities, we aim bridge to traditional values with modern experiences."
            time="Asr to Isha"
            location="Muslim Community Center"
            date="Every Thursday"
          />
          <ProgramCard
            imgSrc={Placeholder4}
            title="Middle School Halaqah"
            text="Join our engaging youth events, every Friday. From inspiring workshops to interactive activities, we aim bridge to traditional values with modern experiences."
            time="Asr to Isha"
            location="Muslim Community Center"
            date="Every Friday"
          />
          <ProgramCard
            imgSrc={ShaykhAbdussamadPortrait}
            title="Fajr & Fiqh"
            text="Join us every Saturday for lessons on fiqh after Fajr with Imam Mohamed Abdullahi."
            time="After Fajr"
            location="Muslim Community Center"
            date="Every Saturday"
          />
        </ProgramsWrapper>
      </ProgramsSection>
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
          <ServiceCard subtitle="Converts" to="/mccmd/converts">
            Whether you are just interested in Islam, have some questions, or
            are ready to convert, we are happy to speak to you and answer any
            questions you have.
          </ServiceCard>
          <ServiceCard subtitle="Marriage" to="/mccmd/marriage">
            From premarital counseling to nikah ceremonies, we ensure your union
            begins with the right blessings and preparations.
          </ServiceCard>
          <ServiceCard subtitle="Janazas" to="/mccmd/janazas">
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
