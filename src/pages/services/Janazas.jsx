import styled from 'styled-components';
import { PageBackground } from '../../components/PageBackground';
import BoardCell from '../../components/BoardCell'; // Note: You didn't use this in AboutPage, ensure its usage if needed
import PortraitPlaceholder from '../../assets/portrait-placeholder.png'; // Note: Unused in the given AboutPage

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px;
    padding-top: 0;

    min-height: 100vh;

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
    /* ... existing styles ... */
`;

const Subtitle = styled.h3`
    /* ... existing styles ... */
`;

const InfoParagraph = styled.p`
    /* Add any specific styles for the paragraphs, if needed. */
`;

function JanazahPage() {
    return (
        <>
            <PageBackground />
            <Wrapper>
                <Title>Janazah Services</Title>
               
                <InfoParagraph>
                    We at Muslim Community Center are deeply sorry for your loss. Our aim is to assist in the timely and respectful burial process in accordance with the Qur'an and Sunnah. The Prophet Muhammad (ﷺ) said, “مَن شهد الجنازة حتى يُصلَّى عليها فله قيراط، ومَن شهدَها حتى تُدفَنَ فله قيراطان”. Translated, "Whoever attends a funeral and attends the prayer will receive a qirat worth of reward and whoever attends the burial, he will receive two." One qirat is equivalent to great mountains' worth.
                </InfoParagraph>
                
                <InfoParagraph>
                    Should your friend or family member be near passing or has passed away, please reach out to the funeral service center of your preference to arrange for the burial. Some available services in the area include:
                    {/* You can convert the list of services to a styled list or component if required */}
                </InfoParagraph>

                <InfoParagraph>
                    For those requiring financial help for burial expenses, please <a href="link-to-form">complete this form</a>. If you need to purchase a burial plot, several cemeteries are available in the area:
                    {/* Convert the list of cemeteries to a styled list or component if required */}
                </InfoParagraph>

                <InfoParagraph>
                    To request a janazah service, <a href="link-to-request">click here</a>. After the service, ensure you obtain the death certificate and finalize any debts and accounts of the departed with the designated funeral services.
                </InfoParagraph>
                
                <InfoParagraph>
                    <strong>Note:</strong> Muslim Community Center neither endorses nor sponsors any listed services or cemeteries. Everyone should individually verify and decide based on the service and pricing. It's recommended to compare prices when selecting a service.
                </InfoParagraph>
                
            </Wrapper>
        </>
    )
}

export default JanazahPage;
