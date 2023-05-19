import './App.css';
import Navbar from './components/Navbar'
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

function App() {
  return (
    <>

<Navbar />
    <Routes>
      
      <Route  path = "/" element={<div ><Home/></div>}/>
      <Route  path = "/about" element={<div ><AboutPage /></div>}/>
      {/* <Route  path = "/contact" element={<div ><Newsletter /></div>}/>
      <Route  path = "/events" element={<div ><Events /></div>}/> */}
      {/* <Route  path = "/*" element={<div><Errorpage/></div>}/> */}
      </Routes>
       <Footer />   
       </>
  );
}

export default App;
