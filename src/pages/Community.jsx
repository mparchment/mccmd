import styled from 'styled-components';

import MYOLogo from '../assets/logos/muslim-youth-organization.png';
import YAPLogo from '../assets/logos/young-adults-and-professionals.png';
import MSALogo from '../assets/logos/muslim-sisters-alliance.png';
import MSLogo from '../assets/logos/mcc-seniors.png';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


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
    }
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

const OrgInfo= styled.div`
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
    width: 80%;
    margin-bottom: 35px;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width:1366px) {
        width: 600px;
    }
`;

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width:1366px) {
        flex-direction: row;
        justify-content: flex-start;
        gap: 35px;
    }
`;

const Divider = styled.div`
    width: 12.5%;
    height: 3px;
    background-color: #b98474;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 50px;
`;

const IconLink = styled.a`
    color: inherit;
    text-decoration: none;
`;

const Icons = styled.div`
    display: flex;
    justify-content: center;
    align-self: center;
    gap: 10px;
    margin-top: 30px;Center
`;

function CommunityPage() {
    return (
        <>
            
            <Wrapper>
                <Title>Community</Title>
                <p>
                Our vision at Muslim Community Center is to foster a community that thrives on support and cooperation. We have a range of programs that aim to bring us all closer, including youth groups, women's circles, charity initiatives, and cultural celebrations.</p> <p>Each of these programs plays a vital role in strengthening our community and helping everyone feel a sense of belonging.  So take a look at what we've got going on, find where you fit in, and join us in building a lively and supportive community.
                </p>
                <Divider/>
                <CardWrapper>
                    <Card>
                    <Image src={MYOLogo}/>
                    <OrgInfo>
                        <Subtitle>Muslim Youth Organization</Subtitle>
                        <p>Our mission is to establish a bond between the Muslim youth of the community and connect them with the masjid in an environment where individuals feel comfort and inspiration through the teaching of the Quran and Sunnah with events and activities.</p> <p> We stand as a platform for youth to have a voice in the community and become successful, independent adults who contribute to the growth of the community.</p> <p> Programming is seperated by age and gender, with occasional joint events. Visit us on Facebook and Instagram for regular updates. </p>
                        <Icons>
                            {/*<IconLink href="#"><WhatsAppIcon style={{ fontSize: '200%' }}/></IconLink>*/}
                            <IconLink href="https://www.facebook.com/groups/43069277929/"><FacebookIcon style={{ fontSize: '200%' }}/></IconLink>
                            <IconLink href="https://www.instagram.com/mccmyo/"><InstagramIcon style={{ fontSize: '200%' }}/></IconLink>
                        </Icons>
                    </OrgInfo>
                    </Card>
                    <Card>
                    <Image src={YAPLogo}/>
                    <OrgInfo>
                        <Subtitle>Young Adults and Professionals</Subtitle>
                        <p>We are dedicated to nurturing the personal and professional growth of Muslims in the community. Recognizing the unique challenges and opportunities faced by young adults in today's dynamic world, we strive to provide a supportive network that emphasizes Islamic values, offers educational workshops, and fosters social connections.</p> <p>Whether you're a college student, a budding entrepreneur, or a seasoned professional, our programs are designed to inspire and guide you on your journey. </p>
                        <Icons>
                            <IconLink href="https://chat.whatsapp.com/IS72H18WoWBK4ctacNaetz"><WhatsAppIcon style={{ fontSize: '200%' }}/></IconLink>
                            <IconLink href="https://www.facebook.com/MCCYAP/"><FacebookIcon style={{ fontSize: '200%' }}/></IconLink>
                            <IconLink href="#"><InstagramIcon style={{ fontSize: '200%' }}/></IconLink>
                        </Icons>
                    </OrgInfo>
                    </Card>
                    <Card>
                    <Image src={MSALogo}/>
                    <OrgInfo>
                        <Subtitle>Muslim Sisters' Alliance</Subtitle>
                        <p>The purpose of the Muslim Sisters' Alliance is to provide a forum for sisters aged 15 and older in the local community to empower each other in advancing the religious, health, personal and social aspects of our lives. We value the diversity of the sisters in our community and aim to be inclusive to sisters from all walks of life.</p>
                        <Icons>
                            {/*<IconLink href="#"><WhatsAppIcon style={{ fontSize: '200%' }}/></IconLink>*/}
                            <IconLink href="https://www.facebook.com/MuslimSistersAlliance"><FacebookIcon style={{ fontSize: '200%' }}/></IconLink>
                            <IconLink href="https://www.instagram.com/muslimsistersalliance/"><InstagramIcon style={{ fontSize: '200%' }}/></IconLink>
                        </Icons>
                    </OrgInfo>
                    </Card>
                </CardWrapper>
            </Wrapper>
        </>
    )
}

export default CommunityPage