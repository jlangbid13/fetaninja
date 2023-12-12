import Header from "./components/Header";


import Contact from "./sections/Contact";
import Services from "./sections/Services";
import Prices from "./sections/Prices";
import Home from "./sections/Home";
import About from "./sections/About";
import NavProvider from './context/NavContext'


function nigga() {
  
  return (
    
      <NavProvider>
        <div>
          <Header />
          <Home />
          <Services />
          <About />
          <Prices />
          <Contact />
        </div>
      </NavProvider>
    
  );
}

export default nigga