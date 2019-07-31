var PixelFrame = require('./PixelFrame');

const pf = new PixelFrame(16,16);
var i;
var j;
var k;

KleurenOVergang();
//TweeKleurenTest();

async function KleurenOVergang(){
  while(1){
    for(k=1;k<=255;k++){  
      pf.kleurVolledigFrame(PixelFrame.GetKleurVanWiel(k,5))
      pf.show();
      await PixelFrame.sleep(2);
    }
    for(k=255;k>=1;k--){  
      pf.kleurVolledigFrame(PixelFrame.GetKleurVanWiel(k,5))
      pf.show();
      await PixelFrame.sleep(2);
    }
  }
}

async function TweeKleurenTest(){
  while(1){
    pf.kleurVolledigFrame(PixelFrame.GetKleurVanWiel(5,1));
    pf.show();
    await PixelFrame.sleep(1000);
    pf.kleurVolledigFrame(PixelFrame.GetKleurVanWiel(150,1));
    pf.show();
    await PixelFrame.sleep(1000);
  }
}
