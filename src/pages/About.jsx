import styled from 'styled-components';
import { PageBackground } from '../components/PageBackground';
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

const Box = styled.div`
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


function AboutPage() {
    return (
        <>
            <PageBackground/>
            <Wrapper>
                
                <Box>
                <div>
                    <Title>About Us</Title>
                    <p>For over three decades, Muslim Community Center has been a beacon of light for the Muslim community in Montgomery County, Maryland.</p><p> We pride ourselves not only as a place of worship but as a hub for community engagement, education, and growth. Our commitment has always been to enrich the lives of the local Muslim community by providing comprehensive Islamic education, promoting unity and mutual understanding, and offering a platform for dialogue and interaction.</p>
                </div>
                
                <div>
                    <Subtitle>Our Vision</Subtitle>
                    <p>To be a center of Islamic excellence in which the Muslim community becomes a positive role model for all.</p>
                    <Subtitle>Our Mission</Subtitle>
                    <p>To promote brotherhood and human dignity among all by developing an environment of understanding, compassion, justice in personal and professional life - serving the needs of the Muslim community and community at-large in a manner that promotes its positive image and standing in a changing environment. </p>
                </div>
                </Box>
                                
                <Title>Our Team</Title>
                <Portrait src={PortraitPlaceholder}/>
                <ImamTitle>Muhammad Abdullahi</ImamTitle>
                <ImamSubtitle>Imam</ImamSubtitle>

                <p style={{ alignSelf: 'center'}}>Shaykh Mohamed Abdullahi is the Imam at the Muslim Community Center, where he leads jama'ah prayers, and teaches Qur'an, fiqh and hadith. After completing memorization of the Qur'an at the age of eleven, Shaykh Mohamed went on to study the Shari'ah and gained comprehensive knowledge of Hadith and Fiqh. He graduated with Honors in Licentiate in Arabic Language and Islamic Studies from Al-Azhar University in Cairo, Egypt. He also holds a diploma in Shari'ah from the National Somali University in Mogadishu, Somalia. He is a certified Qari in three styles of recitation and has command of Arabic, Somali, Swahili and English.</p>

                <BoardHeading>Board of Directors</BoardHeading>

                <BoardBox>
                    <BoardCell name="Usman Sarwar" position="President" portrait={PortraitPlaceholder} bio="Usman Sarwar serves as the President of the Muslim Community Center and has been a stalwart community member for over two decades. With a degree in Electrical Engineering from the University of Maryland, he is a technology advocate and works in the field of renewable energy. His leadership focuses on sustainable community development." />

                    <BoardCell name="Ishtiaq Chugtai" position="Treasurer" portrait={PortraitPlaceholder} bio="Ishtiaq Chugtai, the Treasurer, is a financial consultant by profession. A member for over 20 years, he has used his expertise to ensure the financial stability of the center. He holds a Master's in Business Administration and is passionate about youth development programs." />

                    <BoardCell name="Junaid Shah" position="Secretary" portrait={PortraitPlaceholder} bio="Junaid Shah serves as the Secretary and is a public health advocate. A graduate in Public Health from the University of Maryland, he has initiated several health and wellness programs at the center. His years of community service have enriched the organization's social initiatives." />

                    <BoardCell name="Habib Ghanim" position="Director" portrait={PortraitPlaceholder} bio="Habib Ghanim is a Director and a community builder with a background in Civil Engineering. He focuses on infrastructure projects for the center and oversees maintenance and improvement initiatives. His meticulous planning skills have been an asset in the center’s growth." />

                    <BoardCell name="Shaina Ayers" position="Director" portrait={PortraitPlaceholder} bio="Shaina Ayers is a Director with a focus on digital communications and engagement. Holding a degree in Communications from the University of Maryland, she has enhanced the center's online presence significantly. Shaina is committed to fostering strong relationships within the community through social media." />

                </BoardBox>
                
                <BoardHeading>Board of Trustees</BoardHeading>

                <BoardBox>
                    <BoardCell name="Lubna Ejaz" position="Chair" portrait={PortraitPlaceholder} bio="Lubna Ejaz, the Chair, has a legal background and champions the center's governance. A law graduate, she has served on various civic boards and brings a wealth of experience in organizational leadership." />

                    <BoardCell name="Sabir Rahman" position="Secretary" portrait={PortraitPlaceholder} bio="Sabir Rahman is the Secretary of the Board of Trustees and is an entrepreneur with multiple business ventures. His keen interest in community-based economic development projects has led to several partnerships and sponsorships for the center." />

                    <BoardCell name="Najma Khan" position="Trustee" portrait={PortraitPlaceholder} bio="Najma Khan is a Trustee and an educator. She has contributed to the center’s educational programs, particularly in the children’s Islamic studies section. Her years of teaching experience make her an invaluable asset to the community’s educational growth." />

                    <BoardCell name="Mohammed Shamim" position="Trustee" portrait={PortraitPlaceholder} bio="Mohammed Shamim is a Trustee and works in the healthcare sector. With a background in medicine, he has been instrumental in organizing medical camps and awareness sessions, contributing to the overall well-being of the community." />

                    <BoardCell name="Akram Zahoor" position="Trustee" portrait={PortraitPlaceholder} bio="Akram Zahoor, a Trustee, is a researcher with a focus on Islamic history and culture. His scholarly activities have resulted in a rich and diversified range of educational programs at the center. He has authored several articles and books on Islamic studies." />
                </BoardBox>  
            </Wrapper>
        </>
    )
}

export default AboutPage