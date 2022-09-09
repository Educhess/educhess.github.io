import React from "react";
import styled from "styled-components";
import pdfpic from "../assets/pdfpic.jpg";
import { cardShadow, hoverEffect, themeColor } from "../utils";
import {Link} from "react-router-dom";

function Projects() {
  return (
    <YourProjects>
      <Project>
       <Link to="/L1"> <Avatar>
          <img src={pdfpic} alt="" />
        </Avatar></Link>
    <Link to="/L1">  <Detail>
         <Title> Level 1 - Beginner  </Title>
         <SubTitle>Learn here about Chess basics</SubTitle>
        </Detail></Link>

      </Project>
      <Project>
        
       <Link to="/L2"> <Avatar>
          <img src={pdfpic} alt="" />
        </Avatar></Link>
        <Link to="/L2">
        <Detail>
          <Title>Level 2 - Beginner</Title>
          <SubTitle>Learn here about chess tactics</SubTitle>
        </Detail>
        </Link>
      </Project>
      <Project>
        
        <Link to="/puzzle"> <Avatar>
           <img src={pdfpic} alt="" />
         </Avatar></Link>
         <Link to="/puzzle">
         <Detail>
           <Title>Solve puzzles</Title>
           <SubTitle></SubTitle>
         </Detail>
         </Link>
       </Project>
      {/* <AllProjects>See all projects</AllProjects> */}
    </YourProjects>
  );
}

const YourProjects = styled.div`
  height: 70%;
  background-color: white;
  margin: 0;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 75%;
    margin-top: 1rem;
  }
`;

const Project = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
`;
const Avatar = styled.div`
  img {
    height: 4rem;
    width: 4rem;
    border-radius: 4rem;
  }
`;
const Detail = styled.div`
  margin-left: 1rem;
`;
const Title = styled.h3`
  font-weight: 500;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1rem;
  }
`;
const SubTitle = styled.h5`
  font-weight: 300;
`;
const AllProjects = styled.h5`
  text-align: end;
  color: ${themeColor};
  cursor: pointer;
`;

export default Projects;

