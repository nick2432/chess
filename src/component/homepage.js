import "./home.css"
import React, { useEffect, useState } from "react";
import nik from "../images/chess desktop wallpaper 3djpeg.jpeg"

export default function Homepage(props) {
  const socket=props.socket;
  const [code1,setcode1]=useState("")
  function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  const goto=()=>{
      socket.emit("code",code1)
        props.Change(1);
  }
  const createcode=()=>{
    console.log('kjfak');
    var code=makeid(6);
    const x=document.getElementById("appButton");
    x.replaceWith(`Room code is ${code}`);
    const x1=document.getElementById("text");
    x1.remove();
    const x2 =document.getElementById("inputBox");
    x2.remove();
    var xx=Math.round(Math.random());
    console.log(xx,"dafffffffff");
    props.setval(xx);
    setcode1(code);
  };
  return (
    <div className='home'>
      <button id='appButton' onClick={createcode} type='button'>Create game</button>
      <div id='text'>{"or join game"}</div>
      <input id='inputBox'type='text' placeholder='Enter code to join game' value={code1}onChange={(e)=>setcode1(e.target.value)}/>
      <button id='apptn' onClick={goto} type='button'>join game</button>
    </div>
  )
}
