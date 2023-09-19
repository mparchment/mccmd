import styled from 'styled-components';
import { PageBackground } from '../../components/PageBackground';
import BoardCell from '../../components/BoardCell';
import PortraitPlaceholder from '../../assets/portrait-placeholder.png';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px;
    padding-top: 0;

    font-size: 14px;
    font-weight: 500;

    @media (min-width:1366px) {
        width: 50%;
        padding-top: 10px;
        margin: 0 auto;

        padding-left: 7.5%;
        padding-right: 7%;

        background-color: #fff;
    }
`;

const Title = styled.h2`
    font-weight: 800;    
    font-size: 200%;
    color: #333;
`;

const AboutBox = styled.div`
    display: flex;
    flex-direction: row;
    gap: 40px;

    @media (max-width: 1366px) {
        flex-direction: column;
        gap: 0;
    }
`;

const Subtitle = styled.h3`
    &:first-of-type {
        margin-top: 25px;
    }
    font-weight: 800;
`;

const ImamTitle = styled.h2`
    align-self: center;
    margin-bottom: 10px;
`;

const Portrait = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    align-self: center;
    margin-bottom: 25px;
`;

const BoardBox = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 40px;

    margin-bottom: 25px;
    margin-top: 25px;
`;

const BoardHeading = styled.h3`
    align-self: center;
    margin-bottom: 25px;
`;

const ImamSubtitle = styled.h3`
    align-self: center;
    margin-top: 0;
    margin-bottom: 10px;
    font-weight: 400;
`;


function AboutPage() {
    return (
        <>
            
            <Wrapper>
                <Title>Meet the Imam</Title>
                    <Subtitle>From Shahadas to Learning About Islam</Subtitle>
                    <p>At the Muslim Community Center, we offer a comprehensive program for new converts to Islam. This program is designed to guide individuals through their journey of embracing Islam, starting from the Shahada (declaration of faith) and extending to in-depth learning about Islamic teachings and practices.</p>
                    
                    <p>We understand that embracing a new faith is a significant step in one's life, and we are committed to providing a supportive and welcoming environment for all new converts. Our program is open to everyone, regardless of background or previous religious beliefs.</p>

                    <p>If you are interested in joining our program for new converts, please contact us at [...] We look forward to welcoming you to our community!</p>    
            </Wrapper>
        </>
    )
}

export default AboutPage

