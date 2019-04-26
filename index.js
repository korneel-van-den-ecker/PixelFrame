var Marquee = require('./marquee');
var Color = require('./color');
var PIxelframe  =require('./PixelFrame');
var LedBitMap = require('./ledBitmap');

exports.tekstMarque = function (boodschap) { 
  var pf = new PIxelframe(16,16);
  var marquee = new Marquee(boodschap,new Color(255,0,0,1),new Color(0,0,0,1),pf);
  marquee.toonZin();
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