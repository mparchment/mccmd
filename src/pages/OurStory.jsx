import styled from 'styled-components';

import BoardCell from '../components/BoardCell';
import PortraitPlaceholder from '../assets/portrait-placeholder.png';

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
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
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


function OurStory() {
    return (
        <>
            
            <Wrapper>
                <Title>Our Story</Title>
                    <p>The Muslim Community Center has been a cornerstone of the Muslim community in the Maryland, Virginia, and Washington, D.C. area for decades. Initially conceived in September 1976, the idea blossomed into a dedicated center that officially opened its doors in May 1981. Since then, Muslim Community Center has grown exponentially, serving thousands of families and becoming a nationally recognized Islamic center.</p>

                    <p>What began as a vision has now grown into a sprawling community space that offers a multitude of services and programs. The center has been instrumental in not just spiritual guidance but also in community development, educational outreach, and social programs.</p>

                    <p>Over the years, Muslim Community Center has evolved to meet the changing needs of the Muslim community, while remaining steadfast in its original mission. Its growth and progress are testaments to the enduring commitment of its members, volunteers, and leaders, who have worked tirelessly to make the center what it is today.</p>

                    <p>Today, the Muslim Community Center stands as a beacon of Islamic values and a hub for cultural exchange and understanding. It represents not just a place of worship, but a community united in faith and purpose, with a legacy that continues to inspire.</p>

            </Wrapper>
        </>
    )
}

export default OurStory