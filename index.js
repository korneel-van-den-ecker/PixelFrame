var Marquee = require('./marquee');
var Color = require('./color');
var PIxelframe  =require('./PixelFrame');
var LedBitMap = require('./ledBitmap');
//Lijst die de berichten bijhoudt die getoondt zijn geweest
var berichten = [];

var marquee = new Marquee(new PIxelframe(16,16));


exports.tekstMarque =  function (boodschap,letterkleur,achtergrondkleur) { 
  //berichten.push(boodschap);
  console.log(boodschap + letterkleur + achtergrondkleur);
  marquee.toonZin(boodschap,achtergrondkleur,letterkleur);
   //toonBoodschappen();
  //var pf = new PIxelframe(16,16);
  //var marquee = new Marquee(boodschap,new Color(255,0,0,20),new Color(0,0,255,20),pf);
  //marquee.toonZin();  
}

async function toonBoodschappen(){
  var pf = new PIxelframe(16,16);
  for(var i = 0; i < berichten.length; i ++){
      var marquee = new Marquee(berichten[i],new Color(255,0,0,20),new Color(0,0,255,20),pf);
      await marquee.toonZin();
      berichten[i].shift();
  }
}

 //Om een Pixelframe, verkregen als JSON ,om te zetten naar Bitmap
 exports.tekenBitmap = function(bitmapData){
  var pf = new PIxelframe(16,16);
  var ledBmp = new LedBitMap(pf.hoogte,pf.breedte,new Color(255,0,0,1),new Color(0,0,0,1))   
  pf.setLedBitmap(ledBmp.GetLedBitMapFromJSON(bitmapData));
  console.dir(pf.ledDriver.writeBuffer);
  pf.show();
 }

exports.printMsg = function() {
  console.log("This is a message from the demo package");
}  

