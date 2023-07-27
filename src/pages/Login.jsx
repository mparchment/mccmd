import styled from 'styled-components';

const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
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

function About() {
    return (
        <>
            <AboutWrapper>
                <Title>Login</Title>
            </AboutWrapper>
        </>
    )
}

export default About