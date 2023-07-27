import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterWrapper = styled.div`
    width: 100%;
    background-color: #333;
    color: white;
    margin: 0;
`;

const FooterContainer = styled.div`
    width: 80%;
    display: flex;
    gap: 10px;
    flex-direction: column;
    padding: 25px;
`;

const FooterText = styled.div`
    font-size: 12px;

    &:first-of-type {
        margin-top: 15px;
    }
`;

const AddressText = styled.p`
    margin-top: 2px;
    margin-bottom: 2px;
`

const Title = styled.h3`
    font-weight: 800;
    font-size: 20px;
    color: white;
    text-transform: uppercase;
    margin-bottom: 5px;
`;

const Subtitle = styled.h4`
    margin-top: 5px;
    margin-bottom: 5px;
    text-transform: uppercase;
`

const NewsletterInput = styled.input`
    width: 60%;
    height: 30px;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding-left: 10px;
    margin-right: 10px;
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
`;

const FooterLink = styled(Link)`
    color: inherit;
`;

function Footer() {
    return (
        <FooterWrapper>
            <FooterContainer>
                <Title>Muslim Community Center</Title>
                <Subtitle>Subscribe to our Newsletter</Subtitle>
                <form><NewsletterInput type="text" placeholder="Your e-mail address"/><SubscribeButton>Subscribe</SubscribeButton></form>
                <FooterText>Muslim Community Center is a registered 501(c)(3) chartiable non-profit organization that has been serving the spiritual needs of the Muslim community in Montgomery County, MD for decades.</FooterText>
                <FooterText>Our mission: to promote brotherhood and human dignity among all by developing an environment of understanding, compassion, and justice in personal and professional life.</FooterText>
                <FooterText><AddressText>15200 New Hampshire Ave</AddressText><AddressText>Silver Spring, MD 20905</AddressText></FooterText>
                <FooterText><FooterLink to="/mccmd/about">About Us</FooterLink> | <FooterLink to="/mccmd/donate">Donate Today</FooterLink> | <FooterLink to="/mccmd/contactus">Contact Us</FooterLink></FooterText>
                <FooterText>© 2023 Muslim Community Center. All rights reserved.</FooterText>
            </FooterContainer>
        </FooterWrapper>
    )
}

export default Footer