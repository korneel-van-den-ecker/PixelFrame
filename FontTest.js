var Letters = require('./letters.js')
var PixelFrame = require('./PixelFrame');

const pf = new PixelFrame(16,16);

var letters = new Letters(pf);
console.log(letters.breedte);

var tets = letters.VerkrijgPixelCharacter('a');