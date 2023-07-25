import PrayerTimes from "../components/PrayerTimes"
import Header from "../components/Header"
import styled from 'styled-components';

const AboutWrapper = styled.div`
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

function About() {
    return (
        <>
            <PrayerTimes/>
            <Header/>
            <AboutWrapper>
                <Title>About Us</Title>
                <div>
                    Muslim Community Center has been serving Muslims living and working in Howard County, Maryland for over a decade. Since our humble beginnings our congregation has approximately doubled every year. What started as providing only Jummah services has grown to include daily prayer in MFC's Musallah, exciting weekly and monthly programs for area families and youth, an active Care Committee and much more! 
                </div>
                
                <div>
                    <h3>Our Vision</h3>
                    <p>To be a Center of Islamic Excellence in which the Muslim community becomes a positive role model for all.</p>
                    <h3>Our Mission</h3>
                    <p>To promote brotherhood and human dignity among all by developing an environment of understanding, compassion, and justice in personal and professional life. Serve the needs of the Muslim community and community at-large in a manner that promotes its positive image and standing in a changing environment. Represent the Muslim community in interfaith circles, in government, public and media relations, and in the society at-large.</p>
                </div>
                
                <div>
                    <h3>Our Team</h3>
                    <h4>Shaykh Muhammad Abdullahi</h4>
                    <p>Shaykh Mohamed Abdullahi is the Imam at the Muslim Community Center, where he leads congregational, jumu'ah and janazah prayers, and teaches tafsir, fiqh and hadith.</p>
                    <p>After completing memorization of the Qur'an at the age of eleven, Shaykh Mohamed went on to study the Shari'ah and gained comprehensive knowledge of Hadith and Fiqh. He graduated with Honors in Licentiate in Arabic Language and Islamic Studies from Al-Azhar University in Cairo, Egypt. He also holds a diploma in Shari'ah from the National Somali University in Mogadishu, Somalia. He is a certified Qari in three styles of recitation and has command of Arabic, Somali, Swahili and English.</p>
                </div>
            </AboutWrapper>
        </>
    )
}

export default About