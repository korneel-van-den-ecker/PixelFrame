var PixelFrame = require('./PixelFrame');
var Color = require('./color');
const pf = new PixelFrame(16,16);
while(1){
    var i = PixelFrame.getRandomInt(0,pf.breedte);
    var j = PixelFrame.getRandomInt(0,pf.hoogte);
    
          pf.kleurPixelColor(i,j,PixelFrame.GetKleurVanWiel(PixelFrame.getRandomInt(0,256),5));
          console.log(PixelFrame.GetKleurVanWiel(PixelFrame.getRandomInt(0,256),5));
          pf.show();
          PixelFrame.sleep(20);
          pf.kleurPixelColor(i,j,new Color(0,0,0,5));   
          pf.show();
    
}

