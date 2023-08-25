import styled from 'styled-components';
import { PageBackground } from '../components/PageBackground';

import { auth, provider } from "../firebase-config";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function darkenColor(color, factor) {
    const f = parseInt(color.slice(1), 16),
          R = f >> 16,
          G = (f >> 8) & 0x00FF,
          B = f & 0x0000FF;
    
    return "#" + (1 << 24 | (R * (1 - factor)) << 16 | (G * (1 - factor)) << 8 | (B * (1 - factor))).toString(16).slice(1).toUpperCase();
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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


const Buttons = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    margin-top: .5rem;
    margin-bottom: 1rem;
    gap: 1rem;
`;

const TextContainer = styled.div`
    width: 80%;
    text-align: left;
    font-weight: 800;
    color: rgb(75,75,75);
`;

const FormContainer = styled.div`
    width: 80%;
`;

const Button = styled.button`
    letter-spacing: .5px;
    text-transform: uppercase;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: bold;
    font-family: inherit;
    width: 80%;
    margin: 10px auto;
    box-shadow: 2px 2px 0 ${darkenColor('#b98474', 0.15)};
    &:active {
        transform: scale(0.98);
    }
`;

const SignInButton = styled(Button)`
    background-color: #b98474;
    color: white;
    border: #b98474 solid 1px;
    &:active {
        box-shadow: 0px 1px 0px ${darkenColor('#b98474', 0.15)};
    }
`;

const Input = styled.input`
    border: 2px solid lightgray;
    border-radius: 10px;
    font-size: 15px;
    padding: 12px 0 12px 16px;
    width: 90%;
    font-family: inherit;
    margin-bottom: 1rem;
`;

const Divider = styled.hr`
    width: 80%;
    border: 1px solid lightgray;
    margin-top: 1rem;
    margin-bottom: 2rem;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const OAuthButtons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin-bottom: 1rem;
    margin-top: 1rem;
    gap: 1rem;
`;

const OAuthButton = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: #b98474;
    box-shadow: 2px 2px 0 ${darkenColor('#b98474', 0.15)};
    border: #b98474 solid 1px;
    color: white;
    white-space: nowrap;
    width: 95%;
    padding-left: 20px;
`;

const LogoWrapper = styled.img`
    width: 20px;
    margin-right: 30px;
`;

const SignInText = styled.span`
    padding-top: 1rem;
    font-size: 14px;
`;

const FormError = styled.span`
    color: red;
    font-size: 14px;
    margin-bottom: .7rem;
    margin-top: .33rem;
`;

const SignUpLink = styled.a`
    color: #b98474;
    font-weight: 800;
    cursor: pointer;
`;

const Icon = styled.img`
    height: 20px;
    cursor: pointer;
`;

const IconContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
`;

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [invalidLogin, setInvalidLogin] = useState(false);

    const handleBackClick = () => {
        navigate('/');
    };

    const handleSignUpClick = () => {
        navigate('/mccmd/create-account');
    };

    const handleSignIn = async (e) => {
        e.preventDefault();    
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            navigate('/dashboard');
        } catch (error) {
            console.log(error.code, error.message);
        }
    };

    const handleGoogleSignUp = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                navigate('/dashboard');
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    };

    return (
        <>
            <PageBackground/>
            <Wrapper>
                {/*<IconContainer><Icon src={BackIcon} onClick={handleBackClick}/></IconContainer>*/}
                <TextContainer>
                    <h1>Welcome back to MCC!</h1>
                </TextContainer>
        
                <OAuthButtons>
                    <OAuthButton onClick={handleGoogleSignUp}>Sign in with Google</OAuthButton>
                    <OAuthButton>Sign in with Apple</OAuthButton>
                </OAuthButtons>
        
                <Divider/>
        
                <FormContainer>
                    <Form onSubmit={handleSignIn}>
                        <Input 
                            type="email" 
                            placeholder="Email" 
                            value={email}
                            onChange={e => setEmail(e.target.value)} 
                        />
                        <Input 
                            type="password" 
                            placeholder="Password" 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        {invalidLogin && <FormError>Invalid email or password.</FormError>}
                    </Form>
                </FormContainer>
                <Buttons>
                    <SignInText>Don't have an account? <SignUpLink onClick={handleSignUpClick}>Sign up</SignUpLink>.</SignInText>
                    <SignInButton onClick={handleSignIn}>Sign In</SignInButton> 
                </Buttons>
            </Wrapper>
        </>
    )
};

export default Login;
