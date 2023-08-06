import styled from 'styled-components';
import BackgroundImage from "../assets/page-background.jpg"

export const PageBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${BackgroundImage});
    background-size: cover;
    z-index: -1;

    @media (max-width: 768px) {
        display: none;
    }
`;