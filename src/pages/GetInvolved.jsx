import styled from 'styled-components';

const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px;
    padding-top: 0;
    margin-bottom: 70px;
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
                <Title>Get Involved</Title>
                <div>
                    <h3>Membership</h3>
                    <p>
                    We invite you to make your mark by becoming a registered member. With a variety of membership options, you can engage in a way that suits your unique capacities and interests. 
                    </p>
                    <p>
                    Membership dues per calendar year are:
                    <ul>
                        <li>Active Member: $100 for an individual, $200 for a family</li>
                        <li>Associate Member: $50 for an individual, $100 for a family</li>
                    </ul>
                    All membership contributions are considered as donations to the masjid and directly support our operating expenses.
                    <p>
                    Additionally, the benefits of membership include:
                    <ul>
                        <li>Voting Rights (for active members)</li>
                        <li>Committee Participation (eligibility to be a member of a committee)</li>
                    </ul>
                    </p>
                    By becoming a member, you are not just contributing to the growth and sustainability of our community, but also getting the opportunity to shape its future.
                    </p>
                </div>
                <div>
                    <h3>Volunteering</h3>
                    <p>
                        Over the past three decades, we have relied upon unrelenting support of the Muslim community. We are always looking for dedicated volunteers to continue to offer several programs and services. 
                    </p>
                    <p>
                        If you have some time and would like to help, please fill out <a href="">this</a> form and we will get back to you as soon as possible.
                    </p>
                </div>
            </AboutWrapper>
        </>
    )
}

export default About