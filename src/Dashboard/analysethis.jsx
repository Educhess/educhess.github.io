import React from "react";
import styled from "styled-components";
import Sidebar from "./components/Sidebar.jsx"


const iframe = '<iframe src="https://livetactics.chessbase.com" width="400" height="440"></iframe>'
{/* <iframe src="https://fritz.chessbase.com" style="width:760px;height:480px"></iframe> */}

function Iframe(props) {
  return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
} 

function Analysethis() {
  return (
      <>
      <Sidebar/>
    <SubContainer>
    <Iframe iframe={iframe} />
    </SubContainer>

    </>
  );
}
const SubContainer = styled.div`
  margin: 0.5rem 0;
  height: 80%;
  width: 100%;
  gap: 4rem;
  float:right;
  position:absolute;
  right:0;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: 100%;
    position:absolute;
    top:-100px;
  }
`;
const Container = styled.div`
  width: 100%;
  height:150vh;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-bottom-right-radius: 2rem;
  border-top-right-radius: 2rem;
  margin: 1rem 8rem 1rem 4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;

export default Analysethis;

