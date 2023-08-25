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


function CreateAccount() {
    return (
        <>
            <PageBackground/>
            <Wrapper>
                Create account page.
            </Wrapper>
        </>
    )
}

export default CreateAccount