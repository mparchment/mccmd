import { useState, useEffect, useCallback, useContext } from "react";
import { useSwipeable } from "react-swipeable";

import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";

import useIsMobile from "../hooks/useIsMobile";

import ProgramCard from "../components/ProgramCard";
import ServiceCard from "../components/ServiceCard";
import OldCalendar from "../components/Calendar";
import WeeklyCalendar from "../components/WeeklyCalendar";

import MCCFront from "../assets/mcc-front.jpg";
import ShaykhAbdussamadPortrait from "../assets/shaykh-abdussamad-portrait.png";

import PostsContext from "../contexts/PostsContext";
import { Link } from "react-router-dom";

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
  Icon,
} from "./Home.styles";

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

function stripHtml(html) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
}

function Home() {
  const isMobile = useIsMobile();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);
  const { posts } = useContext(PostsContext);

  const postData = posts.map((post) => ({
    id: post.id,
    slug: post.slug,
    image: post.featuredMedia || MCCFront,
    title: stripHtml(post.title.rendered),
    text: stripHtml(post.excerpt.rendered),
    content: stripHtml(post.content.rendered),
  }));

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % postData.length);
    setAutoSlide(false);
  }, [setCurrentIndex, setAutoSlide, postData.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + postData.length) % postData.length
    );
    setAutoSlide(false);
  }, [setCurrentIndex, setAutoSlide, postData.length]);

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
        setCurrentIndex((prevIndex) => (prevIndex + 1) % postData.length);
      }, 5000);

      return () => clearInterval(slideTimer);
    }
  }, [autoSlide]);

  return (
    <>
      <WhiteBackground />
      {isMobile ? (
        <ImageWrapper>
          <SlidesContainer
            {...handlers}
            style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
          >
            {postData.map((slide, index) => (
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
            {postData.map((slide, index) => (
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
          <PreviousButton onClick={prevSlide}>{"\u2039"}</PreviousButton>
          <NextButton onClick={nextSlide}>{"\u203a"}</NextButton>
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
