export const ischeck=(ps,kx,ky)=> {
  //  console.log("asdjkhcaljsc kjsgfasdbcsawhwerbcb fahdjcasdchfasdf ");
    let x=0;
  for(var i=kx+1;i<=8;i++){
    const se2 = ps.findIndex((Px) => Px.key===`l${i}${ky}`);
    if(se2!=-1){
        if(ps[se2].t==='lq' || ps[se2].t==='lr'){
            x=1;
        }
        break;
    }
  }
  console.log(kx,ky,x,'fuck me');
  if(x===1){return 1;}
  else{return 0;}
}