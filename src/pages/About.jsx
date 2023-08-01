import styled from 'styled-components';

const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px;
    padding-top: 0;

    font-size: 14px;
    font-weight: 500;

    @media (min-width: 768px) {
        width: 50%;
        padding-top: 10px;
        margin: 0 auto;
    }
`;

const Title = styled.h2`
    font-weight: 800;    
    font-size: 200%;
    color: #333;
`;

function About() {
    return (
        <>
            <AboutWrapper>
                <Title>About Us</Title>
                <div>
                    Muslim Community Center has been serving Muslims living and working in Montgomery County, Maryland for over three decades. 
                </div>
                
                <div>
                    <h3>Our Vision</h3>
                    <p>To be a Center of Islamic Excellence in which the Muslim community becomes a positive role model for all.</p>
                    <h3>Our Mission</h3>
                    <p>To promote brotherhood and human dignity among all by developing an environment of understanding, compassion, justice in personal and professional life - serving the needs of the Muslim community and community at-large in a manner that promotes its positive image and standing in a changing environment. </p>
                </div>
                
                
                <Title>Our Team</Title>
                <div>
                    <h3>Muhammad Abdullahi — Imam</h3>

                    <p>Shaykh Mohamed Abdullahi is the Imam at the Muslim Community Center, where he leads congregational, jumu'ah and janazah prayers, and teaches tafsir, fiqh and hadith.</p>
                    <p>After completing memorization of the Qur'an at the age of eleven, Shaykh Mohamed went on to study the Shari'ah and gained comprehensive knowledge of Hadith and Fiqh. He graduated with Honors in Licentiate in Arabic Language and Islamic Studies from Al-Azhar University in Cairo, Egypt. He also holds a diploma in Shari'ah from the National Somali University in Mogadishu, Somalia. He is a certified Qari in three styles of recitation and has command of Arabic, Somali, Swahili and English.</p>

                    <h3>Board of Directors</h3>
                    <h4>Usman Sarwar — President</h4>
                    <h4>Saqib Ashraf — Vice President</h4>
                    <h4>Ishtiaq Chugtai — Treasurer</h4>
                    <h4>Junaid Shah — Secretary</h4>
                    <h4>Habib Ghanim — Director</h4>
                    <h4>Shaina Ayers — Director</h4>
                    <h4>Ashraf Sufi — Director</h4>

                    <h3>Board of Trustees</h3>
                    <h4>Lubna Ejaz — Chair</h4>
                    <h4>Sabir Rahman — Secretary </h4>
                    <h4>Najma Khan — Trustee</h4>
                    <h4>Mohammed Shamim — Trustee</h4>
                    <h4>Akram Zahoor — Trustee</h4>

                </div>
            </AboutWrapper>
        </>
    )
}

export default About