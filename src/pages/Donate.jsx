import styled from 'styled-components';
import MCCFront from '../assets/mcc-front.jpg';
import { useState } from 'react';

function darkenColor(color, factor) {
    const f = parseInt(color.slice(1), 16),
          R = f >> 16,
          G = (f >> 8) & 0x00FF,
          B = f & 0x0000FF;
    
    return "#" + (1 << 24 | (R * (1 - factor)) << 16 | (G * (1 - factor)) << 8 | (B * (1 - factor))).toString(16).slice(1).toUpperCase();
}

const Wrapper = styled.div`
  /* Add styles for the wrapper */
`;

const Intro = styled.div`
    text-align: center;
    margin-bottom: 50px;
    max-width: 600px;
    margin: 0 auto;
    margin-bottom: 50px;
`;

const IntroTitle = styled.h2`
    font-weight: 800;
    font-size: 2.5rem;
`;

const IntroText = styled.p`
    font-size: 1.05rem;
    font-weight: 500;
    margin-bottom: 40px;
`;

const DonateBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: fit-content;
    width: 350px;

    padding: 25px;
    border-radius: 10px;

    background-color: #f5f5f7;
`;

const DonationType = styled.div`
  display: flex;
  justify-content: center;

  width: 82%;
  margin: 0 auto;
`;

const DonationButton = styled.button`
  background-color: ${({ selected }) => selected ? '#b98474' : 'white'};
  color: ${({ selected }) => selected ? 'white' : 'rgba(0, 0, 0, 0.75)'};
  border: 1px solid black;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: ${({ position }) => position === 'left' ? '5px 0 0 5px' : position === 'right' ? '0 5px 5px 0' : '5px'};
  width: 200px;
  height: 50px;
  border: rgba(0, 0, 0, 0.34) solid 1px;
  font-size: .9rem;
  text-transform: uppercase;
  font-weight: 600;
  box-shadow: ${({ selected }) => selected ? `2px 2px 0 ${darkenColor('#b98474', 0.15)}` : '2px 2px 0 rgba(0, 0, 0, 0.15)'};
`;


const DonationAmounts = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 5px;
    grid-row-gap: 5px;

    width: 80%;
    margin: 0 auto;
`;

const DonationAmount = styled.button`
    background-color: ${({ selected }) => selected ? '#b98474' : 'white'};
    color: ${({ selected }) => selected ? 'white' : 'rgba(0, 0, 0, 0.75)'};
    border: 1px solid black;
    cursor: pointer;

    height: 35px;
    font-size: 1.15rem;

    border: rgba(0, 0, 0, 0.15) solid 1px;
    box-shadow: ${({ selected }) => selected ? `2px 2px 0 ${darkenColor('#b98474', 0.15)}` : '2px 2px 0 rgba(0, 0, 0, 0.15)'};

    border-radius: 5px;
`;

const DonationTitle = styled.h2`
    margin-bottom: 0px;
    margin-top: 0px;
`;

const CustomAmount = styled.div`
    position: relative;
    width: 80%;
    height: 35px;

    &::before {
        content: "$";
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-25%);
    }

    &::after {
        content: "USD";
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-25%);
    }

    margin: 0 auto;
`;

const CustomAmountInput = styled.input`
    width: 72.5%;
    height: 45px;
    border: none;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
    padding-left: 30px;
    padding-right: 50px;
    border-radius: 5px;

    font-size: 1.5rem;
    color: #b98474;

    &:focus {
        outline: #b98474 solid 2px;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type="number"] {
      -moz-appearance: textfield;
    }
`;

const DonateButton = styled.button`
    background-color: #b98474;
    margin: 0 auto;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 20px;
    width: 80%;
    border-radius: 5px;
    border: #b98474 solid 1px;
    box-shadow: 0 0 5px #b98474;
`;

const DonationInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const DonationDisclaimer = styled.p`
    font-size: .8rem;
    width: 80%;
    margin: 0 auto;
    color: rgba(0, 0, 0, 0.8);

    margin-bottom: 10px;
    margin-top: 30px;
`;

const Divider = styled.hr`
    margin: 0 auto;
    margin-bottom: 15px;
`

const VisaButton = styled.button`
    background-color: #b98474;  // A blueish color for Visa branding
    margin: 10px auto;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: bold;
    width: 80%;
    border-radius: 5px;
    border: #b98474 solid 1px;
    margin-bottom: 5px;

    box-shadow: 2px 2px 0 ${darkenColor('#b98474', 0.15)};
`;

const PaypalButton = styled.button`
    background-color: #e0c2b9;  // A typical color for PayPal branding
    margin: 10px auto;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: bold;
    width: 80%;
    border-radius: 5px;
    border: #e0c2b9 solid 1px;
    
    box-shadow: 2px 2px 0 ${darkenColor('#e0c2b9', 0.15)};
`;

const DonationButtons = styled.div`

`;

function Donate() {
    const [donationType, setDonationType] = useState('monthly');
    const [donationAmount, setDonationAmount] = useState(50);
    const [isRecurring, setIsRecurring] = useState(false);
    const [customAmountValue, setCustomAmountValue] = useState('');

  
    const handleDonationTypeChange = (type) => {
      setDonationType(type);
    };
  
    const handleRecurringChange = (event) => {
      setIsRecurring(event.target.checked);
    };

    const handleCustomAmountChange = (event) => {
        setCustomAmountValue(event.target.value);
        setDonationAmount(null); // Deselect any amount buttons
    };

    const handleDonationAmountChange = (amount) => {
        setDonationAmount(amount);
        setCustomAmountValue(''); // Clear the custom amount input
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission here
    };
  
    return (
      <Wrapper>
        <Intro>
          <IntroTitle>Donate</IntroTitle>
          <IntroText>Donating to Muslim Community Center means tarbiyah and lifelong education. Building spiritual companionship and educating young minds. Your financial help makes all this happen, and more.</IntroText>
          <DonateBox>
            <DonationInfo>
                <div><DonationTitle>Secure Donation</DonationTitle></div>
                <DonationType>
                    <DonationButton position="left" selected={donationType === 'once'} onClick={() => handleDonationTypeChange('once')}>Give Once</DonationButton>
                    <DonationButton position="right" selected={donationType === 'monthly'} onClick={() => handleDonationTypeChange('monthly')}>Monthly <span style={{ marginLeft: '2px', fontSize: '1.1rem'}}>♥</span></DonationButton>
                </DonationType>
                <DonationAmounts>
                    <DonationAmount selected={donationAmount === 1000} onClick={() => handleDonationAmountChange(1000)}>$1000</DonationAmount>
                    <DonationAmount selected={donationAmount === 500} onClick={() => handleDonationAmountChange(500)}>$500</DonationAmount>
                    <DonationAmount selected={donationAmount === 250} onClick={() => handleDonationAmountChange(250)}>$250</DonationAmount>
                    <DonationAmount selected={donationAmount === 100} onClick={() => handleDonationAmountChange(100)}>$100</DonationAmount>
                    <DonationAmount selected={donationAmount === 50} onClick={() => handleDonationAmountChange(50)}>$50</DonationAmount>
                    <DonationAmount selected={donationAmount === 25} onClick={() => handleDonationAmountChange(25)}>$25</DonationAmount>
                </DonationAmounts>
                <CustomAmount>
                <CustomAmountInput type="number" value={customAmountValue} onChange={handleCustomAmountChange}/>
                </CustomAmount>
            </DonationInfo>
            <DonationDisclaimer><Divider/>Muslim Community Center is committed to your privacy. Your payment details will be processed by Paypal, and a record of your donation will be stored by us. </DonationDisclaimer>
            <DonationButtons>
                <VisaButton type="submit">
                    Visa
                </VisaButton>
                <PaypalButton type="submit">
                    PayPal
                </PaypalButton>
            </DonationButtons>
          </DonateBox>
        </Intro>
      </Wrapper>
    );
  }
  
  export default Donate;