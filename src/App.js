import './App.css';
import myImg from "./html.png"

function App() {
  return ( 
    <div className="App">
      <div style ={{borderSolid:"1px black" , maxWidth :"100vw"}}>
      <h1 className ="title red">Yassine Abdelhedi</h1>
      <br/>
      <img src={myImg} alt="html.png"/>
      <br/>
      <img src="/js.jpg" alt="js"/>
      </div>
      <video width="320" height="240"controls/>
      <source src ="myVideo.mp4"type="video/mp4"/>
      
    </div>
  );
}

export default App;
