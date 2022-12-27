

import { Routes } from 'react-router-dom';
import { BrowserRouter as Route, Router } from 'react-router-dom';
import Hero from './components/Hero';
import Brand from './components/Brand';
import Mission from './components/Mission';
import Vission from './components/Vission';
import Area from './components/Area';
import Counter from './components/Counter';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';




;

function App() {
  return (
  <>
  {/* <Navbar/> */}
  <Hero/>
  <Brand/>
  <Mission/>
  <Vission/>
  <Area/>
  <Counter />
  <Testimonial />
  <Contact />
  <Footer />
  
  </>
  );
}

export default App;
