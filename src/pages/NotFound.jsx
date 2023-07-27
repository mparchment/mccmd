import styled from 'styled-components';

const NotFoundWrapper = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    padding: 25px;
    padding-top: 0;

    font-size: 14px;
    font-weight: 500;
`;

const Title = styled.h2`
    font-weight: 800;    
    font-size: 200%;
    color: #333;
`;

function NotFound() {

    return (
        <NotFoundWrapper>
            <Title>Page Not Found</Title>
            </NotFoundWrapper>
    )
}

export default NotFound