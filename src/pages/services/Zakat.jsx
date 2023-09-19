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

const Verse = styled.div`
    self-align: center;
    max-width: 600px;
`;

function Zakat() {
    return (
      <>
        
        <Wrapper>
          <Title>Zakat</Title>
          <Subtitle>Give Your Zakat to Those in Need</Subtitle>
          <Verse>Keep up the prayer and pay the prescribed alms. Whatever good you store up for yourselves, you will find it with God: He sees everything you do. (Quran 2:110)</Verse>

          <p>At Muslim Community Center, we offer a comprehensive zakat program to help those in need. This program is designed to collect and distribute zakat to eligible recipients. If you would like to give your zakat through our program, please contact us at [...] We look forward to working with you to fulfill this important pillar of Islam.</p>
        </Wrapper>
      </>
    );
  }
  
  export default Zakat;

