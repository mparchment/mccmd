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

const DashboardContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 600px;
    gap: 40px;
`;

const DashboardDiv = styled.div`
    height: 100%;
    width: 50%;
`

const MembershipStatus = styled.span`
    color: #27ae60;
`;

function Dashboard() {
    return (
        <>
            
            <Wrapper>
                <Title>Dashboard</Title>
                <DashboardContainer>
                    <DashboardDiv>
                    <div>
                            <Subtitle>Membership: <MembershipStatus>Active</MembershipStatus></Subtitle>
                            <ul>
                                <li>Membership was last renewed on <strong>April 8, 2023</strong>.</li>
                                <li>Link to refer a member with auto-filled PDF for referrals.</li>
                                <li>Link to renew membership with auto-filled member name.</li>
                            </ul>
                        </div>
                        <div>
                            <Subtitle>Documents</Subtitle>
                            <ul>
                                <li>MCC Bylaws</li>
                                <li>Policies and Procedures</li>
                                <li>General Body Meetings</li>
                                <li>History of Donations</li>
                                <li>Year to Date</li>
                            </ul>
                        </div>
                    </DashboardDiv>
                    <DashboardDiv>
                        
                    </DashboardDiv>
                </DashboardContainer>
            </Wrapper>
        </>
    )
}

export default Dashboard