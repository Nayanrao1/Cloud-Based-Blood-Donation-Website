import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Navbar from './component/Navbar';
import Contact from './Contact';
import Errorpage from './Errorpage';
import About from './About';
import Footer from './component/Footer';
import DonerRegister from './DonerRegister';
import UserProfile from './UserProfile';
import Logout from './Logout';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/logout' element={<Logout />} />
        <Route path="/donerRegister" element = {<DonerRegister/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
