import styled from 'styled-components';

import { useState } from 'react';
import emailjs from '@emailjs/browser'

const ContactUsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px;
    padding-top: 0;
    padding-bottom: 65px;

    font-size: 14px;
    font-weight: 500;

    min-height: 100vh;

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

const FormInputs = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    margin-top: 15px;
    gap: 10px;
`;

const Input = styled.input`
    width: 95%;
    height: 30px;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding-left: 10px;
    font-size: 16px;
    font-family: inherit;
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
    background-color: var(--accent-color);
    border: none;
    border-radius: 7.5px;
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    padding: 15px 15px;
    margin-right: 10px;
    text-transform: uppercase;
    cursor: pointer;
`;


const InquiryTypeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 96.5%;
`;

const InquiryButton = styled.button`
  flex-grow: 1;
  text-align: center;
  background: none;
  border: 1px solid #ddd;
  padding: 10px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  cursor: pointer;
  &:hover, &.active {
    background-color: var(--accent-color);
    color: white;
  }
`;

const InquiryDescription = styled.div`
  margin-top: 15px;
  margin-bottom: 0;
  font-weight: 500;
`;

const IntroParagraph = styled.p`
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 20px;
`;

function ContactUs() {
    const [inquiryType, setInquiryType] = useState('general');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        let isValid = true;
        let errors = {};

        if (formData.name.trim() === '') {
            errors.name = 'Name is required.';
            isValid = false;
        }

        if (formData.email.trim() === '' || !formData.email.includes('@')) {
            errors.email = 'Valid email is required.';
            isValid = false;
        }

        if (formData.subject.trim() === '') {
            errors.subject = 'Subject is required.';
            isValid = false;
        }

        if (formData.message.trim() === '') {
            errors.message = 'Message is required.';
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };

    const handleSubmit = (e) => {
      e.preventDefault();
    
      if (validateForm()) {
        const formElement = e.target;
        let selectedTemplateId;
    
        const hiddenInquiryTypeInput = formElement.querySelector('input[name="inquiryType"]');
        const hiddenToInput = formElement.querySelector('input[name="to"]');
    
        if (hiddenInquiryTypeInput) {
          hiddenInquiryTypeInput.value = getDescriptiveInquiryType(inquiryType);
        }
    
        if (inquiryType === 'imam') {
          hiddenToInput.value = import.meta.env.VITE_EMAILJS_IMAM_EMAIL;
          selectedTemplateId = import.meta.env.VITE_EMAILJS_IMAM_TEMPLATEID;
        } else {
          hiddenToInput.value = import.meta.env.VITE_EMAILJS_MCC_EMAIL;
          selectedTemplateId = import.meta.env.VITE_EMAILJS_DEFAULT_TEMPLATEID;
        }
    
        if (!selectedTemplateId) {
          console.log('No template ID matched for the selected inquiry type.');
          return;
        }
    
        emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICEID, 
          selectedTemplateId, 
          formElement, 
          import.meta.env.VITE_EMAILJS_PUBLICKEY
        )
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
      }
    };
    
  
    const handleInquirySelection = (type) => {
      setInquiryType(type);
    }
  
    const getInquiryDescription = (type) => {
        switch (type) {
            case 'general':
                return (
                  <p>If you have general questions about our services, events, or affiliated organizations, we're here to assist. Feel free to fill out the form below for inquiries that don't fall under the other specific categories.</p>
                );                    
          case 'feedback':
            return (
              <p>Your voice matters at Muslim Community Center. We value your feedback and suggestions as they help us improve and better serve the needs of our community.</p>
            );
          case 'imam':
            return (
              <p>If you have specific questions or need guidance related to our Imam, whether it's about religious teachings, community events, or spiritual matters, our office is available for more immediate or sensitive concerns.</p>
            );
          case 'rentals':
            return (
              <p>If you're interested in renting a space at Muslim Community Center for a private event, community gathering, or educational purpose, you can inquire about availability, rates, and amenities through other means of contact.</p>
            );
          case 'concerns':
            return (
              <>
                <p>Muslim Community Center views complaints as an opportunity for growth and improvement. Our aim is to resolve your concerns in a fair and timely manner, ensuring a positive relationship with our community.</p>
                <p>Complaints can be made by any individual or organization with a justifiable interest in Muslim Community Center. For written complaints, please send to: Concerns & Complaints, Muslim Community Center, Address, City, ZIP, Country. Verbal complaints can be made by phone at [your phone number] or in person to a staff member. We aim to acknowledge complaints within 7 working days and resolve them within 28 working days where possible.</p>
              </>
            );
          default:
            return '';
        }
      };

      const getDescriptiveInquiryType = (type) => {
        const inquiryTypeMap = {
          'general': 'General Inquiries',
          'feedback': 'Feedback and Suggestions',
          'imam': 'Imam Inquiries',
          'rentals': 'Rental Requests',
          'concerns': 'Concerns and Complaints'
        };
        return inquiryTypeMap[type] || 'Unknown Inquiry Type';
      };
           
  return (
    <>
      
      <ContactUsWrapper>
        <Title>Contact Us</Title>

        <IntroParagraph>
            We're here to answer any questions and address any concerns you may have. Whether you're interested in our services, events, or community programs, we'd love to hear from you. Please select the inquiry option that best fits your needs, and fill out the form to send us a direct message.
        </IntroParagraph>

        <InquiryTypeWrapper>
          <InquiryButton onClick={() => handleInquirySelection('general')} className={inquiryType === 'general' ? 'active' : ''}>General Questions</InquiryButton>
          <InquiryButton onClick={() => handleInquirySelection('feedback')} className={inquiryType === 'feedback' ? 'active' : ''}>Feedback & Suggestions</InquiryButton>
          <InquiryButton onClick={() => handleInquirySelection('concerns')} className={inquiryType === 'concerns' ? 'active' : ''}>Concerns & Complaints</InquiryButton>
          <InquiryButton onClick={() => handleInquirySelection('imam')} className={inquiryType === 'imam' ? 'active' : ''}>Imam Inquiries</InquiryButton>
          <InquiryButton onClick={() => handleInquirySelection('rentals')} className={inquiryType === 'rentals' ? 'active' : ''}>Rentals</InquiryButton>
        </InquiryTypeWrapper>

        {inquiryType && (
          <>
            <InquiryDescription>
              {getInquiryDescription(inquiryType)}
            </InquiryDescription>
            <div>
                <form onSubmit={handleSubmit}>
                  <input type="hidden" name="inquiryType" value={getDescriptiveInquiryType(inquiryType)} />
                  <input type="hidden" name="to" value="" />
                  <FormInputs>
                      <Input 
                          type="text" 
                          name="name" 
                          placeholder="Name *" 
                          value={formData.name}
                          onChange={handleInputChange}
                      />
                      {formErrors.name && <div style={{ color: 'red' }}>{formErrors.name}</div>}
                      
                      <Input 
                          type="text" 
                          name="email" 
                          placeholder="Email *" 
                          value={formData.email}
                          onChange={handleInputChange}
                      />
                      {formErrors.email && <div style={{ color: 'red' }}>{formErrors.email}</div>}
                      
                      <Input 
                          type="text" 
                          name="subject" 
                          placeholder="Subject *" 
                          value={formData.subject}
                          onChange={handleInputChange}
                      />
                      {formErrors.subject && <div style={{ color: 'red' }}>{formErrors.subject}</div>}
                      
                      <TextArea 
                          name="message"
                          placeholder="Your Message *" 
                          value={formData.message}
                          onChange={handleInputChange}
                      />
                      {formErrors.message && <div style={{ color: 'red' }}>{formErrors.message}</div>}
                  </FormInputs>
                  <Button type="submit">Send Message</Button>
                </form>
            </div>
          </>
        )}
      </ContactUsWrapper>
    </>
  )
}

export default ContactUs;