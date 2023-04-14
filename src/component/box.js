import { getElementError } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import "./box.css";

import {dpmove,lpmove,kmove,rmove,bmove} from "./logic.js";
import {qmove,lqmove} from "./king.js";
import {ischeck} from "./check.js";
export default function Box(props) {
  const socket=props.socket;
  const Pi = props.pieces;
  const ps=[];
  let image = null;
  let x1 = null;
  let x = 0;
    let y = 0;
    let idx = -1;
  let c = "no";
  for (var i = 0; i < Pi.length; i++) {
    ps.push(Pi[i]);
    if (Pi[i].x == props.row && Pi[i].y == props.column) {
      image = Pi[i].image;
      x = Pi[i].x;
      y = Pi[i].y;
      idx = i;
      c = Pi[i].c;
    }
  }
  useEffect(()=>{
    socket.on("receive",(data)=>{
      props.sett(data);
    });
  },[socket])
  const sendMessage=(ps,t)=>{
    console.log('jhat ka baal');
    socket.emit("send_message", ps);
      socket.on("receive_message",(data)=>{
        console.log("afasd");
        props.Change(data);
      });
  };
  const allowDrop = (e) => {
   e.preventDefault()
  };
  const start = (e) => {
    const se1 = Pi.findIndex((Px) => Px.key==='y');
    const se2 = Pi.findIndex((Px) => Px.key==='x');
    if(se1===-1 && se2===-1){
    e.target.id=`${Pi[idx].c}`
    const ch1=document.getElementById(`${x}${y}`) ;
      if(Pi[idx].image!=null){
        ch1.className='color1n';
        const se = Pi.findIndex((Px) => Px.key===`${Pi[idx].c}${x}${y}`);
        console.log(Pi[idx]);
        if(ps[se].c==='l'){
          ps[se].key='x';
        }
        else{
          ps[se].key='y';
        }
        props.Change(ps);
      }
    }
  }
  const onstart = (e) => {
    e.target.id=`${Pi[idx].c}`
    const se = Pi.findIndex((Px) => Px.key===`${Pi[idx].c}${x}${y}`);
    if(ps[se].c==='l'){
      ps[se].key='x';
    }
    else{
      ps[se].key='y';
    }
    props.Change(ps);
    sendMessage(ps);
  };
  const onend = (e) => {
    console.log(idx);
  };
  function myFunction(se, idx1,c1) {
    const x234=ps[se].image;
    const t=ps[se].t;
    ps[se].image=null;
    ps[se].c='n';
    ps[se].key=`n${ps[se].x}${ps[se].y}`
    ps[se].t='n';
    ps[idx1].image=x234;
    ps[idx1].c=c1;
    ps[idx1].key=`${c1}${ps[idx1].x}${ps[idx1].y}`
    ps[idx1].t=t;
  }
  const end=(e)=>{
    const ch1=document.getElementById(`${x}${y}`) ;
    const se1 = Pi.findIndex((Px) => Px.key==='y');
    const se2 = Pi.findIndex((Px) => Px.key==='x');
    if(Pi[idx].image===null ||(Pi[idx].c==='l' && se1!=-1)|| (Pi[idx].c==='d' && se2!=-1)){
      if(se1!=-1 ){
        ps[se1].key=`d${ps[se1].x}${ps[se1].y}`;
          const ch=document.getElementById(`${ps[se1].x}${ps[se1].y}`);
          if((Pi[se1].x+Pi[se1].y)%2===1){
            ch.className='color1';
          }
          else{
            ch.className='color2';
          }
          ch1.className='color1n';
          props.Change(ps);
          if(ps[idx].c!='d' ){
              if( (dpmove(se1,idx,ps)===1 || kmove(se1,idx,ps)===1 || rmove(se1,idx,ps)===1 || qmove(se1,idx,ps)||bmove(se1,idx,ps))){
                myFunction(se1,idx,'d');
                props.Val(0);
                props.Change(ps);
              }
          }
      }
    if(se2!=-1){
      const ch=document.getElementById(`${ps[se2].x}${ps[se2].y}`);
      if((Pi[se2].x+Pi[se2].y)%2===1){
        ch.className='color1';
        ch1.className='color1n';
      }
      else{
        ch.className='color2';
        ch1.className='color1n';
      }
      ps[se2].key=`l${ps[se2].x}${ps[se2].y}`
      props.Change(ps);
        if(ps[idx].c!='l'){
          if( (lpmove(se2,idx,ps)===1 || kmove(se2,idx,ps)===1 || rmove(se2,idx,ps)===1 ||bmove(se2,idx,ps) )){
            myFunction(se2,idx,'l');
            props.Val(1);
            props.Change(ps); 
          }
        } 
      }   
    }
    setTimeout(() => {
      if((x+y)%2===1){
        ch1.className='color1';
      }
      else{
        ch1.className='color2';
      }
    }, "1000");
  }
  const onDragDrop = (e) => {
    e.preventDefault();
    console.log('sfda',idx);
    const se1 = Pi.findIndex((Px) => Px.key==='y');
    const se2 = Pi.findIndex((Px) => Px.key==='x');
    if(se1!=-1 ){
        ps[se1].key=`d${ps[se1].x}${ps[se1].y}`;
        props.Change(ps);
        if(ps[idx].c!='d' ){
          console.log(props.v1,"nikhl");
            if(qmove(se1,idx,ps)===1){
              myFunction(se1,idx,'d');
              console.log('and');
              console.log(ps[idx].x);
              props.setx(ps[idx].x);
              props.sety(ps[idx].y);
              props.Change(ps); 
            }
            if(props.val===1 && props.t===1 && ischeck(ps,props.kx,props.ky)===0 && (dpmove(se1,idx,ps)===1 || kmove(se1,idx,ps)===1 || rmove(se1,idx,ps)===1 ||bmove(se1,idx,ps))){
              myFunction(se1,idx,'d');
              props.Change(ps); 
              props.sett(0);
              socket.emit('send',0);
              sendMessage(ps,props.t);
            }
        }
    }
  if(se2!=-1){
    ps[se2].key=`l${ps[se2].x}${ps[se2].y}`
    props.Change(ps);
      if(ps[idx].c!='l'){
        if((props.val===0 && props.t===0 && lpmove(se2,idx,ps)===1 || kmove(se2,idx,ps)===1 || rmove(se2,idx,ps)===1 ||bmove(se2,idx,ps)||lqmove(se2,idx,ps) )){
          myFunction(se2,idx,'l');
          props.Change(ps);
          props.sett(1);
          socket.emit('send',1);
          sendMessage(ps,1);  
        }
      }
    }
};
  return (
    <>
      {(props.row % 2 === 0 && props.column % 2 === 1) ||
      (props.row % 2 === 1 && props.column % 2 === 0) ? (
        <div
        className='color1'
        draggable="true" 
          id={`${props.row}${props.column}`}
          onDrop={(e)=> onDragDrop(e)}  onDragOver={(e)=>allowDrop(e)}  onDragEnd={(e)=> onend(e)}
          onTouchStart={(e)=> end(e)}
          onClick={(e)=> end(e)}   
        >
          <>
            {c != "n" ? (
              <img
              id={`${Pi[idx].c}${x}${y}`}
                onDragStart={(e)=> onstart(e)}
                onTouchStart={(e)=> start(e)}
                onClick={(e)=> start(e)}
                className="chesbd"
                src={Pi[idx].image}
                
              />  
            ) : (
              <div></div>
            )}
          </>
        </div>
        
      ) : (
        <div
          className='color2'
          id={`${props.row}${props.column}`}
          onDrop={(e)=> onDragDrop(e)}  onDragOver={(e)=>allowDrop(e)}
          onTouchEnd={(e)=> end(e)}
          onClick={(e)=> end(e)} 
        >

          <>
            {c!= "n" ? (
              <img
              onDragStart={(e)=> onstart(e)}  
              onTouchStart={(e)=> start(e)}
              onClick={(e)=> start(e)}
              id={`${Pi[idx].c}${x}${y}`}
                draggable="true"
                className="chesbd"
                src={Pi[idx].image}
              />
            ) : (
              <div></div>
            )}
          </>
        </div>
      )}
    </>
  );
}
