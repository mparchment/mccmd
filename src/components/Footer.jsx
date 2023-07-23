import styled from 'styled-components';

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
`;

const AddressText = styled.p`
    margin-top: 2px;
    margin-bottom: 2px;
`

function Footer() {
    return (
        <FooterWrapper>
            <FooterContainer>
                <h3>Muslim Community Center</h3>
                <FooterText>Muslim Community Center is a registered 501(c)(3) chartiable non-profit organization that has been serving the spiritual needs of the Muslim community in Montgomery County, MD for decades.</FooterText>
                <FooterText>Our mission: to promote brotherhood and human dignity among all by developing an environment of understanding, compassion, and justice in personal and professional life.</FooterText>
                <FooterText><AddressText>15200 New Hampshire Ave</AddressText><AddressText>Silver Spring, MD 20905</AddressText></FooterText>
                <FooterText>About Us | Donate Today | Contact Us</FooterText>
                <FooterText>© 2023 Muslim Community Center. All rights reserved.</FooterText>
            </FooterContainer>
        </FooterWrapper>
    )
}

export default Footer