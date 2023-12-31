import { useState, useRef } from "react";
import styled from "styled-components";

import { auth, db, googleProvider, facebookProvider } from "../firebase-config";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import { doc, getDoc, setDoc } from "firebase/firestore";

import FacebookIcon from "../assets/facebook-icon-small.png";
import GoogleIcon from "../assets/google-icon-small.png";

import PropTypes from "prop-types";

function darkenColor(color, factor) {
  const f = parseInt(color.slice(1), 16),
    R = f >> 16,
    G = (f >> 8) & 0x00ff,
    B = f & 0x0000ff;

  return (
    "#" +
    (
      (1 << 24) |
      ((R * (1 - factor)) << 16) |
      ((G * (1 - factor)) << 8) |
      (B * (1 - factor))
    )
      .toString(16)
      .slice(1)
      .toUpperCase()
  );
}

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContent = styled.div`
    width: 35rem;
    height: fit-content;
    background: white;
    padding: 20px;
    text-align: center;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media (max-width: 768px) {
        width: 80%;
    }
`;

const SwitchText = styled.span`
    padding-top: 1rem;
    font-size: 14px;
    margin-top: 1rem;
    margin-bottom: .75rem;
`;

const SwitchLink = styled.a`
    color: #b98474;
    font-weight: 800;
    cursor: pointer;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const Input = styled.input`
    width: 80%;
    height: 2rem;
    margin-bottom: 1.5rem;
    padding: 0 1rem;
    border: 0px solid #b98474;
    border-bottom: 1px solid #b98474;
    font-size: 14px;
    font-weight: 500;
    outline: none;

    font-family: inherit;
`;

const Button = styled.button`
    width: 86.34%;
    letter-spacing: .5px;
    text-transform: uppercase;
    border-radius: 5px;
    cursor: pointer;
    padding-top: .75rem;
    padding-bottom: .75rem;
    font-weight: bold;
    font-family: inherit;
    box-shadow: 0px 2px 0 ${darkenColor("#b98474", 0.15)};
    background-color: var(--accent-color);
    color: white;
    border: #b98474 solid 1px;

    &:active {
        transform: scale(0.98);
        box-shadow: 0px 1px 0px ${darkenColor("#b98474", 0.15)};
    }
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const OAuthButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    gap: 1rem;
    width: 86.34%;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
    }

    display: none;
`;

const OAuthButton = styled(Button)`
    background-color: #fff;
    box-shadow: 0px 2px 0 rgb(75, 75, 75);
    border: 1px solid rgb(75, 75, 75);
    color: rgb(75, 75, 75);

    white-space: nowrap;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h2`
    margin-bottom: 1.5rem;
`;

const Logo = styled.img`
    width: 15px;
    margin-right: .75rem
`;

const InputRow = styled.div`
    @media (min-width: 768px){
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 85.6%;
        gap: 1rem;
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

function formatPhoneNumber(phoneNumberString) {
  return ("" + phoneNumberString).replace(/\D/g, "");
}

function AuthModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [invalidLogin, setInvalidLogin] = useState(false);

  const modalRef = useRef(null);

  function clearForm() {
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setAddress("");
    setConfirmPassword("");
    setInvalidLogin(false);
  }

  function switchForm() {
    clearForm();
    setIsLogin(!isLogin);
  }

  const closeModal = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        // Do something with the user data
        // You might want to set it to state or context
        onClose();
        clearForm();
      }
    } catch (error) {
      console.log(error.code, error.message);
    }
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, googleProvider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;

        console.log(user)
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
    });
  };

  const handleFacebookLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = FacebookAuthProvider.credentialFromError(error);
      });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      setPhoneNumber(formatPhoneNumber(phoneNumber));

      await setDoc(doc(db, "users", user.uid), {
        firstName,
        lastName,
        address,
        phoneNumber,
        email,
      });

      onClose();
      clearForm();
    } catch (error) {
      console.log(error.code, error.message);
    }
  };

  return (
    <ModalBackground onClick={closeModal}>
      <ModalContent ref={modalRef}>
        <Title>Welcome to Muslim Community Center</Title>

        {isLogin ? (
          <>
            <FormContainer>
              <Form onSubmit={handleLogin}>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit">Login</Button>
              </Form>
              <OAuthButtons>
                <OAuthButton onClick={(e) => handleGoogleLogin(e)}>
                  <Logo src={GoogleIcon} />
                  Log in with Google
                </OAuthButton>
                <OAuthButton onClick={(e) => handleFacebookLogin(e)}>
                  <Logo src={FacebookIcon} />
                  Log in with Facebook
                </OAuthButton>
              </OAuthButtons>
            </FormContainer>
            <SwitchText>
              Don't have an account?{" "}
              <SwitchLink onClick={switchForm}>Sign Up</SwitchLink>.
            </SwitchText>
          </>
        ) : (
          <>
            <FormContainer>
              <Form onSubmit={handleSignUp}>
                <InputRow>
                  <Input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <Input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </InputRow>
                <InputRow>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </InputRow>
                <Input
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <InputRow>
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </InputRow>
                <Button type="submit">Sign Up</Button>
              </Form>
              <OAuthButtons>
                <OAuthButton onClick={(e) => handleGoogleLogin(e)}>
                  <Logo src={GoogleIcon} />
                  Sign Up with Google
                </OAuthButton>
                <OAuthButton onClick={(e) => handleFacebookLogin(e)}>
                  <Logo src={FacebookIcon} />
                  Sign Up with Facebook
                </OAuthButton>
              </OAuthButtons>
            </FormContainer>
            <SwitchText>
              Already have an account?{" "}
              <SwitchLink onClick={switchForm}>Log in</SwitchLink>.
            </SwitchText>
          </>
        )}
      </ModalContent>
    </ModalBackground>
  );
}

AuthModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AuthModal;
