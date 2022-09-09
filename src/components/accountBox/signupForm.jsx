import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { useState } from "react";
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
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider } from "firebase/auth";
import { auth, db, addUserToDatabase } from '../../firebase.js';


export function SignupForm(props) {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const { switchToSignin } = useContext(AccountContext);

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword,
        registerName
      );
      const addUserToDatabaseResponse = await addUserToDatabase(registerEmail, registerPassword, registerName);
      console.log(addUserToDatabaseResponse);
      console.log(user)
      alert("User created Successfully")
    } catch (error) {
      console.log(error.message);
    }
  }

  async function handleSignup() {
    setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  return (
    <BoxContainer>
      <FormContainer>
        <Input
          type="text" placeholder="Full Name" pattern="[A-Za-z1-9]" ref={register({ required: true })}
          onChange={(event) => {
            setRegisterName(event.target.value);
          }}
          required
        />

        <Input
          type="email" placeholder="Email"
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
          required
        />

        <Input
          type="password" placeholder="Password"
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
          required
        />

        {/* <Input type="password" placeholder="Confirm Password" required/> */}
      </FormContainer>
      <Link to="/login">
        <Marginer direction="vertical" margin={10} />
        <SubmitButton type="submit" ClassName="text-black" onClick={register}>Signup</SubmitButton>
      </Link>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
