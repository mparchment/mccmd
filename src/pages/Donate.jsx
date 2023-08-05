import styled from 'styled-components';

const DonateWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px;
    padding-top: 0;
    margin-bottom: 70px;

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

const FormInputs = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    margin-top: 20px;
    gap: 10px;
`;

const Input = styled.input`
    width: 95%;
    height: 30px;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding-left: 10px;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
`;

const TextArea = styled.textarea`
    width: 95%;
    height: 100px;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding-left: 10px;
    padding-top: 10px;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
`;

const Button = styled.button`
    background-color: #b98474;
    border: none;
    border-radius: 7.5px;
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    padding: 15px 15px;
    margin-right: 10px;
    text-transform: uppercase;
`;


function Donate() {
    return (
        <>
            <DonateWrapper>
                <Title>Donate</Title>
                <div>
                    For questions, feedback or suggestions, send us a message using this form and we will get back to you as soon as possible.
                    <form>
                        <FormInputs>
                            <Input type="text" placeholder="Name *"/>
                            <Input type="text" placeholder="Email *"/>
                            <Input type="text" placeholder="Subject *"/>
                            <TextArea placeholder="Your Message *"/>
                        </FormInputs>
                        <Button>Send Message</Button>
                    </form>
                </div>
            </DonateWrapper>
        </>
    )
}

export default Donate