import './App.css';
import AboutMe from './AboutMe';
import Homepage from './Homepage';
import {Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <Link to="/" className = "nav-item">Homepage</Link>
        <Link to="/about-me" className = "nav-item">About me</Link>
      </nav>
      <Routes>
      <Route path="/" element = {<Homepage/>}/>
      <Route path="/about-me" element = {<AboutMe/>}/>
      </Routes>
    </div>

  );
}

export default App;
