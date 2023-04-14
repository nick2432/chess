import Board from './component/board.js';
import Homepage from './component/homepage.js';
import "./App.css";
import { useEffect, useState } from 'react';
import io from "socket.io-client"
const socket = io.connect("http://localhost:8080");

function App() {
  const [btn,setbtn] = useState(0);
  const [val,setval] = useState(0);
  
  if(btn===1){
    const x=document.getElementById("t");
    x.style.display="flex";
    const x1=document.getElementById("o");
    if(x1!=null){
      x1.remove();
    }
  }
  return(
    <div id='App'>
        <div id='o'><Homepage Change={setbtn} socket={socket}  val={val} btn={btn} setval={setval}/></div>
        <div id='t'><Board val={val} setval={setval}socket={socket}/></div>
    </div>
  );
}

export default App;
