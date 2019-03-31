var Apa102spi = require('apa102-spi')

// Apa102spi(number of leds, clock divider)
var LedDriver = new Apa102spi(256)

// setLedColor(n, brightness 0-31, red 0-255, green 0-255, blue 0-255)
SendLed_Wait();

async function SendLed_Wait(){
  var i;
  var j;
    while(1){
            for(j =0; j<256;j++){
                LedDriver.setLedColor(j,1,0,0,255);
                LedDriver.sendLeds();
                await sleep(10)
                LedDriver.setLedColor(j,1,0,0,0) 
                LedDriver.sendLeds();                
              }           
              //Blackout_complete_Frame();
                     
    }  
};

async function Blackout_complete_Frame(){
  for(j =0; j<256;j++){
    LedDriver.setLedColor(j,31,0,0,0);    
  }
  LedDriver.sendLeds();
  await sleep(1); 
};

function sleep(ms){
   return new Promise(resolve=>{
       setTimeout(resolve,ms)
   })
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

// send data to led string

