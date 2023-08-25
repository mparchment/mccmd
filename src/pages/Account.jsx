import { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { PageBackground } from '../components/PageBackground';
import AuthContext from '../contexts/AuthContext';
import { auth, db } from '../firebase-config';
import { collection, doc, setDoc } from 'firebase/firestore';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

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

const Title = styled.h2`
    font-weight: 800;    
    font-size: 200%;
    color: #333;
`;

const Subtitle = styled.h3`
    &:first-of-type {
        margin-top: 25px;
    }
    font-weight: 800;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    font-weight: 600;
`;

const Input = styled.input`
    padding: 10px;
    margin: 5px 0 20px 0;
`;

const SubmitButton = styled.button`
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const DashboardContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 600px;
    gap: 40px;

    justify-content: center;
`;

const DashboardDiv = styled.div`
    height: 100%;
    width: 50%;
`

const SignOutButton = styled.button`
    padding: 10px 20px;
    background-color: #f44336;
    color: white;
    border: none;
    margin-top: 10px;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    align-self: center;
`;

function Account() {
    const { userData, updateUserData } = useContext(AuthContext);
    const [accountData, setAccountData] = useState(userData);
    const navigate = useNavigate();

    useEffect(() => {
        setAccountData(userData);
    }, [userData]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setAccountData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Debug userData:', userData); // Debug line
        console.log('Debug db:', db);  // Debug line
        
        try {
            if (userData && userData.uid && db) {
                const userRef = doc(db, "users", userData.uid);
                await setDoc(userRef, accountData, { merge: true });
                console.log("Account updated: ", accountData);
                updateUserData(accountData);
            } else {
                console.error("userData or db is undefined");
            }
        } catch (error) {
            console.error("Error updating account: ", error);
        }
    };

    const handleSignOut = () => {
        signOut(auth).then(() => {
          console.log("User signed out");
          navigate("/mccmd/")
        }).catch((error) => {
          console.log("Error signing out: ", error);
        });
      };
    
    return (
        <>
            <PageBackground/>
            <Wrapper>
                <Title>Account</Title>
                <DashboardContainer>
                    <DashboardDiv>
                        <div>
                            <Subtitle>Account Information</Subtitle>
                            <Form onSubmit={handleSubmit}>
                                <Label htmlFor="firstName">First Name</Label>
                                <Input type="text" id="firstName" name="firstName" value={accountData.firstName} onChange={handleInputChange} />

                                <Label htmlFor="lastName">Last Name</Label>
                                <Input type="text" id="lastName" name="lastName" value={accountData.lastName} onChange={handleInputChange} />

                                <Label htmlFor="address">Address</Label>
                                <Input type="text" id="address" name="address" value={accountData.address} onChange={handleInputChange} />

                                <Label htmlFor="phoneNumber">Phone Number</Label>
                                <Input type="tel" id="phoneNumber" name="phoneNumber" value={accountData.phoneNumber} onChange={handleInputChange} />

                                <Label htmlFor="email">Email</Label>
                                <Input type="email" id="email" name="email" value={accountData.email} onChange={handleInputChange} />

                                <SubmitButton type="submit">Update</SubmitButton>
                            </Form>
                            <SignOutButton onClick={handleSignOut}>Sign Out</SignOutButton>
                        </div>
                    </DashboardDiv>
                </DashboardContainer>
            </Wrapper>
        </>
    );
}

export default Account;