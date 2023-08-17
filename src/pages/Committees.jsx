import styled from 'styled-components';
import AdultHifdh from '../assets/adults-hifdh-placeholder.jpeg';
import ChildrenHifdh from '../assets/children-hifdh-placeholder.jpeg';
import IslamicSchool from '../assets/islamic-school-placeholder.jpeg';
import IslamicDaycare from '../assets/islamic-daycare-placeholder.jpeg';
import Placeholder from '../assets/placeholder-image.png';
import { PageBackground } from '../components/PageBackground';
import PropTypes from 'prop-types';

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

    @media (min-width:1366px) {
        flex-grow: 1;
        height: fit-content;
        display: flex;
        flex-direction: column;
        align-items: start;
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

const CommitteeCard = styled(Card)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 22%;
    height: 185px;
    margin-bottom: 20px;
    text-align: center;
`;

const CommitteeChair = styled.div`
    width: 100%;
    text-align: center;
`;

const CommitteeTitle = styled.h3`
    max-width: 75%;
    align-self: center;
`;

function Committee({ title, chair, info, email }) {
    return (
        <CommitteeCard>
            <CommitteeTitle>{title}</CommitteeTitle>
            {chair && chair.map((name, index) =>
                <CommitteeChair key={index}>{name}</CommitteeChair>
            )}
            {info && <p>{info}</p>}
            {email && <p><a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">{email}</a></p>}
        </CommitteeCard>
    );
}

Committee.propTypes = {
    title: PropTypes.string.isRequired,
    chair: PropTypes.arrayOf(PropTypes.string),
    info: PropTypes.string,
    email: PropTypes.string
};

function CommitteesPage() {
    return (
        <>
            <PageBackground />
            <Wrapper>
                <Title>Committees</Title>
                <p>MCC operations are conducted through various committees. Any MCC member can volunteer to serve on a committee of their choice by contacting the Chairperson of that Committee. Members who wish to serve on the committees should take their commitment seriously and be prepared to devote enough time to their undertaking.</p>
                <Divider />
                <Box>
                    <Committee 
                        title="Anti-Racism, Justice, and Equity Committee"
                        chair={["Nur Shaina Ayers"]}
                        email="MARJE@mccmd.org"
                    />
                    <Committee 
                        title="Bylaws and Policy"
                        chair={["Sheikh Hassan"]}
                        email="bylaws@mccmd.org"
                    />
                    <Committee 
                        title="Education"
                        chair={["Areeb Quasem", "Sami Saeed", "Faisal Khan"]}
                        email="education@mccmd.org"
                    />
                    <Committee 
                        title="Community Education Series"
                        chair={["Akbar Siddiqui", "Tasnuva Khan", "Sanjana Quasem", "Gila Rana", "Samir Jafri"]}
                        email="ces@mccmd.org"
                    />
                    <Committee 
                        title="Construction and Maintenance"
                        chair={["Ishtiaq Chugtai"]}
                        email="construction@mccmd.org"
                    />
                    <Committee 
                        title="Funeral"
                        chair={["Syed Husain", "Anwar Goheer", "Karen Bashir"]}
                        email="funeralcommittee@mccmd.org"
                    />
                    <Committee 
                        title="Fundraising"
                        chair={["Akhtar Zubairi", "Issa Ndour", "Shaina Ayers", "Sukai Sey"]}
                        email="fundraising@mccmd.org"
                    />
                    <Committee 
                        title="Interfaith"
                        chair={["Ashraf Sufi"]}
                        email="interfaith@mccmd.org"
                    />
                    <Committee 
                        title="IT"
                        chair={["Junaid Shah"]}
                        email="IThelp@mccmd.org, webmaster@mccmd.org"
                    />
                    <Committee 
                        title="Membership"
                        chair={["Walee Khan", "Shabnom Khan"]}
                        email="membership@mccmd.org"
                    />
                    <Committee 
                        title="Nominating"
                        chair={["Shout Hussaini"]}
                        email="nominating.committee@mccmd.org"
                    />
                    <Committee 
                        title="Public Relations"
                        chair={["Farhana Shah"]}
                        email="pr@mccmd.org"
                    />
                    <Committee 
                        title="Religious Affairs"
                        chair={["Fuad Saif"]}
                        email="religious.committee@mccmd.org"
                    />
                    <Committee 
                        title="Seniors Program"
                        chair={["Karen Bashir", "Kaleem Khawaja", "Sabir Rahman"]}
                        email="seniorsprogram@mccmd.org"
                    />
                    <Committee 
                        title="Sisters Affairs"
                        chair={["Wardah Rahman", "Absa Fall"]}
                        email="sisters@mccmd.org"
                    />
                    <Committee 
                        title="Social and Cultural"
                        chair={["Shabana Siddiqui", "Yaye Diallo", "Abdullah Alamin"]}
                        email="social@mccmd.org"
                    />
                    <Committee 
                        title="Social Services and Food Pantry"
                        chair={["Shabbir Shah"]}
                        email="socialservices@mccmd.org"
                    />
                    <Committee 
                        title="Strategic Implementation"
                        chair={["Aziz Ahmed"]}
                        email="spc@mccmd.org"
                    />
                    <Committee 
                        title="Volunteering"
                        chair={["Administrative Office"]}
                        email="volunteer@mccmd.org"
                    />
                    <Committee 
                        title="Youth Activities"
                        chair={["Jannah Waqiah"]}
                        email="youth@mccmd.org"
                    />
                    <Committee 
                        title="Zakat"
                        chair={["Mohammad Khalid"]}
                        email="zakat@mccmd.org"
                    />
                </Box>
                <Divider style={{ marginBottom: '30px', marginTop: '0' }}/>
                <p style={{ marginBottom: '30px' }}><span style={{ fontWeight: 700 }}>A minimum of two-year service, as certified by the Chairperson of a Committee, is one of the prerequisites for candidacy to the Board of Directors.</span> The Board of Directors and Board of Trustees may add other committees from time to time as the need arises. For any questions or concerns, please contact the President or the Board of Directors.</p>
            </Wrapper>
        </>
    );
}

export default CommitteesPage;
