import Intro from "./sections/Intro.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Contact from "./sections/Contact.jsx";
import Country from "./sections/Country.jsx";

function App() {
  return (
    <div className="h-[500vh]">
      <Intro />
      <About />
      <Skills />
      <Contact />
      <Country />
    </div>
  )
}

export default App;
