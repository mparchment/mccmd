import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MCCFront from '../assets/mcc-front.jpg';

const ImageWrapper = styled.div`
    position: relative;
    width: 100vw;
`;

const OverlayContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: left;
`;

const OverlayTitle = styled.h1`
  font-size: 2em;
  text-align: center;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, .5);
  text-transform: uppercase;
`;

const OverlayText = styled.p`
  margin-bottom: 2em;
  font-size: 1.1em;
  text-align: left;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, .5);
`;

const MainImage = styled.img`
    width: 100vw;
    filter: brightness(80%);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
`;

const DonationTitle = styled.h1`
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;
`;

const desktopImages = [MCCFront];

function Donate() {
    return (
        <>
            <ImageWrapper>
                <MainImage src={desktopImages[0]} alt=""/>
                <OverlayContent>
                <OverlayTitle>Donate</OverlayTitle>
                <OverlayText>Be a part of helping us live Islam, together.</OverlayText>
                </OverlayContent>
            </ImageWrapper>
            <DonationTitle>Giving</DonationTitle>
        </>
    )
}

export default Donate