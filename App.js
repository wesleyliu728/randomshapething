(function() {
    var _onload = function() {
      var pretag = document.getElementById('d');
      var canvastag = document.getElementById('canvasdonut');
      var squaretag = document.getElementById('square')
      var tmr1 = undefined, tmr2 = undefined;
      var tmr3 = undefined;
      var A=-0, B=0;
      var a = 1.1, b = -0.5, c = 4.0;
      var light_vector = [1,-1,1]


      var b=[];
      var z=[];
      var squareframe=function(){
        var ctx = squaretag.getContext('2d');
        ctx.fillStyle='#000';
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      b -= 0.2;
      c += 0.1;
      var x = [1,0,0];
      var y = [0,1,0];
      var z = [0,0,1];
      
      var cA = Math.cos(a), sA = Math.sin(a),
      cB = Math.cos(b), sB = Math.sin(b),
      cC = Math.cos(c), sC = Math.sin(c);
      x = calc(x)
      y = calc(y)
      z = calc(z)
      
      
      for(var j = 0; j<=1; j+= 0.02){
        x1 = vectorMult(x, j)
        y1 = vectorMult(y, j)
        z1 = vectorMult(z, j)
        for(var i = 0; i<=1; i+= 0.02){
          xprime = vectorMult(x,i)
          yprime = vectorMult(y,i)
          zprime = vectorMult(z,i)
          plot(vectorSum(x1,yprime), 'z', false)
          plot(vectorSum(x1,zprime),'y', false)
          plot(vectorSum(y1,xprime),'z', false)
          plot(vectorSum(y1,zprime),'x', false)
          plot(vectorSum(z1,xprime),'y', false)
          plot(vectorSum(z1,yprime),'x', false)
          plot(vectorSum2(x,z1,yprime),'x', true)
          plot(vectorSum2(x,y1,zprime),'x', true)
          plot(vectorSum2(y,x1,zprime),'y', true) 
          plot(vectorSum2(y,z1,xprime),'y', true)
          plot(vectorSum2(z,x1,yprime),'z', true) 
          plot(vectorSum2(z,y1,xprime),'z', true)
        }

      }
      function calc(arr){

        
var n = [0,0,0]
n[0] = arr[0] * (cC * cB) + arr[1] * (-sC*cA + cC * sB * sA) + arr[2] * (sC * sA + cC * sB * cA)
n[1] = arr[0] * (sC * cB) + arr[1] * (cC*cA + sC * sB * sA) + arr[2] * (-cC * sA + sC * sB * cA)
n[2] = arr[0] * (-sB) + arr[1] * (cB*sA) + arr[2] * (cB*cA)
return(n)
}

function vectorMult(arr,val){
var a = [0,0,0]
for(var xee = 0; xee <3; xee++){
  a[xee] = arr[xee] * val
}
return(a)
}
function vectorSum(arr1,arr2){
var a = [0,0,0]
for(var xy = 0; xy <3; xy++){
a[xy] = arr1[xy] + arr2[xy]
}
return(a)
}
function dotProduct(arr1,arr2){
var curr = 0
for(var xee = 0; xee <3; xee++){
  curr += arr1[xee] + arr2[xee]
}
return curr
}
function vectorSum2(arr1,arr2,arr3){
var a = [0,0,0]
for(var xyz = 0; xyz <3; xyz++){
a[xyz] = arr1[xyz] + arr2[xyz] + arr3[xyz]
}
return(a)  
}
function plot(arr, normal, opp){
//opp = !opp
var xplot = arr[0],
yplot = arr[1],
zplot = 1/(arr[2] + 2.4); 
var xp=0|(xplot * zplot*150 +130),
      yp=0|(-yplot * zplot*150 + 100),
      o=xp+80*yp;
var l = 0;
if(normal == 'x'){
if(opp){
  l =dotProduct(x,light_vector)
  if(l>0){
  ctx.fillStyle = 'rgba(255,64,64),' + Math.sqrt(1/l)*0.1+')';}
ctx.fillRect(xp, yp, 1, 1);
}else{
  l = dotProduct(x,light_vector)
  if(l>0){
  ctx.fillStyle = 'rgba(64,255,64,' +Math.sqrt(1/l)*0.1+')';}
}
} else if(normal == 'y'){
if(opp){
  l = dotProduct(vectorMult(y,-1),light_vector)
  if(l>0){
  ctx.fillStyle = 'rgba(255,64,64),' + Math.sqrt(1/l)*0.1+')';}
}else{
  l = dotProduct(y,light_vector)
  if(l>0){
  ctx.fillStyle = 'rgba(64,255,64,' + Math.sqrt(1/l)*0.1+')';}
}
} else{
if(opp){
  l = dotProduct(vectorMult(z,-1),light_vector)
  if(l>0){
  ctx.fillStyle = 'rgba(255,64,64),' + Math.sqrt(1/l)*0.1+')';}
}else{
  l = dotProduct(z,light_vector)
  if(l>0){
  ctx.fillStyle = 'rgba(64,255,64,' + Math.sqrt(1/l)*0.1+')';}
}
}
window.anim3 = function() {
        if(tmr3 === undefined) {
          tmr3 = setInterval(squareframe, 50);
        } else {
          clearInterval(tmr3);
          tmr3 = undefined;
        }
      };
ctx.fillRect(xp, yp, 1, 1);
}
    }
      // This is copied, pasted, reformatted, and ported directly from my original
      // donut.c code
      
      squareframe();
    }
    
    if(document.all)
      window.attachEvent('onload',_onload);
    else
      window.addEventListener("load",_onload,false);
    })();