var Apa102spi = require('apa102-spi')
var Color =require('./color');

module.exports = class PixelFrame{
  constructor(hoogte,breedte){
    this.breedte = breedte;
    this.hoogte = hoogte;
    this.ledDriver = new Apa102spi(breedte*hoogte,800);
  }

  //Kleur hele frame in een bepaalde kleur
  kleurVolledigFrame(kleur){
    var i,j;
    for(i=0;i<this.hoogte;i++){
      for(j=0;j<this.breedte;j++){
        this.kleurPixelColor(i,j,kleur);        
      }
    }
  }
//Kleur pixel aan de hand van x, y pos en kleur
  kleurPixelColor(x,y,kleur){
    if(x%2 != 0){
      y = this.hoogte -1 - y;
    }
    let nummer = ((x*this.hoogte)+y);
    if(kleur != undefined)
      this.ledDriver.setLedColor(nummer,kleur.brightness,kleur.r,kleur.g,kleur.b);
  };

  //Zet alle pixels op zwart
  blackout(){
    this.kleurVolledigFrame(new Color(0,0,0,1));
    //this.show();
    }
  //verzend de WriteBuffer naar de Leds
  show(){
    this.ledDriver.sendLeds();
  }
  //deze methode neemt een waarde tussen 0-255 voor de kleur en toont 
  //enkel de "volste kleuren"
 
  static GetKleurVanWiel(wiel_positie,brightness){
    if(wiel_positie > 255)
      wiel_positie = 255; //Veiligheid
    if( wiel_positie <0)
      wiel_positie = 0;
    if(wiel_positie<85)
      return new Color(wiel_positie*3,255-wiel_positie*3,0,brightness);
    else if(wiel_positie<170){
      wiel_positie -= 85;
      return new Color(255-wiel_positie*3,0,wiel_positie*3,brightness);
    }
    else if(wiel_positie <=255 ){
      wiel_positie -= 170;
      return new Color(0,wiel_positie*3,255-wiel_positie,brightness);
    }      
  }  

  static sleep(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
  };
  
  static getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  };

  //Anker bevind zich links boven van de figuur
  setLedBitmap(ledbitmap, ankerHoogte = 0,ankerBreedte = 0){
    var i,j;
    //Dit zorgt er voor dat de afbeelding het de pixelframe in een achtergrondkleur tekent.
    this.kleurVolledigFrame(ledbitmap.achtergrondKleur);
    //Omzetten van de ledbitmap.pixellijst naar de juiste pixels die gekleurd moeten worden    
    for(i = 0; i < ledbitmap.hoogte; i++){    
      for(j = 0; j < ledbitmap.breedte; j++){
        var posHoogte = ankerHoogte + i;
        var posBreedte = ankerBreedte + j;
        if(posBreedte < this.breedte && posHoogte < this.hoogte){

          if(ledbitmap.pixellijst[i][j] != undefined)                
            this.kleurPixelColor(posHoogte, posBreedte, ledbitmap.pixellijst[i][j]);
        }
                       
      }
    }
  }

};

