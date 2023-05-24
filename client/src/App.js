import './App.css';
import Navbar1 from './components/Navbar1'
import FacultyMentor from './pages/FacultyMentor';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Photo from './pages/PhotoGallery';
import Footer from './pages/Footer';
import ImageBorder from './components/ImageBorder';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Newsletter from './components/Newsletter';
import AboutPage from './pages/AboutPage';
import  './fonts/productSans.ttf'
import EventsPage from './pages/EventsPage';

function App() {
  return (
    <>

<Navbar1 />
    <Routes>
      
      <Route  path = "/" element={<div ><Home/></div>}/>
      <Route  path = "/about" element={<div ><AboutPage /></div>}/>
      <Route  path = "/events" element={<div ><EventsPage /></div>}/>
      </Routes>
       <Footer />   
       </>
  );
}

export default App;
