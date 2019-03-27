
var Apa102spi = require('apa102-spi')

//Info over  klasses maken 
//https://scotch.io/tutorials/better-javascript-with-es6-pt-ii-a-deep-dive-into-classes



module.exports = class PixelFrame{
  constructor(breedte,hoogte){
    this.breedte = breedte;
    this.hoogte = hoogte;
    this.ledDriver = new Apa102spi(breedte*hoogte);
  }

  kleurVolledigFrameMetWiel(kleur,brightness){
    var i,j;
    for(i=0;i<this.breedte;i++){
      for(j=0;j<this.hoogte;j++){
        this.kleurPixelMetWiel(i,j,kleur,brightness);        
      }
    }
  }

  kleurVolledigFrame(r,g,b,brightness){
    var i,j;
    for(i=0;i<this.breedte;i++){
      for(j=0;j<this.hoogte;j++){
        this.kleurPixel(i,j,r,g,b,brightness);        
      }
    }
  }

  kleurPixel(x,y,r,g,b,brightness){
    if(x%2 != 0){
      y = this.breedte -1 - y;
    }
    let nummer = ((x*this.breedte)+y);
    this.ledDriver.setLedColor(nummer,brightness,r,g,b);
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

  setPixelLijst(pixelLijst){
    
  }
};

