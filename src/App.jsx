
import About from "./components/About";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portifolio from "./components/Portifolio";
import Services from "./components/Services";



const App = () => (
  <div>
    
    <Navbar/>
    <Hero/>
    <About/>
    <Portifolio/>
    <Services/>
    <Carousel/>
    <Contact/>
    <Footer/>
  </div>
);

export default App;
