import React from 'react';
import './Login.css';
import logo from './images/educhess_logo.png';
import { Link } from "react-router-dom";

import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import Particle from './Particle.jsx';
import './index.css';
import Header from './Header.jsx'
import Footer from './Footer.jsx'

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index:2;
  position:absolute; 
  width: 100%; height: 100%;
   background-color:#78686f;
    background-image: url("");
     background-repeat: no-repeat; background-size: cover; background-position: 50% 50%;
`;

function Login() {
  return (
    <div className='login'>
      <AppContainer>
        <Particle />
      </AppContainer>
      <Header />
      <div id='loginbox'>  <AccountBox /> </div>
      <Footer />
    </div>
  )
}

export default Login
