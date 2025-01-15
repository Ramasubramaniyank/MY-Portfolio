import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;