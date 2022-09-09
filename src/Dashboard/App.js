import "./App.css";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Footer from "../Footer";
import Header from '../Header.jsx';
function Dashboard() {
  return (
    <>
    {/* <Header /> */}
    <Container>
      <Sidebar />
      <MainContent />
     </Container>
    <footer style={{display: 'block',marginTop:'0px'}}> <Footer /></footer>
    </>
  );
}

const Container = styled.div`
  display:flex;
  height: 157vh;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-radius: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export default Dashboard;


