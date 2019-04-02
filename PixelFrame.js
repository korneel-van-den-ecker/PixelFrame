
var Apa102spi = require('apa102-spi')
var Ledbitmap = require('./ledBitmap')
var Color =require('./color');

//Info over  klasses maken 
//https://scotch.io/tutorials/better-javascript-with-es6-pt-ii-a-deep-dive-into-classes

var _ledbitmap = new Ledbitmap(0,0);


module.exports = class PixelFrame{
  constructor(hoogte,breedte){
    this.breedte = breedte;
    this.hoogte = hoogte;
    this.ledDriver = new Apa102spi(breedte*hoogte,800);
    console.log(this.ledDriver);
  }

  kleurVolledigFrameMetWiel(wielwaarde,brightness){
    var i,j;
    for(i=0;i<this.hoogte;i++){
      for(j=0;j<this.breedte;j++){
        this.kleurPixelMetWiel(i,j,wielwaarde,brightness);        
      }
    }
  }

  kleurVolledigFrame(kleur){
    var i,j;
    for(i=0;i<this.hoogte;i++){
      for(j=0;j<this.breedte;j++){
        this.kleurPixelColor(i,j,kleur);        
      }
    }
  }

  kleurPixelColor(x,y,kleur){
    if(x%2 != 0){
      y = this.hoogte -1 - y;
    }
    let nummer = ((x*this.hoogte)+y);
    this.ledDriver.setLedColor(nummer,kleur.brightness,kleur.r,kleur.g,kleur.b);
  };

  kleurPixel(x,y,r,g,b,bright){
    if(x%2 != 0){
      y = this.hoogte -1 - y;
    }
    let nummer = ((x*this.hoogte)+y);
    this.ledDriver.setLedColor(nummer,bright,r,g,b);
  }

  blackout(){
    this.kleurVolledigFrame(new Color(0,0,0,1));
    this.show();
    }

  show(){
    this.ledDriver.sendLeds();
  }
  //deze methode neemt een waarde tussen 0-255 voor de kleur en toont 
  //enkel de "volste kleuren"
  kleurPixelMetWiel(x,y,wiel_positie,brightness){
    if(wiel_positie > 255)
      wiel_positie = 255; //Veiligheid
    if(wiel_positie<85)
      this.kleurPixel(x,y,wiel_positie*3,255-wiel_positie*3,0,brightness);  
    else if(wiel_positie<170){
      wiel_positie -= 85;
      this.kleurPixel(x,y,255-wiel_positie*3,0,wiel_positie*3,brightness)
    }
    else if(wiel_positie <=255 ){
      wiel_positie -= 170
      this.kleurPixel(x,y,0,wiel_positie*3,255-wiel_positie,brightness)
    }      
  }
  //Anker bevind zich links boven van de figuur
  setLedBitmap(ledbitmap = new ledbitmap(), ankerHoogte = 0,ankerBreedte = 0){
    var i,j;
    console.log("joooooooooooooo");
    console.log(ledbitmap);
    console.log(ledbitmap.hoogte);
    console.log(ledbitmap.breedte);
    for(i=0;i<ledbitmap.hoogte;i++){      
      console.log("joooooooooooooo");
      for(j=0;j<ledbitmap.breedte;j++){
       // if(ledbitmap[i][j] != new Color(0,0,0,1) )
       console.log(`ankerbreedte : ${ankerBreedte}, ankerhoogte : ${ankerBreedte},kleur: ${ledbitmap.pixellijst[i][j]} `)
       
    
        this.kleurPixelColor(ankerHoogte + i, ankerBreedte + j,ledbitmap.pixellijst[i][j]);              
      }
    }
  }
};

