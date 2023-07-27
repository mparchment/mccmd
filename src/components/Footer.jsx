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

const Form = styled.form`
    white-space: nowrap;
`

function Footer() {
    return (
        <FooterWrapper>
            <FooterContainer>
                <Title>Muslim Community Center</Title>
                <Subtitle>Subscribe to our Newsletter</Subtitle>
                <Form><NewsletterInput type="text" placeholder="Your e-mail address"/><SubscribeButton>Subscribe</SubscribeButton></Form>
                <FooterText>Muslim Community Center is a registered 501(c)(3) chartiable non-profit organization that has been serving the spiritual needs of the Muslim community in Montgomery County, MD for decades.</FooterText>
                <FooterText>Our mission: to promote brotherhood and human dignity among all by developing an environment of understanding, compassion, and justice in personal and professional life.</FooterText>
                <FooterText>15200 New Hampshire Ave, Silver Spring, MD 20905</FooterText>
                <FooterText><FooterLink to="/mccmd/about-us">About Us</FooterLink> | <FooterLink to="/mccmd/donate">Donate Today</FooterLink> | <FooterLink to="/mccmd/contact-us">Contact Us</FooterLink></FooterText>
                <FooterText>© 2023 Muslim Community Center. All rights reserved.</FooterText>
            </FooterContainer>
        </FooterWrapper>
    )
}

export default Footer