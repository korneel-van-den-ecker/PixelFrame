var PixelFrame = require('./PixelFrame');

const pf = new PixelFrame();
console.log(pf.hoogte,pf.breedte);

while(1){
    var i = getRandomInt(0,pf.breedte);
    var j =getRandomInt(0,pf.hoogte);
    
          pf.kleurPixelMetWiel(i,j,getRandomInt(0,256),5);
          pf.show();
          pf.kleurPixel(i,j,0,0,0,5);   
          //pf.show();
    
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
