import styled from 'styled-components';
import BackgroundImage from "../assets/page-background.webp"

export const PageBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${BackgroundImage});
    filter: grayscale(100%);
    background-size: contain;
    background-repeat: repeat;
    z-index: -1;

    @media (max-width:1366px) {
        display: none;
    }
`;
