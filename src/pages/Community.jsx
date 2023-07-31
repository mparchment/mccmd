import styled from 'styled-components';

import MYOLogo from '../assets/logos/muslim-youth-organization.png';
import YAPLogo from '../assets/logos/young-adults-and-professionals.png';
import MSALogo from '../assets/logos/muslim-sisters-alliance.png';
import MSLogo from '../assets/logos/mcc-seniors.png';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const CommunityWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px;
    padding-top: 0;

    font-size: 14px;
    font-weight: 500;
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
    width: 90%;
    margin-bottom: 35px;
`;

const ThinImage = styled.img`
    width: 80%;
    margin-bottom: 70px;
    margin-top: 50px;
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

const IconLink = styled.a`
    color: inherit;
    text-decoration: none;
`;

const Icons = styled.div`
    display: flex;
    justify-content: center;
    align-self: center;
    gap: 10px;
    margin-top: 30px;
`;

function About() {
    return (
        <>
            <CommunityWrapper>
                <div>
                    <Title>Community</Title>
                    <p>
                    Our vision at Muslim Community Center is to foster a community that thrives on support and cooperation. We have a range of programs that aim to bring us all closer, including youth groups, women's circles, charity initiatives, and cultural celebrations.</p> <p>Each of these programs plays a vital role in strengthening our community and helping everyone feel a sense of belonging.  So take a look at what we've got going on, find where you fit in, and join us in building a lively and supportive community.
                    </p>
                </div>
                
                <CardWrapper>
                <Divider/>
                    <Image src={MYOLogo}/>
                    <Card>
                        <Subtitle>Muslim Youth Organization</Subtitle>
                        <p>Our mission is to establish a bond between the Muslim youth of the community and connect them with the masjid in an environment where individuals feel comfort and inspiration through the teaching of the Quran and Sunnah with events and activities.</p> <p> We stand as a platform for youth to have a voice in the community and become successful, independent adults who contribute to the growth of the community.</p>
                        <Icons>
                            <IconLink href="#"><WhatsAppIcon style={{ fontSize: '200%' }}/></IconLink>
                            <IconLink href="https://www.facebook.com/groups/43069277929/"><FacebookIcon style={{ fontSize: '200%' }}/></IconLink>
                            <IconLink href="https://www.instagram.com/mccmyo/"><InstagramIcon style={{ fontSize: '200%' }}/></IconLink>
                        </Icons>
                    </Card>
                    <ThinImage src={YAPLogo}/>
                    <Card>
                        <Subtitle>Young Adults and Professionals</Subtitle>
                        <p>The purpose of the Muslim Sisters' Alliance is to provide a forum for sisters aged 15 and older in the local community to empower each other in advancing the religious, health, personal and social aspects of our lives. We value the diversity of the sisters in our community and aim to be inclusive to sisters from all walks of life.</p>
                        <Icons>
                            <IconLink href="#"><WhatsAppIcon style={{ fontSize: '200%' }}/></IconLink>
                            <IconLink href="https://www.facebook.com/MCCYAP/"><FacebookIcon style={{ fontSize: '200%' }}/></IconLink>
                            <IconLink href="#"><InstagramIcon style={{ fontSize: '200%' }}/></IconLink>
                        </Icons>
                    </Card>
                    <ThinImage src={MSALogo}/>
                    <Card>
                        <Subtitle>Muslim Sisters' Alliance</Subtitle>
                        <p>The purpose of the Muslim Sisters' Alliance is to provide a forum for sisters aged 15 and older in the local community to empower each other in advancing the religious, health, personal and social aspects of our lives. We value the diversity of the sisters in our community and aim to be inclusive to sisters from all walks of life.</p>
                        <Icons>
                            <IconLink href="https://www.facebook.com/MuslimSistersAlliance"><FacebookIcon style={{ fontSize: '200%' }}/></IconLink>
                            <IconLink href="https://www.instagram.com/muslimsistersalliance/"><InstagramIcon style={{ fontSize: '200%' }}/></IconLink>
                        </Icons>
                    </Card>
                </CardWrapper>
            </CommunityWrapper>
        </>
    )
}

export default About