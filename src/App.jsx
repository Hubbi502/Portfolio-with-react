import Navbar from "./components/Navbar";
import Hero from "./components/HeroMaster";
import About from "./components/AboutMaster";
import Skills from "./components/SkillMaster";
function App() { 
  return (
    <>
      <Navbar />
      {/* hero section */}
      <Hero />
      {/* about section */}
      <About />
      {/* skill section */}
      <Skills />
    </>  
  )
}
export default App;
