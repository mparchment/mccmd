import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useIsMobile from '../hooks/useIsMobile';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const FooterWrapper = styled.div`
    width: 100%;
    background-color: #333;
    color: white;
    margin: 0;

    margin-top: 35px;
`;

const FooterContainer = styled.div`
    width: 80%;
    display: flex;
    gap: 10px;
    flex-direction: column;
    padding: 25px;

    @media (min-width: 768px) {
        width: 64%;
        margin: 0 auto;
    }
`;

const FooterText = styled.div`
    font-size: 12px;

    &:first-of-type {
        margin-top: 15px;
    }
`;

const Title = styled.h3`
    font-weight: 800;
    font-size: 18px;
    color: white;
    text-transform: uppercase;
    margin-bottom: 5px;
`;

const Subtitle = styled.h5`
    margin-top: 5px;
    margin-bottom: 5px;
    text-transform: uppercase;
`

const NewsletterInput = styled.input`
    width: 57.5%;
    height: 30px;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding-left: 10px;
    margin-right: 10px;

    @media (min-width: 768px) {
        width: 46%;
    }
`;

const SubscribeButton = styled.button`
    background-color: #fff;
    border: none;
    border-radius: 7.5px;
    color: #333;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 12px;
    padding: 10px 15px;
    text-transform: uppercase;

    @media (min-width: 768px) {
        width: 25%;
    }
`;

const FooterLink = styled(Link)`
    color: inherit;
`;

const Form = styled.form`
    white-space: nowrap;

    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
`

const FooterBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const BoxDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    gap: 10px;
`;

const Icons = styled.div`
    display: flex;
    margin-top: 20px;
    flex-direction: row;
    gap: 15px;
`;

const IconLink = styled.a`
    color: #dcdde1;
    text-decoration: none;

    &:hover {
        color: inherit;
    }
`;

function Footer() {
    const isMobile = useIsMobile();

    return (
        <FooterWrapper>
            <FooterContainer>
                <Title>Muslim Community Center</Title>
                {isMobile && <>
                    <Subtitle>Subscribe to our Newsletter</Subtitle>
                    <Form><NewsletterInput type="text" placeholder="Your e-mail address"/><SubscribeButton>Subscribe</SubscribeButton></Form>
                    <FooterText>Muslim Community Center is a registered 501(c)(3) chartiable non-profit organization that has been serving the spiritual needs of the Muslim community in Montgomery County, MD for decades.</FooterText>
                    <FooterText>Our mission: to promote brotherhood and human dignity among all by developing an environment of understanding, compassion, and justice in personal and professional life.</FooterText>
                    <FooterText>15200 New Hampshire Ave, Silver Spring, MD 20905</FooterText>
                    <FooterText><FooterLink to="/mccmd/about-us">About Us</FooterLink> | <FooterLink to="/mccmd/donate">Donate Today</FooterLink> | <FooterLink to="/mccmd/contact-us">Contact Us</FooterLink></FooterText>
                    <FooterText>© 2023 Muslim Community Center. All rights reserved.</FooterText>
                    </>
                }
                {!isMobile && <FooterBox>
                    <BoxDiv><FooterText>Muslim Community Center is a registered 501(c)(3) chartiable non-profit organization that has been serving the spiritual needs of the Muslim community in Montgomery County, MD for decades.</FooterText>
                    <FooterText>Our mission: to promote brotherhood and human dignity among all by developing an environment of understanding, compassion, and justice in personal and professional life.</FooterText>
                    <FooterText>15200 New Hampshire Ave, Silver Spring, MD 20905</FooterText>
                    <FooterText><FooterLink to="/mccmd/about-us">About Us</FooterLink> | <FooterLink to="/mccmd/donate">Donate Today</FooterLink> | <FooterLink to="/mccmd/contact-us">Contact Us</FooterLink></FooterText>
                    <FooterText>© 2023 Muslim Community Center. All rights reserved.</FooterText></BoxDiv>
                    <BoxDiv><Subtitle>Subscribe to our Newsletter</Subtitle>
                    <Form><NewsletterInput type="text" placeholder="Your e-mail address"/><SubscribeButton>Subscribe</SubscribeButton></Form>
                    <Icons>
                        <IconLink href='https://www.facebook.com/mccmaryland/'><FacebookIcon style={{ fontSize: '250%' }}/></IconLink>
                        <IconLink href='https://www.instagram.com/mccmaryland/'><InstagramIcon style={{ fontSize: '250%' }}/></IconLink>
                        <IconLink href='https://www.youtube.com/@MCCMD'><YouTubeIcon style={{ fontSize: '250%' }}/></IconLink>
                    </Icons>
                    </BoxDiv>
                </FooterBox>}
            </FooterContainer>
        </FooterWrapper>
    )
}

export default Footer