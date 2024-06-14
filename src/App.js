import './App.css';
import Homepage from './home/Homepage.jsx';
import Contact from './contact/Contact.jsx';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './home/Home.jsx';
import Footer from './home/Footer.jsx';
import Contactus from './home/Contactus.jsx';
import Career from './career/Career.jsx';
import About from './about/About.jsx';
function App() {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <Home />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/career' element={<Career />} />
        <Route path='/about-us' element={<About />} />

      </Routes>
      {location.pathname !== '/career' && <Contactus />}
      <Footer />
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
