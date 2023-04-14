function checkkn(x1,x2,y1,y2){
    if(
        (x1+2===x2 && y1+1===y2) 
        ||
        (y1+2===y2 && x1+1===x2)
        ||
        (x1-2===x2 && y1-1===y2)
        ||
        (y1-2===y2 && x1-1===x2)
        ||
        (x1-2===x2 && y1+1===y2)
        ||
        (y1-2===y2 && x1+1===x2)
        ||
        (x1+2===x2 && y1-1===y2)
        ||
        (y1+2===y2 && x1-1===x2)
    ){return 1;}
    else return 0;
}
export const dpmove=(se,idx,ps)=> {
        if(ps[se].t==='dp'){
            const x1=ps[se].x+1;
            const y1=ps[se].y+1;
            const y2=ps[se].y-1;
            if(ps[idx].c==='l'){
                if(ps[idx].x===x1 && ps[idx].y===y1){return 1;}
                if(ps[idx].x===x1 && ps[idx].y===y2){return 1;}
            }
            else if(ps[idx].x===(ps[se].x)+1 && ps[idx].y===ps[se].y){
                    return 1;
            }
            else if(ps[se].x===2 && ps[idx].x===ps[se].x+2 && ps[idx].y===ps[se].y){
                    return 1;
            }
            else{return 0;}
        }
}
export const lpmove=(se,idx,ps)=> {
            if(ps[se].t==='lp'){
                const x1=ps[se].x-1;
                const y1=ps[se].y+1;
                const y2=ps[se].y-1;
                if(ps[idx].c==='d'){
                    if(ps[idx].x===x1 && ps[idx].y===y1){return 1;}
                    if(ps[idx].x===x1 && ps[idx].y===y2){return 1;}
                }
                else if(ps[idx].x===(ps[se].x)-1 && ps[idx].y===ps[se].y){
                    return 1;
                }
                else if(ps[se].x===7 && ps[idx].x===ps[se].x-2 && ps[idx].y===ps[se].y){return 1;}
                else{return 0;}
            }
}
export const kmove=(se,idx,ps)=> {
    if(ps[se].t==='dk' || ps[se].t==='lk'){
        var x1=ps[se].x;
        var x2=ps[idx].x;
        var x3=ps[se].y;
        var x4=ps[idx].y;
        if(checkkn(x1,x2,x3,x4)===1){
            return 1;
        }
        else{return 0;}
    }
    else return 0;
}
export const rmove=(se,idx,ps)=> {
    if(ps[se].t==='dr' || ps[se].t==='lr' || ps[se].t==='dq' || ps[se].t==='lq'){
        console.log("jbhkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")
        var f=9;
        var l=-1;
        var r=9;
        var b=-1;
        for(var i=ps[se].x+1;i<=8;i++){
            const se1 = ps.findIndex((Px) => Px.key===`d${i}${ps[se].y}`);
            const se2 = ps.findIndex((Px) => Px.key===`l${i}${ps[se].y}`);
                if(se1!=-1){
                    if(ps[se].c==='l'){
                        f=ps[se1].x+1;
                    }
                    else{
                        f=ps[se1].x;
                    }
                    break;
                }
                if(se2!=-1){
                    f=ps[se2].x+1;
                    if(ps[se].c==='l'){
                        f--;
                    }
                    break;
                }
        }
        for(var i=ps[se].y-1;i>=0;i--){
            const se1 = ps.findIndex((Px) => Px.key===`d${ps[se].x}${i}`);
            const se2 = ps.findIndex((Px) => Px.key===`l${ps[se].x}${i}`);
                if(se1!=-1){
                    l=ps[se1].y;
                    if(ps[se].c==='l'){
                        l--;
                    }
                    break;
                }
                if(se2!=-1){
                    l=ps[se2].y-1;
                    if(ps[se].c==='l'){
                        l++;
                    }
                    break;
                }
        }
        for(var i=ps[se].y+1;i<=8;i++){
            const se1 = ps.findIndex((Px) => Px.key===`d${ps[se].x}${i}`);
            const se2 = ps.findIndex((Px) => Px.key===`l${ps[se].x}${i}`);
                if(se1!=-1){
                    r=ps[se1].y;
                    if(ps[se].c==='l'){r++;}
                    break;
                }
                if(se2!=-1){
                    r=ps[se2].y+1;
                    if(ps[se].c==='l'){r--;}
                    break;
                }
        }
        for(var i=ps[se].x-1;i>=0;i--){
            const se1 = ps.findIndex((Px) => Px.key===`d${i}${ps[se].y}`);
            const se2 = ps.findIndex((Px) => Px.key===`l${i}${ps[se].y}`);
                if(se1!=-1){
                    b=ps[se1].x;
                    if(ps[se].c==='l'){b--;}
                    break;
                }
                if(se2!=-1){
                    b=ps[se2].x-1;
                    if(ps[se].c==='l'){b++;}
                    break;
                }
        }
        if(((ps[idx].x===(ps[se].x) || ps[idx].y===ps[se].y)) && ps[idx].x<f && ps[idx].y>l && ps[idx].y<r && ps[idx].x>b){
            return 1;
        }
    }
    else{return 0;}
}
export const bmove=(se,idx,ps)=> {
    if(ps[se].t==='db' || ps[se].t==='lb'|| ps[se].t==='dq' || ps[se].t==='lq'){
        var f1=9;
        var f2=9;
        var fl1=9;
        var fl2=0;
        var fr1=0;
        var fr2=9;
        var fx1=0;
        var fx2=0;
        for(var i=ps[se].x+1,j=ps[se].y+1;i<=8||j<=8;i++,j++){
            const se1 = ps.findIndex((Px) => Px.key===`d${i}${j}`);
            const se2 = ps.findIndex((Px) => Px.key===`l${i}${j}`);
                if(se1!=-1){
                    if(ps[se].c==='l'){
                        f1=ps[se1].x+1;
                        f2=ps[se1].y+1;
                    }
                    else{
                        f1=ps[se1].x;
                        f2=ps[se1].y;
                    }
                    break;
                }
                if(se2!=-1){
                    if(ps[se].c==='l'){
                        f1=ps[se2].x;
                        f2=ps[se2].y;
                    }
                    else{
                        f1=ps[se2].x+1
                        f2=ps[se2].y+1;
                    }
                    break;
                }
        }
        for(var i=ps[se].x+1,j=ps[se].y-1;i<=8||j>0;i++,j--){
            const se1 = ps.findIndex((Px) => Px.key===`d${i}${j}`);
            const se2 = ps.findIndex((Px) => Px.key===`l${i}${j}`);
                if(se1!=-1){
                    if(ps[se].c==='l'){
                        fl1=ps[se1].x+1;
                        fl2=ps[se1].y+1;
                    }
                    else{
                        fl1=ps[se1].x;
                        fl2=ps[se1].y;
                    }
                    break;
                }
                if(se2!=-1){
                    if(ps[se].c==='l'){
                        fl1=ps[se2].x;
                        fl2=ps[se2].y;
                    }
                    else{
                        fl1=ps[se2].x+1
                        fl2=ps[se2].y+1;
                    }
                    break;
                }
        }
        for(var i=ps[se].x-1,j=ps[se].y+1;i>0||j<=8;i--,j++){
            const se1 = ps.findIndex((Px) => Px.key===`d${i}${j}`);
            const se2 = ps.findIndex((Px) => Px.key===`l${i}${j}`);
                if(se1!=-1){
                    if(ps[se].c==='l'){
                        fr1=ps[se1].x;
                        fr2=ps[se1].y;
                    }
                    else{
                        fr1=ps[se1].x;
                        fr2=ps[se1].y;
                    }
                    break;
                }
                if(se2!=-1){
                    if(ps[se].c==='l'){
                        fr1=ps[se2].x+1;
                        fr2=ps[se2].y+1;
                    }
                    else{
                        fr1=ps[se2].x;
                        fr2=ps[se2].y;
                    }
                    break;
                }
        }
        for(var i=ps[se].x-1,j=ps[se].y-1;i>0||j>0;i--,j--){
            const se1 = ps.findIndex((Px) => Px.key===`d${i}${j}`);
            const se2 = ps.findIndex((Px) => Px.key===`l${i}${j}`);
                if(se1!=-1){
                    if(ps[se].c==='l'){
                        fx1=ps[se1].x;
                        fx2=ps[se1].y;
                    }
                    else{
                        fx1=ps[se1].x+1;
                        fx2=ps[se1].y+1;
                    }
                    break;
                }
                if(se2!=-1){
                    if(ps[se].c==='l'){
                        fx1=ps[se2].x;
                        fx2=ps[se2].y;
                    }
                    else{
                        fx1=ps[se2].x;
                        fx2=ps[se2].y;
                    }
                    break;
                }
        }
        var x=Math.abs(ps[idx].x-ps[se].x);
        var y=Math.abs(ps[idx].y-ps[se].y);
        if(x===y){
            console.log(fx1,fx2,"fuck me");
            if(ps[idx].x>=f1 && ps[idx].y>=f2){
                return 0;
            }
            if(ps[idx].x>=fl1 && ps[idx].y<=fl2){
                return 0;
            }
            if(ps[idx].x<fr1 && ps[idx].y>fr2){return 0;}
            if(ps[idx].x<fx1 && ps[idx].y<fx2){return 0;}
            else{return 1;}
        }
        else{return 0;}
    }
}
