import styled from 'styled-components';
import AdultHifdh from '../assets/adults-hifdh-placeholder.jpeg';
import ChildrenHifdh from '../assets/children-hifdh-placeholder.jpeg';
import IslamicSchool from '../assets/islamic-school-placeholder.jpeg';
import IslamicDaycare from '../assets/islamic-daycare-placeholder.jpeg';
import Placeholder from '../assets/placeholder-image.png';


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

const Subtitle = styled.h3`
    font-weight: 800;
    color: #333;
    text-transform: uppercase;
`;

const Card = styled.div`
    width: 72.5%;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
    padding: 25px 30px;
    border: 1px solid #ddd;
    box-shadow: 0 1px 9px #ddd;
    font-size: 14px;
    font-weight: 500;
    border-radius: 5px;
    cursor: pointer;

    @media (min-width:1366px) {
        flex-grow: 1;
        height: fit-content;
        display: flex;
        flex-direction: column;
        align-items: start;
    }

    &:hover {
        box-shadow: 0 1px 9px #b98474;
        border: 1px solid #b98474;
        transition: all 0.1s ease-in-out;
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
    height: 100%;
    
    @media (max-width:1366px) {
        margin-bottom: 40px;
    }
`;

const Image = styled.img`
    height: auto;
    max-height: 155px;
    object-fit: cover;
    align-self: center;

    @media(max-width:1366px) {
        display: none;
    }
`;

function EducationPage() {
    return (
        <>
            
            <Wrapper>
                <Title>Education</Title>
                <p>
                Our mission is to enrich our community by providing a diverse range of educational opportunities, all designed to nurture and strengthen Islamic knowledge, understanding, and practice. Each of our programs aims to instill love for the Quran and Sunnah, fortify hearts with iman and taqwa, and inspire the practical application of these teachings in daily life. Explore our programs below to find the right fit for you or your child. 
                </p>
                <Divider/>
                <Box>
                    <Cell>
                        <Image src={Placeholder}/>
                        <Card to="/mccmd/day-school">
                            <Subtitle>Day School</Subtitle>
                            <p>The K-9 Islamic School at MCC is committed to cultivating Islamic principles in our students through an engaging curriculum that instills love and understanding of the Quran and Sunnah. Our dedicated teachers provide a supportive and inclusive environment that encourages questioning, exploration, and the inquisitive spirit inherent in every child. </p>
                        </Card>
                    </Cell>
                    <Cell>
                        <Image src={Placeholder}/>
                        <Card to="/mccmd/after-school">
                            <Subtitle>Madrasa</Subtitle>
                            <p>We provide a unique Madrasa after-school program for children aged 7-15. Join us on-site on Mondays, Wednesdays & Fridays, from 6-8 pm, for a journey of deeper understanding and love for Quranic teachings and principles.</p>
                        </Card>
                    </Cell>
                    <Cell>
                        <Image src={Placeholder}/>
                        <Card to="/mccmd/weekend-school">
                            <Subtitle>Weekend School</Subtitle>
                            <p>At the MCC Weekend School, we've made it our mission to cultivate and preserve the Islamic character in our youth. By teaching the love and wisdom of the Quran and Sunnah, we aim to inspire them to carry these teachings into their everyday lives.</p>
                        </Card>
                    </Cell>
                    <Cell>
                        <Image src={Placeholder}/>
                        <Card to="/mccmd/daycare">
                            <Subtitle>DayCare</Subtitle>
                            <p>Our Bayan Daycare is a place where the journey begins. We believe in the importance of nurturing Islamic values from the earliest years. With us, your little ones will discover the beauty of the Quran and Sunnah while strengthening their hearts with iman and taqwa.</p>
                        </Card>
                    </Cell>
                    <Cell>
                    <Image src={Placeholder}/>
                        <Card to="/mccmd/childrens-hifdh">
                            <Subtitle>Hifdh for Children</Subtitle>
                            <p>We are thrilled to offer Hifdh classes for boys and girls aged between 6-17 years old. The program aims to deepen the young learner's relationship with the Quran through memorization.</p>
                        </Card>
                    </Cell>
                    <Cell>
                        <Image src={Placeholder}/>
                        <Card to="/mccmd/adults-hifdh">
                            <Subtitle>Hifdh for Adults</Subtitle>
                            <p>We are delighted to offer hifdh classes for adults aged 18 or above. You can learn to read and memorize the Holy Qur’an, enriching your spiritual journey. </p>
                        </Card>
                    </Cell>
                </Box>
            </Wrapper>
        </>
    )
}

export default EducationPage