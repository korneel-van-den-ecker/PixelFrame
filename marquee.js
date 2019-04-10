var Letters = require('./letters.js')
var PixelFrame = require('./PixelFrame');
var Color =require('./color');
var Zin = require('./zin.js');

module.exports = class Marquee{
    constructor(boodschap,achtergrondKleur,letterKleur, pixelFrame){
        this.achtergrondKleur = achtergrondKleur;
        this.letterKleur = letterKleur;
        this.letters = new Letters();
        this.pf = pixelFrame;
        this.zin = new Zin(boodschap,this.letters,this.achtergrondKleur,this.letterKleur);
    }

    async toonZin(){
        for(var i = 0 /*zin.beginEindSpatie*/; i <= this.zin.ledBitmap.breedte ; i++){
            var ledBitmap1 = this.zin.ledBitmap.GetFragmentOfLedBitmap(0,i,this.pf.breedte,this.zin.letters.hoogte);
            //console.dir(ledBitmap1.pixellijst);
            //console.log(`het volgende frame is: ${ledBitmap.pixellijst}`)
            this.pf.blackout();
            this.pf.setLedBitmap(ledBitmap1,1,0);
            this.pf.setLedBitmap(ledBitmap1,6,0);
            this.pf.setLedBitmap(ledBitmap1,11,0);
            this.pf.show()
            //await this.sleep(100);
            await PixelFrame.sleep(100);
        }
    };

    sleep(ms){
        return new Promise(resolve=>{
            setTimeout(resolve,ms)
        })
    };   
}
