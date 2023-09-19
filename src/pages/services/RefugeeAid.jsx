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

    min-height: 100vh;

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


function RefugeeAid() {
    return (
        <>
            
            <Wrapper>
                <Title>Refugee Aid</Title>
                <Subtitle>Supporting Refugees Beyond the Basics</Subtitle>
                
                <p>We are deeply committed to assisting refugees who arrive in Maryland. We recognize the challenges that refugees face once initial agency support comes to an end, and we aim to bridge that gap by providing essential services in areas such as health, housing, food, and mentorship.</p>
                
                <p>Our Refugee Help initiative offers financial assistance to refugees, covering their rents to prevent evictions. Additionally, we provide support for medical expenses and offer monetary assistance to those who are unemployed, ensuring that they have the resources they need to rebuild their lives.</p>

                <Subtitle>Refugee English Program</Subtitle>

                <p>Understanding the importance of communication, we've launched the Refugee English Program (REP). Currently operating virtually, the REP matches volunteer tutors with adult male and female refugees, offering weekly one-on-one English lessons. We warmly invite volunteers to join us; we provide training sessions and regular meet-up chat sessions, ensuring that our volunteers have all the tools they need to make a difference. This initiative offers a fulfilling opportunity to both share knowledge and learn from the rich experiences of our refugee community.</p>

                <p>For more details about our programs or if you're interested in volunteering for the REP, please contact Karen Bashir at <a href="mailto:karen.bashir@mccmd.org">karen.bashir@mccmd.org</a>. Together, we can make a difference in the lives of those seeking a fresh start.</p>
            </Wrapper>
        </>
    )
}


export default RefugeeAid

