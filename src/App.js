import './App.css';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import TopNav from './components/TopNavbar/TopNav';

function App() {
  return (
    <div className="App">
      <TopNav />
      <Home />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;

// use rubik font