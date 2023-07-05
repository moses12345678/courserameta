//import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Header from "./components/Header";
//import LandingSection from "./components/LandingSection";
//import ProjectsSection from "./components/ProjectsSection";
//import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import Bookpage from './components/Bookpage';
import Home from './components/Home';
import ConfirmedBooking from './components/ConfirmedBooking';
import  './Style.css'; //Import the css file
//import { AlertProvider } from "./context/alertContext";
//import Alert from "./components/Alert";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/booking" exact element={<Bookpage />}/>
        <Route path="/confirmation" exact element={<ConfirmedBooking/>}/>
      </Routes>
    </Router>
  );
}

export default App;
