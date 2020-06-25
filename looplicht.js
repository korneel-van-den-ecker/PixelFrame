var PixelFrame = require('./PixelFrame');

const pf = new PixelFrame(16, 16);
console.log(pf.hoogte, pf.breedte);

const iLijst = []
const jLijst =[];

while (1) {
  for (let r = 0; r < pf.breedte; r++) {
    for (let p = 0; p < 10; p++) {
      var i = getRandomInt(0, r);
      iLijst.push(i)
      var j = getRandomInt(0, pf.hoogte);
      jLijst.push(j);
      pf.kleurPixelMetWiel(i, j, getRandomInt(0, 256), 1);
      pf.show();
    }
  }
  //de eersten terug uitdoven
  for (let k = 0; k < iLijst.length; k++) {
    pf.kleurPixel(iLijst[k], jLijst[k], 0,0,0, 1);    
    pf.show();
  }
  pf.blackout()
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
