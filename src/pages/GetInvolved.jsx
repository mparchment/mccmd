import styled from 'styled-components';
import { PageBackground } from '../components/PageBackground';

const GetInvolvedWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px;
    padding-top: 0;
    margin-bottom: 70px;

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

const Link = styled.a`
    color: inherit;
    font-weight: 600;
`;

function GetInvolved() {
    return (
        <>
            <PageBackground/>
            <GetInvolvedWrapper>
                <Title>Get Involved</Title>
                <div>
                    <h3>Membership</h3>
                    <p>
                    We invite you to contribute to the Muslim Community Center by becoming a registered member. With different membership types available, you can engage in a way that aligns with your unique situation and interests.
                    </p>
                    <p>
                    Membership types include:
                    </p>
                    <ul>
                        <li><strong>Active Individual Member:</strong> $100, open to Muslims over 18 who are citizens or hold certain types of visas.</li>
                        <li><strong>Active Family Member:</strong> $200, for families with two related adults living in the same home. Max 2 votes per family.</li>
                        <li><strong>Active Student Member:</strong> $25, for full-time students between 18 to 24 years old in the Washington, D.C. Metropolitan area.</li>
                        <li><strong>Active Distinguished Member:</strong> Granted to those who have provided exemplary service to the MCC community.</li>
                        <li><strong>Honorary Member:</strong> Granted to individuals for distinguished service to the Muslim community. No dues required.</li>
                    </ul>
                    <p>
                    All membership contributions directly support our operating expenses and are non-refundable.
                    </p>
                    <p>
                    Benefits of being an active member in good standing include:
                    </p>
                    <ul>
                        <li>Voting rights in the general body meeting</li>
                        <li>Eligibility to hold elected office</li>
                        <li>Committee participation</li>
                    </ul>
                    <p>
                    Annual dues are payable on <strong>December 1st</strong> of each year. To be eligible for voting in annual general body meetings, membership must be renewed by <strong>January 31st</strong> of that year. Dues may be prorated for new members and can sometimes be paid in installments. Dues waivers may be available upon request.
                    </p>
                    <p>
                    If you allow your membership to lapse for a year or more and wish to rejoin, you'll need to pay the current year’s dues and wait a year to gain voting rights and eligibility to hold elected office.
                    </p>
                    <p>
                    By becoming a member, you are contributing to the growth and sustainability of our community and gaining the opportunity to shape its future. Initiate your membership by filling out <Link href="">this</Link> form.
                    </p>
                </div>
                <div>
                    <h3>Volunteering</h3>
                    <p>
                        The Muslim Community Center has thrived on the dedicated support of volunteers for over three decades. We are continually in search of committed individuals to help us offer a range of programs and services.
                    </p>
                    <p>
                        If you're interested in lending a hand, please fill out <Link href="">this</Link> form, and we will get back to you as soon as possible.
                    </p>
                </div>
            </GetInvolvedWrapper>
        </>
    )
}

export default GetInvolved;