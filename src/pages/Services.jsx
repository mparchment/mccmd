import styled from 'styled-components';
import ServiceCard from '../components/ServiceCard'

const ServicesBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 25px;
    }
`;

const ServicesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 0;

    font-size: 14px;
    font-weight: 500;

    @media (min-width: 768px) {
        padding-top: 10px;
        margin: 0 auto;
    }
`;

const Divider = styled.div`
    width: 6.25%;
    height: 3px;
    background-color: #b98474;
    margin: 0 auto;
    margin-bottom: 50px;
`;

const Title = styled.h2`
    font-weight: 800;
    font-size: 200%;
    color: #333;
`;

const TitleWrapper = styled.div`
    width: 50%;
    margin: 0 auto;

    padding: 25px;
    padding-top: 0;
`;

const ServicesBoxWrapper = styled.div`
    width: 70%;
    margin: 0 auto;
`;

function Services() {
    return (
        <>
            <ServicesWrapper>
                <TitleWrapper>
                    <Title>Services</Title>
                    <p>
                    At Muslim Community Center, we are committed to serving your needs and guiding you in various aspects of Islamic life. From embracing new believers through Shahadas to facilitating sacred rites like Nikahs and Janazahs, our wide array of services ensures that you always have a place to turn. Whether you are planning a private gathering, seeking consultation with the Imam, or looking to be part of our community outreach initiatives like the Food Pantry and Refugee Aid, we offer affordable options tailored to your needs.
                    </p>
                </TitleWrapper>
                <Divider/>
                <ServicesBoxWrapper>
                    <ServicesBox>
                        <ServiceCard subtitle="Shahadas" to="/mccmd/services/shahadas">
                            Whether you are just interested in Islam, have some questions, or are ready to convert, we are happy to speak to you and guide you through the Shahada. 
                        </ServiceCard>
                        <ServiceCard subtitle="Meet the Imam" to="/mccmd/services/imam">
                            Book a meeting up to two weeks in advance with the Imam to discuss one of a range of topics. 
                        </ServiceCard>
                        <ServiceCard subtitle="Clinic" to="/mccmd/services/clinic">
                            To book rooms for other events or Islamic celebrations, from aqiqas and private gatherings to conferences, we offer rooms at reasonable rates of hire.
                        </ServiceCard>
                        <ServiceCard subtitle="Nikahs" to="/mccmd/services/nikahs">
                            Offering a unique & stunning yet economical & eco-friendly venue, getting married at Muslim Community Center is the experience of a lifetime. 
                        </ServiceCard>
                        <ServiceCard subtitle="Janazas" to="/mccmd/services/janazas">
                            We ease the burden of bereavement by facilitating preparation of the deceased for burial through use of our dedicated mortuary and leading Janazah prayers. 
                        </ServiceCard>
                        <ServiceCard subtitle="Zakat" to="/mccmd/services/zakat">
                            To book rooms for other events or Islamic celebrations, from aqiqas and private gatherings to conferences, we offer rooms at reasonable rates of hire.
                        </ServiceCard>
                        <ServiceCard subtitle="Food Pantry" to="/mccmd/services/food-pantry">
                            Book to join us on weekend mornings for a guided walk through our mosque, or on weekdays if you are part of an organisation such as a school or a local community group.
                        </ServiceCard>
                        <ServiceCard subtitle="Refugee Aid" to="/mccmd/services/refugee-aid">
                            Book to join us on weekend mornings for a guided walk through our mosque, or on weekdays if you are part of an organisation such as a school or a local community group.
                        </ServiceCard>
                        <ServiceCard subtitle="General Events" to="/mccmd/services/general-events">
                            To book rooms for other events or Islamic celebrations, from aqiqas and private gatherings to conferences, we offer rooms at reasonable rates of hire.
                        </ServiceCard>
                    </ServicesBox>
                </ServicesBoxWrapper>
            </ServicesWrapper>
        </>
    )
}

export default Services