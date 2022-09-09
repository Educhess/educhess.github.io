import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail
} from "firebase/auth";
import { auth, getUserById, useAuth } from '../../firebase.js';

export function LoginForm(props) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const { switchToSignup } = useContext(AccountContext);
  const currentUser = useAuth();
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      await getUserById(loginEmail, loginPassword);
      console.log(user);
    } catch (error) {
      console.log(error.message);
      window.location.replace("login");
      alert("error");

    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email)
      forgotPassword(email).then(() => {
        emailRef.current.value = "";
      });
  };

  // const forgotpassowrd = sendPasswordResetEmail(auth, email)
  //   .then(() => {

  //   })

  return (
    <BoxContainer>
      {/* <div>Currently logged in as: { currentUser?.email } </div> */}
      <FormContainer>
        <Input
          type="email" placeholder="Email"
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <Input
          type="password" placeholder="Password"
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forgot your password?</MutedLink>
      <Link to="/db">
        <Marginer direction="vertical" margin="1.6em" />
        <SubmitButton type="submit" onClick={login}>Sign In</SubmitButton>
      </Link>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}

// export const userMail = currentUser.email;
// export const userName = currentUser.name;

