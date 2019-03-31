var Letters = require('./letters.js')
var PixelFrame = require('./PixelFrame');

const pf = new PixelFrame(16,16);

var letters = new Letters();
console.log(letters.breedte);

var tets = letters.VerkrijgPixelCharacter('a');

pf.setLedBitmap(tets,2,2);
pf.show();
//console.log(tets);