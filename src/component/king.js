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
export const qmove=(se,idx,ps)=> {
    if(ps[se].t==='dki'){
        var kx=1;
        for(var i=ps[idx].x+1;i<=8;i++){
            const se2 = ps.findIndex((Px) => Px.key===`l${i}${ps[idx].y}`);
            if(se2!=-1){
                if(ps[se2].t==='lq' || ps[se2].t==='lr'){
                    kx=0;
                }
                break;
            }
        }
        for(var i=ps[idx].x-1;i>=1;i--){
            const se2 = ps.findIndex((Px) => Px.key===`l${i}${ps[idx].y}`);
            if(se2!=-1){
                if(ps[se2].t==='lq' || ps[se2].t==='lr'){
                    kx=0;
                }
                break;
            }
        }
        for(var i=ps[idx].y-1;i>=1;i--){
            const se2 = ps.findIndex((Px) => Px.key===`l${ps[idx].x}${i}`);
            if(se2!=-1){
                if(ps[se2].t==='lq' || ps[se2].t==='lr'){
                    kx=0;
                }
                break;
            }
        }
        for(var i=ps[idx].y+1;i<=8;i++){
            const se2 = ps.findIndex((Px) => Px.key===`l${ps[idx].x}${i}`);
            if(se2!=-1){
                if(ps[se2].t==='lq' || ps[se2].t==='lr'){
                    kx=0;
                }
                break;
            }
        }
        var x1=ps[idx].x;
        var y1=ps[idx].y;
        const se1 = ps.findIndex((Px) => Px.t===`lk`);
        var x2=ps[se1].x;
        var y2=ps[se1].y;
        ps[se1].t='tttttt';
        const se2 = ps.findIndex((Px) => Px.t===`lk`);
        var x3=ps[se2].x;
        var y3=ps[se2].y;
        ps[se1].t='lk';
        if(checkkn(x1,x2,y1,y2)===1){
            kx=0;
        }
        if(checkkn(x1,x3,y1,y3)===1){
            kx=0;
        }
        var xp=ps[idx].x+1;
        var yp=ps[idx].y+1;
        const sep = ps.findIndex((Px) => Px.key===`l${xp}${yp}`);
        if(sep!=-1){
            if( ps[sep].t==='lp')
            {kx=0;}
        }
        yp=ps[idx].y-1;
        const sep1 = ps.findIndex((Px) => Px.key===`l${xp}${yp}`);
        if(sep1!=-1){
            if( ps[sep].t==='lp')
            {kx=0;}
        }

        if((ps[se].x+1===ps[idx].x || ps[se].y-1 === ps[idx].y || (ps[se].x-1===ps[idx].x || ps[se].y+1===ps[idx].y)) && kx===1){return 1;}
    }
}
export const lqmove=(se,idx,ps)=> {
    if(ps[se].t==='lki'){
        var kx=1;
        for(var i=ps[idx].x+1;i<=8;i++){
            const se2 = ps.findIndex((Px) => Px.key===`d${i}${ps[idx].y}`);
            if(se2!=-1){
                if(ps[se2].t==='dq' || ps[se2].t==='dr'){
                    kx=0;
                }
                break;
            }
        }
        for(var i=ps[idx].x-1;i>=1;i--){
            const se2 = ps.findIndex((Px) => Px.key===`d${i}${ps[idx].y}`);
            if(se2!=-1){
                if(ps[se2].t==='dq' || ps[se2].t==='dr'){
                    kx=0;
                }
                break;
            }
        }
        for(var i=ps[idx].y-1;i>=1;i--){
            const se2 = ps.findIndex((Px) => Px.key===`d${ps[idx].x}${i}`);
            if(se2!=-1){
                if(ps[se2].t==='dq' || ps[se2].t==='dr'){
                    kx=0;
                }
                break;
            }
        }
        for(var i=ps[idx].y+1;i<=8;i++){
            const se2 = ps.findIndex((Px) => Px.key===`d${ps[idx].x}${i}`);
            if(se2!=-1){
                if(ps[se2].t==='dq' || ps[se2].t==='dr'){
                    kx=0;
                }
                break;
            }
        }
        var x1=ps[idx].x;
        var y1=ps[idx].y;
        const se1 = ps.findIndex((Px) => Px.t===`dk`);
        var x2=ps[se1].x;
        var y2=ps[se1].y;
        ps[se1].t='tttttt';
        const se2 = ps.findIndex((Px) => Px.t===`dk`);
        var x3=ps[se2].x;
        var y3=ps[se2].y;
        ps[se1].t='dk';
        if(checkkn(x1,x2,y1,y2)===1){
            kx=0;
        }
        if(checkkn(x1,x3,y1,y3)===1){
            kx=0;
        }
        var xp=ps[idx].x-1;
        var yp=ps[idx].y+1;
        const sep = ps.findIndex((Px) => Px.key===`d${xp}${yp}`);
        if(sep!=-1){
            if( ps[sep].t==='dp')
            {kx=0;}
        }
        yp=ps[idx].y-1;
        const sep1 = ps.findIndex((Px) => Px.key===`d${xp}${yp}`);
        if(sep1!=-1){
            if( ps[sep].t==='dp')
            {kx=0;}
        }
        if((ps[se].x+1===ps[idx].x || ps[se].y-1 === ps[idx].y || (ps[se].x-1===ps[idx].x || ps[se].y+1===ps[idx].y)) && kx===1){return 1;}
    }
}