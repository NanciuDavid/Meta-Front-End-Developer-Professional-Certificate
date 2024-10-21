import logo from './assets/logo.png';
import './App.css';
import ReactPlayer from "react-player";


function App() {
  const bird1 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
  );

  const bird2 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
  );

  function toggle1() {
    if (bird1.paused) {
      bird1.play();
      bird2.pause();
    } else {
      bird1.pause();
    }
  };

  const toggle2 = () => {
    bird2.paused ? bird2.play() && bird1.pause() : bird2.pause();
  }
  
  return (
    <div className="App">
      <h1>Add an image below</h1>
      {/* <img src={logo} alt="logo picture" width={500}/> */}
      
      {/* alternative  */}

      <img src={require("./assets/logo.png")} alt="" width={500} className="alternative"/>

      <MyVideo link = "https://www.youtube.com/watch?v=MKHtXovAejs" 
      />
  <div className="buttons">
  <button onClick={toggle1}>Caspian Tern 1</button>
      <button onClick={toggle2}>Caspian Tern 2</button>
      
  </div>
    </div>
  );
};


const MyVideo = (props) => {
  return(
    <ReactPlayer url={props.link} controls = {true} playing = {true} volume = {0.5} />
  );
}
export default App;
