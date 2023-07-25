import PrayerTimes from "../components/PrayerTimes"
import Header from "../components/Header"
import styled from 'styled-components';

import Placeholder from '../assets/placeholder-image.png';

import Footer from "../components/Footer"

const EducationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px;
    padding-top: 0;
`;

const Title = styled.h2`
    font-weight: 800;
    font-size: 200%;
    color: #333;
`;

const Subtitle = styled.h3`
    font-weight: 800;
    color: #333;
    text-transform: uppercase;
`;

const Card = styled.div`
    width: 80%;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
    margin-bottom: 35px;
    padding: 25px 30px;
    border: 1px solid #ddd;
    box-shadow: 0 1px 9px #ddd;
    font-size: 14px;
    font-weight: 500;
`;

const Image = styled.img`
    width: 97%;
    margin-bottom: 35px;
`;

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Divider = styled.div`
    width: 12.5%;
    height: 3px;
    background-color: #b98474;
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 30px;
`;

function About() {
    return (
        <>
            <PrayerTimes/>
            <Header/>
            
            <EducationWrapper>
                <div>
                    <Title>Education</Title>
                    <p>
                    Our mission is to enrich our community by providing a diverse range of educational opportunities, all designed to nurture and strengthen Islamic knowledge, understanding, and practice. </p> <p> Each of our programs aims to instill love for the Quran and Sunnah, fortify hearts with iman and taqwa, and inspire the practical application of these teachings in daily life. Explore our programs below to find the right fit for you or your child. 
                    </p>
                </div>
                
                <CardWrapper>
                <Divider/>
                    <Image src={Placeholder}/>
                    <Card>
                        <Subtitle>Day School</Subtitle>
                        <p>The K-9 Islamic School at MCC is committed to cultivating Islamic principles in our students through an engaging curriculum that instills love and understanding of the Quran and Sunnah. Our dedicated teachers provide a supportive and inclusive environment that encourages questioning, exploration, and the inquisitive spirit inherent in every child. Learn more here.</p>
                    </Card>
                    <Image src={Placeholder}/>
                    <Card>
                        <Subtitle>Madrasa</Subtitle>
                        <p>We provide a unique Madrasa after-school program for children aged 7-15. Join us on-site on Mondays, Wednesdays & Fridays, from 6-8 pm, for a journey of deeper understanding and love for Quranic teachings and principles.</p>
                    </Card>
                    <Image src={Placeholder}/>
                    <Card>
                        <Subtitle>Weekend School</Subtitle>
                        <p>At the MCC Weekend School, we've made it our mission to cultivate and preserve the Islamic character in our youth. By teaching the love and wisdom of the Quran and Sunnah, we aim to inspire them to carry these teachings into their everyday lives.</p>
                    </Card>
                    <Image src={Placeholder}/>
                    <Card>
                        <Subtitle>Nursery</Subtitle>
                        <p>Our Bayan Nursery is a place where the journey begins. We believe in the importance of nurturing Islamic values from the earliest years. With us, your little ones will discover the beauty of the Quran and Sunnah while strengthening their hearts with iman and taqwa.</p>
                    </Card>
                    <Image src={Placeholder}/>
                    <Card>
                        <Subtitle>Hifdh for Children</Subtitle>
                        <p>We are thrilled to offer Hifdh classes for boys and girls aged between 6-17 years old. The program aims to deepen the young learner's relationship with the Quran through memorization.</p>
                    </Card>
                    <Image src={Placeholder}/>
                    <Card>
                        <Subtitle>Hifdh for Adults</Subtitle>
                        <p>We are delighted to offer hifdh classes for adults aged 18 or above. You can learn to read and memorize the Holy Qur’an, enriching your spiritual journey. </p>
                    </Card>
                </CardWrapper>
            </EducationWrapper>
            <Footer/>
        </>
    )
}

export default About