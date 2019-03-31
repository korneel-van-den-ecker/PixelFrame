var PixelFrame = require('./PixelFrame');

const pf = new PixelFrame(16,16);
var i;
var j;
var k;

while(1){
  for(k=1;k<=255;k++){  
    pf.kleurVolledigFrameMetWiel(k,1)
    pf.show();
  }
  for(k=255;k>=1;k--){  
    pf.kleurVolledigFrameMetWiel(k,1)
    pf.show();
  }
}
