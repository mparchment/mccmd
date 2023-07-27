import styled from 'styled-components';

import Placeholder from '../assets/placeholder-image.png';

const CommunityWrapper = styled.div`
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
            <CommunityWrapper>
                <div>
                    <Title>Community</Title>
                    <p>
                    Our vision at Muslim Community Center is to foster a community that thrives on support and cooperation. We have a range of programs that aim to bring us all closer, including youth groups, women's circles, charity initiatives, and cultural celebrations.</p> <p>Each of these programs plays a vital role in strengthening our community and helping everyone feel a sense of belonging.  So take a look at what we've got going on, find where you fit in, and join us in building a lively and supportive community.
                    </p>
                </div>
                
                <CardWrapper>
                <Divider/>
                    <Image src={Placeholder}/>
                    <Card>
                        <Subtitle>Muslim Youth Organization</Subtitle>
                        <p>Our mission is to establish a bond between the Muslim youth of the community and connect them with the masjid in an environment where individuals feel comfort and inspiration through the teaching of the Quran and Sunnah as well as halal events and activities. The Muslim Youth Organization stands as a platform for youth to have a voice in the community and become successful, independent adults who continue to add to the growth of the community.</p>
                    </Card>
                    <Image src={Placeholder}/>
                    <Card>
                        <Subtitle>Young Adults and Professionals</Subtitle>
                        <p>The purpose of the Muslim Sisters' Alliance is to provide a forum for sisters aged 15 and older in the local community to empower each other in advancing the religious, health, personal and social aspects of our lives. We value the diversity of the sisters in our community and aim to be inclusive to sisters from all walks of life.</p>
                    </Card>
                    <Image src={Placeholder}/>
                    <Card>
                        <Subtitle>Muslim Sisters' Alliance</Subtitle>
                        <p>The purpose of the Muslim Sisters' Alliance is to provide a forum for sisters aged 15 and older in the local community to empower each other in advancing the religious, health, personal and social aspects of our lives. We value the diversity of the sisters in our community and aim to be inclusive to sisters from all walks of life.</p>
                    </Card>
                    <Image src={Placeholder}/>
                    <Card>
                        <Subtitle>MCC Brothers</Subtitle>
                        <p>The MCC Seniors program provides persons aged 55 and older with a multi-purpose, culturally and ethnically sensitive, inter-generational program and services. We offer social, educational, recreational activities and outreach. Our members enjoy monthly trips, special events, stimulating lectures and activities, spiritual nurturing, skills development, activities to help get or stay in shape, and lovingly prepared home cooked lunches.</p>
                    </Card>
                    <Image src={Placeholder}/>
                    <Card>
                        <Subtitle>MCC Seniors</Subtitle>
                        <p>The MCC Seniors program provides persons aged 55 and older with a multi-purpose, culturally and ethnically sensitive, inter-generational program and services. We offer social, educational, recreational activities and outreach. Our members enjoy monthly trips, special events, stimulating lectures and activities, spiritual nurturing, skills development, activities to help get or stay in shape, and lovingly prepared home cooked lunches.</p>
                    </Card>
                </CardWrapper>
            </CommunityWrapper>
        </>
    )
}

export default About