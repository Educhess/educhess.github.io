// import './App.css';
// import Home from './Home.jsx';
// import Cform from './cform.jsx';
// import Login from './Login.jsx';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import styled from "styled-components";
// import { AccountBox } from "./components/accountBox";
// import {motion} from 'framer-motion/dist/es/index';
// import "./App.css";
// import PdfViewerComponent from './components/PdfViewerComponent';
// import Dashboard from './Dashboard/App';
// import Analysethis from './Dashboard/analysethis.jsx'

// function DocumentViewerone() {
// 	return (
// 		<div className="PDF-viewer">
// 			<PdfViewerComponent
// 				document={"Level1.pdf"}
// 			/>
// 		</div>
// 	);
// }
// function Puzzle() {
// 	return (
// 		<div className="PDF-viewer">
// 			<PdfViewerComponent
// 				document={"puzzle.pdf"}
// 			/>
// 		</div>
// 	);
// }
// function DocumentViewertwo() {
// 	return (
// 		<div className="PDF-viewer">
// 			<PdfViewerComponent
// 				document={"Level2.pdf"}
// 			/>
// 		</div>
// 	);
// }

// function App() {
//   return (
//     <div>
//     <Router>
//     <div className="App">
//       {/* <Header /> */}
//       <Routes>
//       <Route index element={<Home />} />
//       <Route path="/login" element={<Login />} />
// 	  <Route path="/cform" element={<Cform />} />
//       <Route path="/L1" element={  <DocumentViewerone />} />
//       <Route path="/L2" element={  <DocumentViewertwo />} />
//       <Route path="/db" element={  <Dashboard />} />
//       <Route path="/analyse" element={  <Analysethis />} />
//       <Route path="/puzzle" element={ <Puzzle />} />
//       </Routes>
//     </div>
//     </Router>
//      </div>
//   );
// }

// export default App;


import './App.css';
// import Header from './Header.jsx';
import Home from './Home.jsx';
import Cform from './cform.jsx';
import Login from './Login.jsx';
import Gallery from './gallery.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import { motion } from 'framer-motion/dist/es/index';
import "./App.css";
import PdfViewerComponent from './components/PdfViewerComponent';
import Dashboard from './Dashboard/App';
import Analysethis from './Dashboard/analysethis.jsx'

function DocumentViewerone() {
	return (
		<div className="PDF-viewer">
			<PdfViewerComponent
				document={"Level1.pdf"}
			/>
		</div>
	);
}
function Puzzle() {
	return (
		<div className="PDF-viewer">
			<PdfViewerComponent
				document={"puzzle.pdf"}
			/>
		</div>
	);
}
function DocumentViewertwo() {
	return (
		<div className="PDF-viewer">
			<PdfViewerComponent
				document={"Level2.pdf"}
			/>
		</div>
	);
}

function App() {
	return (
		<div>
			<Router>
				<div className="App">
					{/* <Header /> */}
					<Routes>
						<Route index element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/cform" element={<Cform />} />
						<Route path="/L1" element={<DocumentViewerone />} />
						<Route path="/L2" element={<DocumentViewertwo />} />
						<Route path="/db" element={<Dashboard />} />
						<Route path="/analyse" element={<Analysethis />} />
						<Route path="/puzzle" element={<Puzzle />} />
						<Route path="/gallery" element={<Gallery />} />
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;
