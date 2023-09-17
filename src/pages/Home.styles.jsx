import styled from 'styled-components';
import { Link as PageLink } from 'react-router-dom';

export const ProgramTitle = styled.h2`
    font-weight: 600;
    text-transform: uppercase;
    font-size: 175%;
    color: inherit;
    user-select: none;
`;

export const Divider = styled.div`
    width: 12.5%;
    height: 3px;
    background-color: #b98474;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 35px;
    margin: 0 auto;
`;

export const MainImage = styled.img`
    width: 100vw;
    height: 555px;
    object-fit: cover;
    filter: brightness(70%);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
`;

export const ProgramsWrapper = styled.div`
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

export const Link = styled(PageLink)`
    color: #333;
    font-weight: 600;
    text-decoration: underline;
`;

export const TitleWrapper = styled.div`
    text-align: center;
    margin-bottom: 35px;
`;

export const IntroductionWrapper = styled.div`
    width: 63%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin: 0 auto;
    gap: 30px;

    @media (max-width: 1440px) {
        width: 75%;
    }

    @media (max-width: 1366px) {
        width: 100%;
    }
`;

export const IntroductionCard = styled.div`
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

export const IntroductionSubtitle = styled.h3`
    text-transform: uppercase;
    font-weight: 700;
    color: #333;
    margin-bottom: 8px;
`;

export const ReadMoreLink = styled(Link)`
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

export const ReadMoreWrapper = styled.div`
    margin-top: 18px;
    whitespace: nowrap;
    display: flex;
    flex-direction: row;
    align-self: center;
    width: fit-content;
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

export const SlidesContainer = styled.div`
    display: flex;
    transition: transform 0.5s ease-in-out;
`;

export const Slide = styled.div`
    flex: 0 0 100vw;
    height: calc(100vw / 3.57);
    position: relative;
`;

export const OverlayContent = styled.div`
  position: absolute;
  top: 46%;
  left: 47%;
  transform: translate(-50%, -50%);
  color: #fff;
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
  font-size: 2em;
  text-align: left;
  text-shadow: 
    2px 0 0 rgba(0, 0, 0, 1),
    0 2px 0 rgba(0, 0, 0, 1),
    2px 2px 0 rgba(0, 0, 0, 1); 
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1.34em;
    margin-bottom: 0;
    margin-top: 0;
    }

    @media (max-width: 400px) {
        font-size: 1em;
    }
`;

export const OverlayText = styled.p`
  margin-bottom: 2em;
  font-size: 1.1em;
  text-align: left;
  font-weight: 500;
  text-shadow: 
    2px 0 0 rgba(0, 0, 0, 0.8),
    0 2px 0 rgba(0, 0, 0, 0.8),
    2px 2px 0 rgba(0, 0, 0, 0.8);  

    @media (max-width: 768px) {
        font-size: 1em;
        margin-bottom: 0;
        margin-top: 0;
    }

    @media (max-width: 400px) {
        font-size: 0.93em;
    }
`;

export const OverlayButton = styled(Link)`
    padding: 1em 1.33em;
    font-size: 14px;
    color: #531f19;
    font-weight: 600;
    background-color: #fff;
    border: none;
    text-decoration: none;
    text-transform: uppercase;

    @media (max-width: 768px) {
        align-self: flex-start;
    }
`;

export const ServicesBox = styled.div`
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

export const ServicesWrapper = styled.div`
    @media (min-width: 768px) {
        width: 80%;
        max-width: 1366px;
        margin: 0 auto;
        margin-bottom: 30px;
    }
`;

export const ProgramsSection = styled.div`
    padding-top: 30px;
    padding-bottom: 20px;
    margin-bottom: 55px;
    background: #333;
    color: #fff;

    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
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

export const SlideContent = styled.div`
    transition: opacity 0.5s ease-in-out;
    opacity: ${props => props.fadeOut ? '0' : '1'};
    display: ${props => props.fadeOut ? 'none' : 'flex'};
    z-index: ${props => props.fadeOut ? '-1' : '1'};

    display: flex;
    flex-direction: column;

    gap: 10px;
`;

export const FollowUsLink = styled.div`
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

export const Icons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    gap: 10px;
`;


export const IconLink = styled.a`
    color: inherit;
    text-decoration: none;
`;

export const Icon = styled.img`
    width: 30px;
`;