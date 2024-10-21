import logo from './logo.svg';
import './App.css';
import {Routes, Route, Links, Link} from 'react-router-dom';
import Contact from './Contact';
import Homepage from './Homepage';

function App() {
  return (
    <div className="App">
      <nav className="nav">
      <Link to ="/" className="nav-item">Homepage</Link>
      <Link to ="/contact" className="nav-item">Contact</Link>
      </nav> 
    <Routes>
      <Route path='/' element = {<Homepage/>}></Route>
      <Route path='/contact' element ={<Contact/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
