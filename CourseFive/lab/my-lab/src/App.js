import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Promo from './components/Promo';


function Heading() {
  return (
    <h1>This is a header one element</h1>
  )
}
function App() {
  return (
    <div className="App">
      <Heading/>
      <Nav/>
      <Intro1/> 
      <Intro2/> 
      <Intro3/>
      <Promo/>
    </div>
  );
}


export default App;
