import Intro from "./sections/Intro.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Contact from "./sections/Contact.jsx";
import Country from "./sections/Country.jsx";

function App() {
  return (
    <div className="h-[650vh] !scroll-smooth
    bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500
    flex flex-col items-center
    sm:h-[1170vh]">
      <Intro />
      <About />
      <Skills />
      <Contact />
      <Country />
    </div>
  )
}

export default App;
