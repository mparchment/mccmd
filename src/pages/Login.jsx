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


function AboutPage() {
    return (
        <>
            <PageBackground/>
            <Wrapper>
                
                <AboutBox>
                <div>
                    <Title>Login</Title>
                    <p>For over three decades, Muslim Community Center has been a beacon of light for the Muslim community in Montgomery County, Maryland.</p><p> We pride ourselves not only as a place of worship but as a hub for community engagement, education, and growth. Our commitment has always been to enrich the lives of the local Muslim community by providing comprehensive Islamic education, promoting unity and mutual understanding, and offering a platform for dialogue and interaction.</p>
                </div>
                
                <div>
                    <Subtitle>Our Vision</Subtitle>
                    <p>To be a center of Islamic excellence in which the Muslim community becomes a positive role model for all.</p>
                    <Subtitle>Our Mission</Subtitle>
                    <p>To promote brotherhood and human dignity among all by developing an environment of understanding, compassion, justice in personal and professional life - serving the needs of the Muslim community and community at-large in a manner that promotes its positive image and standing in a changing environment. </p>
                </div>
                </AboutBox>
                                
                <Title>Our Team</Title>
                <Portrait src={PortraitPlaceholder}/>
                <ImamTitle>Muhammad Abdullahi</ImamTitle>
                <ImamSubtitle>Imam</ImamSubtitle>

                <p>Shaykh Mohamed Abdullahi is the Imam at the Muslim Community Center, where he leads congregational, jumu'ah and janazah prayers, and teaches tafsir, fiqh and hadith.</p>
                <p>After completing memorization of the Qur'an at the age of eleven, Shaykh Mohamed went on to study the Shari'ah and gained comprehensive knowledge of Hadith and Fiqh. He graduated with Honors in Licentiate in Arabic Language and Islamic Studies from Al-Azhar University in Cairo, Egypt. He also holds a diploma in Shari'ah from the National Somali University in Mogadishu, Somalia. He is a certified Qari in three styles of recitation and has command of Arabic, Somali, Swahili and English.</p>

                <BoardHeading>Board of Directors</BoardHeading>

                <BoardBox>
                    <BoardCell name="Usman Sarwar" position="President" portrait={PortraitPlaceholder} bio="Usman Sarwar is the President of Muslim Community Center. He has been a member of the community for over 20 years and has served on the Board of Directors for 10 years. He is a graduate of the University of Maryland, College Park and works as a software engineer."/>
                    <BoardCell name="Ishtiaq Chugtai" position="Treasurer" portrait={PortraitPlaceholder} bio="Ishtiaq Chugtai is the Treasurer of Muslim Community Center. He has been a member of the community for over 20 years and has served on the Board of Directors for 10 years. He is a graduate of the University of Maryland, College Park and works as a software engineer."/>
                    <BoardCell name="Junaid Shah" position="Secretary" portrait={PortraitPlaceholder} bio="Junaid Shah is the Secretary of Muslim Community Center. He has been a member of the community for over 20 years and has served on the Board of Directors for 10 years. He is a graduate of the University of Maryland, College Park and works as a software engineer."/>
                    <BoardCell name="Habib Ghanim" position="Director" portrait={PortraitPlaceholder} bio="Habib Ghanim is a Director of Muslim Community Center. He has been a member of the community for over 20 years and has served on the Board of Directors for 10 years. He is a graduate of the University of Maryland, College Park and works as a software engineer."/>
                    <BoardCell name="Shaina Ayers" position="Director" portrait={PortraitPlaceholder} bio="Shaina Ayers is a Director of Muslim Community Center. She has been a member of the community for over 20 years and has served on the Board of Directors for 10 years. She is a graduate of the University of Maryland, College Park and works as a software engineer."/>
                    <BoardCell name="Ashraf Sufi" position="Director" portrait={PortraitPlaceholder} bio="Ashraf Sufi is a Director of Muslim Community Center. He has been a member of the community for over 20 years and has served on the Board of Directors for 10 years. He is a graduate of the University of Maryland, College Park and works as a software engineer."/>
                </BoardBox>
                
                <BoardHeading>Board of Trustees</BoardHeading>

                <BoardBox>
                    <BoardCell name="Lubna Ejaz" position="Chair" portrait={PortraitPlaceholder} bio="Lubna Ejaz is the Chair of Muslim Community Center. She has been a member of the community for over 20 years and has served on the Board of Directors for 10 years. She is a graduate of the University of Maryland, College Park and works as a software engineer."/>
                    <BoardCell name="Sabir Rahman" position="Secretary" portrait={PortraitPlaceholder} bio="Sabir Rahman is the Secretary of Muslim Community Center. He has been a member of the community for over 20 years and has served on the Board of Directors for 10 years. He is a graduate of the University of Maryland, College Park and works as a software engineer."/>
                    <BoardCell name="Najma Khan" position="Trustee" portrait={PortraitPlaceholder} bio="Najma Khan is a Trustee of Muslim Community Center. She has been a member of the community for over 20 years and has served on the Board of Directors for 10 years. She is a graduate of the University of Maryland, College Park and works as a software engineer."/>
                    <BoardCell name="Mohammed Shamim" position="Trustee" portrait={PortraitPlaceholder} bio="Mohammed Shamim is a Trustee of Muslim Community Center. He has been a member of the community for over 20 years and has served on the Board of Directors for 10 years. He is a graduate of the University of Maryland, College Park and works as a software engineer."/>
                    <BoardCell name="Akram Zahoor" position="Trustee" portrait={PortraitPlaceholder} bio="Akram Zahoor is a Trustee of Muslim Community Center. He has been a member of the community for over 20 years and has served on the Board of Directors for 10 years. He is a graduate of the University of Maryland, College Park and works as a software engineer."/>
                </BoardBox>                    
            </Wrapper>
        </>
    )
}

export default AboutPage