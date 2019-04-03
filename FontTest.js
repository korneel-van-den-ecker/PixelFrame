var Letters = require('./letters.js')
var PixelFrame = require('./PixelFrame');
var LedBitmap = require('./ledBitmap');
var Color =require('./color');

const pf = new PixelFrame(16,16);

var letters = new Letters();
console.log(letters.breedte);
_ledBitmap = new LedBitmap();


letterstest();

async function letterstest(){
    while(1){        
            for(var i=52;i<127;++i){
                for(var k = pf.breedte;k >=0;k--){
                    //pf.kleurVolledigFrame(new Color(255,0,0,1));                    
                    pf.setLedBitmap(letters.VerkrijgCharacterLedBitmap(String.fromCharCode(i),new Color(255,0,0,1)),0,k);  
                    //pf.setLedBitmap(letters.VerkrijgCharacterLedBitmap(String.fromCharCode(i),new Color(255,0,0,1)),0,k)                  
                    pf.show();
                    await sleep(0);
                    pf.blackout();  
            }            
        };           
    }
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