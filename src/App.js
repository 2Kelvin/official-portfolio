import './App.css';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import TopNav from './components/TopNavbar/TopNav';

function App() {
  return (
    <div className="App">
      <TopNav />
      <Home />
      <Skills />
    </div>
  );
}

export default App;
