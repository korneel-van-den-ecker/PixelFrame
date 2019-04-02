var Letters = require('./letters.js')
var PixelFrame = require('./PixelFrame');
var LedBitmap = require('./ledBitmap');

const pf = new PixelFrame(16,16);

var letters = new Letters();
console.log(letters.breedte);
_ledBitmap = new LedBitmap();


letterstest();

async function letterstest(){

    for(var i=50;i<127;++i){
        pf.setLedBitmap(letters.VerkrijgCharacterLedBitmap(String.fromCharCode(i)),0,0);
    pf.show();
    await sleep(1000);
    pf.blackout();
    };
  };
  
  function sleep(ms){
     return new Promise(resolve=>{
         setTimeout(resolve,ms)
     })
  };
  
  function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    };