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

    height: 100vh;

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

function Marriage() {
    return (
        <>
            <PageBackground/>
            <Wrapper>
                <Title>Marriage Services</Title>

                Marriage is one of the most wonderful journeys an individual can embark on. At the Muslim Community Center, we understand its significance and are dedicated to ensuring that every couple is best prepared for this sacred voyage. We are here to guide and assist, ensuring that this journey commences with the right blessings and preparations.

                <Subtitle>Marriage Procedure at Muslim Community Center</Subtitle>

                The process of conducting the Nikah at our center generally follows these procedures:

                <ol>
                    <li>Bring a marriage <span style={{ fontWeight: 'bold'}}>license</span> from any Maryland court or a marriage <span style={{ fontWeight: 'bold'}}>certificate</span> from any other state.</li>
                    <li>Make an appointment with the imam within sixty days from the date the license was issued (no timeline for certificates).</li>
                    <li>All marriages at our center require premarital counseling, as outlined in the appointment links:
                        <ul>
                            <li>30 min – premarital counseling</li>
                            <li>1 hr – premarital counseling + marriage ceremony</li>
                        </ul>
                    </li>
                    <li>On the marriage appointment date, ensure to bring:
                        <ul>
                            <li>Yourself and your prospect (fiancé).</li>
                            <li>Wali (guardian) for the prospective bride, who must be a Muslim male.</li>
                            <li>Two witnesses, both of whom must be Muslim males.</li>
                            <li>Court papers and all relevant IDs (for both fiancés, the two witnesses, and the male wali).</li>
                            <li>Mahr (marriage dower) must be declared in monetary value to be recorded in the marriage certificate.</li>
                        </ul>
                    </li>
                    <li>The Muslim Community Center charges:
                        <ul>
                            <li>$300 for in-house ceremonies</li>
                            <li>Starting at $500 for outside ceremonies, subject to availability and special requests</li>
                        </ul>
                        Payments can be made through various modes, including cash, credit, and more.
                    </li>
                </ol>

                If you have any questions or need further information about our Nikah services, please contact us. We're here to ensure that your special day is conducted with dignity, respect, and in adherence to Islamic teachings.
                <Subtitle>Divorce Procedures at Muslim Community Center</Subtitle>

                Divorce, while an unfortunate reality, sometimes becomes necessary when reconciliation is not a viable option. At the Muslim Community Center, we aim to ensure the transition is as smooth and as just as possible, following the tenets of Islam.

                The general procedures for divorce at our center are as follows:

                <ol>
                    <li>Have the couple make an appointment with a spiritual counselor to explore if the marriage can be reconciled.</li>
                    <li>If there's potential for reconciliation:
                        <ul>
                            <li>A reconciliation strategy will be presented and followed up accordingly by the assigned spiritual counselor.</li>
                            <li>Additional input may be taken from a licensed marriage counselor, if necessary.</li>
                        </ul>
                    </li>
                    <li>If the marriage is deemed irreconcilable, then:
                        <ul>
                            <li>The contesting party will be identified and the following possibilities presented:</li>
                            <li>If both parties agree to a divorce, they may part on mutually agreed terms.</li>
                            <li>Considering the mahr (marriage dower):
                                <ul>
                                    <li>If the wife chooses to return the mahr or part of it, the divorce is termed as khul’.</li>
                                    <li>If there's no compensation involved, the divorce is referred to as a talaq. The spiritual counselor will provide instructions on its pronunciation during the session.</li>
                                </ul>
                            </li>
                            <li>If the husband contests:
                                <ul>
                                    <li>Same procedures for mahr apply as mentioned above.</li>
                                </ul>
                            </li>
                            <li>If the wife is contesting:
                                <ul>
                                    <li>She may request a divorce, offering to return the mahr and/or provide financial compensation. This is termed as khul’.</li>
                                    <li>If the husband declines even after compensation is offered, the wife can seek an annulment (faskh) by:
                                        <ul>
                                            <li>Initiating a court divorce at a circuit court.</li>
                                            <li>Upon finalization, she should present her court papers to the imam who will then contact the husband, providing an opportunity to carry out an Islamic divorce.</li>
                                            <li>If the husband still refuses, the annulment (faskh) process begins.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>A divorce certificate from Muslim Community Center will only be issued once the court divorce is finalized. This applies to all previous divorce scenarios.</li>
                            <li>The Muslim Community Center charges $300 for the divorce proceedings.</li>
                            <li>Payments can be made in multiple methods, including cash, credit, among others.</li>
                        </ul>
                    </li>
                </ol>

                For further details or queries related to our divorce procedures, kindly reach out to us. We prioritize the well-being and rights of all individuals and are dedicated to serving the community with compassion and understanding.

            </Wrapper>
        </>
    )
}

export default Marriage