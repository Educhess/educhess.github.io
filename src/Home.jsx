import React from 'react'
import Header from './Header.jsx';
import Particle from './Particle.jsx';
import Toggle from './Toggle.js';
import './home.css';
import styled from "styled-components";
import Infocard from './components/Infocard';
import './index.css';
import Footer from './Footer.jsx';
import Gallerypics from './Gallerypics.js';
import ContactForm from './contactform.jsx';
import Dailypuzzle from './Dashboard/components/dailypuzzle.jsx';
import back from './photos/back.png';
import { useInView } from 'react-intersection-observer';

const AppContainer = styled.div`
  display: flex;
  z-index=-1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position:absolute; 
  width: 100%; 
  height: 100%;
   background-color:#78686f;
     background-repeat: no-repeat; 
     background-size: cover; background-position: 50% 50%;
     position: relative;
     height: 100vh;
     width: 100%;
`;

function Home() {
    // const { ref: myRef , inView: myElementsIsVisible, entry } = useInView(options);
    return (
        <div className='home'>
            <Header />
            {/*}  <AppContainer>
            <Particle />
    </AppContainer> */}
            <img className="back" src={back} style={{ width: '100vw', height: '150px;' }} alt="" />


            <div >  <Infocard /> </div>
            {/*}    <Toggle /> */}
            {/* <Gallerypics className="bg-purple-50" /> */}
            <div className='contact'>

            </div>
            <Footer />
        </div>
    )
}

export default Home
