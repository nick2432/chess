import React, { useState, useEffect } from 'react'
import "./board.css"
import Box from "./box.js";
import { getElementError } from '@testing-library/react';

const columns = [1,2,3,4,5,6,7,8];
const rows = [1,2,3,4,5,6,7,8];

const Piece = {
  t:null,
    key:null,
    image:null,
    x:0,
    y:0,
    c:null
  }
  const pieces=[];
  for(var i=1;i<=8;i++){
    pieces.push({t:'dp',key:`d${2}${i}`,image:require('../images/Chess_pdt60.png'),x:2,y:i,c:'d'});
  }
  for(var i=3;i<=6;i++){
    for(var j=1;j<=8;j++){
      if((i+j)%2===0){
        pieces.push({t:'n',key:`n${i}${j}`,image:null,x:i,y:j,c:'n'});
      }
    }
  }
  for(var i=3;i<=6;i++){
    for(var j=1;j<=8;j++){
      if((i+j)%2!=0){
        pieces.push({t:'n',key:`n${i}${j}`,image:null,x:i,y:j,c:'n'});
      }
    }
  }
 
   pieces.push({t:'dr',key:`d${1}${1}`,image:require('../images/Chess_rdt60.png'),x:1,y:1,c:'d'});
  pieces.push({t:'dr',key:`d${1}${8}`,image:require('../images/Chess_rdt60.png'),x:1,y:8,c:'d'});
  pieces.push({t:'db',key:`d${1}${3}`,image:require('../images/Chess_bdt60.png'),x:1,y:3,c:'d'});
  pieces.push({t:'db',key:`d${1}${6}`,image:require('../images/Chess_bdt60.png'),x:1,y:6,c:'d'});
  pieces.push({t:'dk',key:`d${1}${2}`,image:require('../images/Chess_ndt60.png'),x:1,y:2,c:'d'});
  pieces.push({t:'dk',key:`d${1}${7}`,image:require('../images/Chess_ndt60.png'),x:1,y:7,c:'d'});
  pieces.push({t:'dq',key:`d${1}${4}`,image:require('../images/Chess_qdt60.png'),x:1,y:4,c:'d'});
  pieces.push({t:'dki',key:`d${1}${5}`,image:require('../images/Chess_kdt60.png'),x:1,y:5,c:'d'});
  pieces.push({t:'lr',key:`l${8}${8}`,image:require('../images/Chess_rlt60.png'),x:8,y:8,c:'l'});
  pieces.push({t:'lr',key:`l${8}${1}`,image:require('../images/Chess_rlt60.png'),x:8,y:1,c:'l'});
  pieces.push({t:'lb',key:`l${8}${3}`,image:require('../images/Chess_blt60.png'),x:8,y:3,c:'l'});
  pieces.push({t:'lb',key:`l${8}${6}`,image:require('../images/Chess_blt60.png'),x:8,y:6,c:'l'});
  pieces.push({t:'lk',key:`l${8}${2}`,image:require('../images/Chess_nlt60.png'),x:8,y:2,c:'l'});
  pieces.push({t:'lk',key:`l${8}${7}`,image:require('../images/Chess_nlt60.png'),x:8,y:7,c:'l'});
  pieces.push({t:'lq',key:`l${8}${4}`,image:require('../images/Chess_qlt60.png'),x:8,y:4,c:'l'});
  pieces.push({t:'lki',key:`l${8}${5}`,image:require('../images/Chess_klt60.png'),x:8,y:5,c:'l'});
  for(var i=1;i<=8;i++){
    pieces.push({t:'lp',key:`l${7}${i}`,image:require('../images/Chess_plt60.png'),x:7,y:i,c:'l'});
  }
export default function Board(props) {
  const [pi,setChange] = useState(pieces);
  const [val,setval] = useState(0);
  const [t,sett] = useState(0);
  const socket=props.socket;
  useEffect(()=>{
    socket.on("receive_message",(data)=>{
      console.log("tori mai ka chodo");
      const x=document.getElementById('apptnb');
      setChange(data);
      if(x!=null){
      x.disabled=1;
      }
    });
  },[socket])
  const gotob=()=>{
    socket.emit("send_message", pi);
    console.log('fuckme')
    setval(1);
    const x=document.getElementById('apptnb');
    const x2=document.getElementById('apptnw');
    x.disabled=1;
    const x1=document.getElementById('column');
    x1.style.display="inline-block";
    x.remove();x2.remove();
  }
  const gotow=()=>{
    socket.on("receive_message",(data)=>{
      console.log("afasd");
    });
    const x=document.getElementById('apptnb');
    const x2=document.getElementById('apptnw');
    const x1=document.getElementById('column');
    x1.style.display="inline-block";
    x.remove();x2.remove();
  }
  return (
    <div className='chessbd'>
        <button id='apptnb' onClick={gotob} type='button'>BLACK</button>
      <button id='apptnw' onClick={gotow} type='button'>WHITE</button>
      <div id={`tabl${val}`}>
            <div id='column'>
                {
                    rows.map((row)=>{
                        {
                            return(<div id={`row${val}`}>
                            {columns.map((column)=>(
                                < Box row={row} column={column} t={t} socket={socket} pieces={pi}  sett={sett} val={val} Change={setChange} />
                            ))}
                            </div>)
                        }
                    })
                }
            </div>
            </div>
    </div>
  )
}
