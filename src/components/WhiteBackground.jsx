import styled from 'styled-components';

export const WhiteBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    
    z-index: -1;

    @media (max-width:1366px) {
        display: none;
    }
`;
