var Marquee = require('./marquee');
var Color = require('./color');
var PIxelframe  =require('./PixelFrame');

exports.tekstMarque = function (boodschap) { 
  var marquee = new Marquee(boodschap,new Color(255,0,0,1),new Color(0,0,0,1),new PIxelframe(16,16));
  marquee.toonZin();
 }  

 //Om een Pixelframe, verkregen als JSON ,om te zetten naar Bitmap
 exports.tekenBitmap = function(bitmapData){

 }

exports.printMsg = function() {
  console.log("This is a message from the demo package");
}  