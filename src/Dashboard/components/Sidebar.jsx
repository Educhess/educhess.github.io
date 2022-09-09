import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import styled from "styled-components";
import { RiHomeLine, RiFileCopyLine } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import { AiOutlinePieChart } from "react-icons/ai";
import Badge from "./Badge";
import AvatarImage from "../assets/avatarImage.jpeg";
import { darkThemeColor } from "../utils";
import { storage, useAuth, upload, logout }from "../../firebase";

function Sidebar() {

  const [photoURL, setPhotoURL] = useState("https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png");
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();
  
  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0])
    }
  }

  function handleClick() {
    upload(photo, currentUser, setLoading);
  }

  useEffect(() => {
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser])

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }


  return (
    <Container>
      <ProfileContainer>
      <Avatar src={photoURL} alt="Avatar" className="avatar"/>
      <input type="file" onChange={handleChange} />
      <button disabled={loading || !photo} className="text-white" onClick={handleClick}>Upload</button>
        <Name>{currentUser?.email}</Name>
        <Badge content="Pro Level" />
      </ProfileContainer>
      <LinksContainer>
        <Links>
          <Link to={"/db"}>
          <Linkk>
            <RiHomeLine />
            <h3>Dashboard</h3>
            </Linkk>
          </Link>
        
        
          <Link to={"/analyse"}>
          <Linkk>
            <RiFileCopyLine />
     <h3>Analyse games</h3> 
     </Linkk>
          </Link>
         <Link to={"/cform"}>
          <Linkk>
            <FaWallet />
            <h3>Contact Form</h3>
          </Linkk>
          </Link>
          {/* <Linkk>
            <AiOutlinePieChart />
            <h3>Reports</h3>
          </Linkk> */}
          <Linkk>
          <Link to="/">
           <button disabled={ loading || !currentUser } onClick={handleLogout}>Log Out</button>
          </Link>
          </Linkk>
        </Links>
        <ContactContainer>
          <span>Having troubles?</span>
          <a href="#">Contact us </a>
        </ContactContainer>
      </LinksContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 20%;
  height: 100% !important;
  border-radius: 2rem;
  background-color: #091322;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    height: max-content !important;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Avatar = styled.img`
  height: 7rem;
  border-radius: 6rem;
  margin-top: 20%;
`;

const Name = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0.8rem 0 0.5rem 0;
`;

const LinksContainer = styled.div`
  background-color: ${darkThemeColor};
  height: 100%;
  width: 100%;
  border-radius: 2rem;
`;

const Links = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  height: 60%;
`;

const Linkk = styled.li`
  margin-left: 25%;
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  color: #e4e4e4;
  cursor: pointer;
  h3 {
    font-weight: 300;
  }
  svg {
    font-size: 1.1rem;
    margin-top: 3%;
  }
`;

const ContactContainer = styled.div`
  width: 60%;
  background-color: #091322;
  color: #c4c4c4;
  height: 15%;
  margin: auto auto;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  a {
    color: white;
    text-decoration: none;
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 2rem;
  }
`;

export default Sidebar;

