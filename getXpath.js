

document.addEventListener('click', (e)=>{
    console.log(e.path[0].nodeName)
    let __x__ = e.path[0].nodeName;
    let aa = document.querySelectorAll(`${__x__}`);
    let arr = [];
    let ar1 = [];
    let ind = [];
    let ind1 = [];
    let cc = console.log;
    let pS = e.target.getAttribute('class');
    Array.from(aa).findIndex((e)=>{
        console.log(e.getAttribute('class'))
        if(e.getAttribute('class') == `${pS}`){
        let parent = '';
        let pr = 'parentNode';
        let name = 'nodeName';
        let xpaths = '';
        let pas = '';
        
        let inter = setInterval(()=>{
    
        if(eval('e[pr]'+parent+'[name]') == '#document'){
        ind.reverse();
        // arr.shift();
        // ar1.reverse();
    let maxArr = arr.length-1;
    for(let i=1; i<=maxArr; i++){
        for(let j=0; j<=i; j++){
            Array.from(arr[i].children).forEach((el,inx)=>{
                if(el == ar1[j]){
                    ind.push(el)
                    ind1.push(inx)
                }
            })
        }
        if(i==maxArr){
            ind1 = ind1.map(e => e+1).reverse();
            if(xpaths.endsWith('/')){
                xpaths= xpaths.substr(0,xpaths.length-1);
            }
            xpaths = xpaths.split('/').reverse();
            xpaths.push(e.nodeName)
             xpaths.shift(); xpaths.shift();
             
             ind1.forEach((vv,ii)=>{
                 xpaths[ii] = `${xpaths[ii]}[${vv}]`
                 if(ind1.length-1==ii){
                     cc(xpaths = xpaths.toString().replaceAll(',','/'))
                     cc(document.evaluate(`HTML/BODY/${xpaths}`, document, null, XPathResult.ANY_TYPE, null).iterateNext())
                 }
             });
        }
    }
    clearInterval(inter);
        }
        else{
        xpaths+=eval('e[pr]'+parent+'[name]')+'/';
        arr.push(eval('e'+parent));
        ar1.push(eval('e'+parent))
        parent+='[pr]';
        }
        },500);
        return true;
        }
        });
});


