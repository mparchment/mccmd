import styled from 'styled-components';
import Card from '../components/ServiceCard'
import Shahadas from '../assets/placeholder-image.png'

import { PageBackground } from '../components/PageBackground';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px;

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

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (min-width:1366px) {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 35px;
        margin-bottom: 50px;
    }
`;

const Divider = styled.div`
    width: 12.5%;
    height: 3px;
    background-color: #b98474;
    margin: 0 auto;
    margin-bottom: 50px;
    margin-top: 25px;
`;

const Title = styled.h2`
    font-weight: 800;
    font-size: 200%;
    color: #333;
`;

const Cell = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 15px;
    width: 100%;
    
    @media (max-width:1366px) {
        margin-bottom: 40px;
    }
`;

const Image = styled.img`
    height: auto;
    max-height: 155px;
    object-fit: cover;
    align-self: flex-start;

    @media(max-width:1366px) {
        display: none;
    }
`;

function ServicesPage() {
    return (
        <>
            <PageBackground />
            <Wrapper>
                <Title>Services</Title>
                <p>
                At Muslim Community Center, we are committed to serving your needs and guiding you in various aspects of Islamic life. From embracing new believers through Shahadas to facilitating sacred rites like Nikahs and Janazahs, our wide array of services ensures that you always have a place to turn. Whether you are planning a private gathering, seeking consultation with the Imam, or looking to be part of our community outreach initiatives like the Food Pantry and Refugee Aid, we offer affordable options tailored to your needs.
                </p>
                <Divider/>
                <Box>
                    <Cell>
                        <Image src={Shahadas} alt="Shahadas" />
                        <Card subtitle="Shahadas" to="/mccmd/services/shahadas">
                            Whether you are just interested in Islam, have some questions, or are ready to convert, we are happy to speak to you and guide you through the Shahada. 
                        </Card>
                    </Cell>
                    <Cell>
                        <Image src={Shahadas} alt="Shahadas" />
                        <Card subtitle="Meet the Imam" to="/mccmd/services/imam">
                            Book a meeting up to two weeks in advance with the Imam to discuss one of a range of topics. 
                        </Card>
                    </Cell>
                    <Cell>
                        <Image src={Shahadas} alt="Shahadas" />
                        <Card subtitle="Clinic" to="/mccmd/services/clinic">
                            To book rooms for other events or Islamic celebrations, from aqiqas and private gatherings to conferences, we offer rooms at reasonable rates of hire.
                        </Card>
                    </Cell>
                    <Cell>
                        <Image src={Shahadas} alt="Shahadas" />
                        <Card subtitle="Nikahs" to="/mccmd/services/nikahs">
                            Offering a unique & stunning yet economical & eco-friendly venue, getting married at Muslim Community Center is the experience of a lifetime. 
                        </Card>
                    </Cell>
                    <Cell>
                        <Image src={Shahadas} alt="Shahadas" />
                        <Card subtitle="Janazas" to="/mccmd/services/janazas">
                            We ease the burden of bereavement by facilitating preparation of the deceased for burial through use of our dedicated mortuary and leading Janazah prayers. 
                        </Card>
                    </Cell>
                    <Cell>
                        <Image src={Shahadas} alt="Shahadas" />
                        <Card subtitle="Zakat" to="/mccmd/services/zakat">
                            To book rooms for other events or Islamic celebrations, from aqiqas and private gatherings to conferences, we offer rooms at reasonable rates of hire.
                        </Card>
                    </Cell>
                    <Cell>
                        <Image src={Shahadas} alt="Shahadas" />
                        <Card subtitle="Food Pantry" to="/mccmd/services/food-pantry">
                            Book to join us on weekend mornings for a guided walk through our mosque, or on weekdays if you are part of an organisation such as a school or a local community group.
                        </Card>
                    </Cell>
                    <Cell>
                        <Image src={Shahadas} alt="Shahadas" />
                        <Card subtitle="Refugee Aid" to="/mccmd/services/refugee-aid">
                            Book to join us on weekend mornings for a guided walk through our mosque, or on weekdays if you are part of an organisation such as a school or a local community group.
                        </Card>
                    </Cell>
                    <Cell>
                        <Image src={Shahadas} alt="Shahadas" />
                        <Card subtitle="General Events" to="/mccmd/services/general-events">
                            To book rooms for other events or Islamic celebrations, from aqiqas and private gatherings to conferences, we offer rooms at reasonable rates of hire.
                        </Card>
                    </Cell>
                </Box>
            </Wrapper>
        </>
    )
}

export default ServicesPage