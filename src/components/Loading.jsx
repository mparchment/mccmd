import styled from 'styled-components';
import { RaceBy } from '@uiball/loaders'
import MCCLogo from '../assets/logo-small.png';

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255); 
  z-index: 1000;
  transition: opacity 0.5s ease-in-out; // Adjust duration as needed
`;

const Logo = styled.img`
    margin-bottom: 25px;
    height: 50px;
`

function Loading() {
  return (
    <LoadingWrapper>
        <Logo src={MCCLogo}/>
        <RaceBy size={100} color="#b98474"/>
    </LoadingWrapper>
  );
}

export default Loading;
