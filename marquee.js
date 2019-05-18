var Letters = require('./letters.js')
var PixelFrame = require('./PixelFrame');
var Zin = require('./zin.js');

module.exports = class Marquee{
    constructor(pixelFrame){
        this.letters = new Letters();
        this.pf = pixelFrame;
        this.zin;
    }

    async toonZin(boodschap,achtergrondKleur,letterKleur,){
        this.zin = new Zin(boodschap,this.letters,achtergrondKleur,letterKleur);
        for(var i = 0 /*zin.beginEindSpatie*/; i <= this.zin.ledBitmap.breedte ; i++){
            var ledBitmap1 = this.zin.ledBitmap.GetFragmentOfLedBitmap(0,
                i,
                this.pf.breedte,
                this.zin.letters.hoogte);
            //console.dir(ledBitmap1.pixellijst);
            //console.log(`het volgende frame is: ${ledBitmap.pixellijst}`)
            this.pf.blackout();
            this.pf.setLedBitmap(ledBitmap1,3,0);
            this.pf.show()
            //await this.sleep(100);
            await PixelFrame.sleep(100);
            
        }
        console.log('bericht werd getoond');
        //callback.call(this);
        //returnt true om aan te geven dat de zin werd fetoond
        return true;
    };
}
