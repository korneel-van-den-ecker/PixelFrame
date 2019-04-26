var PixelFrame = require('./PixelFrame');
var Color = require('./color');
var LedBitmap = require('./ledBitmap');
var fs = require('fs');
var fontje = require('./miniwi.json')

module.exports = class Letter{
    constructor(){
        //let fontRaw = fs.read(fontpath);
        //this.font = JSON.parse(fontRaw);
        this.font = fontje;
        console.dir(fontje);
        this.breedte = this.font.Size.Dx;
        this.hoogte = this.font.Size.Dy;
    };

    VerkrijgCharacterLedBitmap(karakter,achtergrondKleur,letterKleur){
        var charset =   this.font.CharSet.find(i => i.Character == karakter);
        
        if(charset != undefined){            
            var bitmap = charset.Bitmap     
            var ledBitmap = new LedBitmap(bitmap.length,bitmap[0].length);  
            ledBitmap.achtergrondKleur = achtergrondKleur;
            ledBitmap.afbeeldingsKleur = letterKleur;
            // Het karakter opzoeken in de json en de bitmap setten 
            return ledBitmap.GetLedBitmapFromFont(bitmap);     
        }
        else{
            //DEes Fixen--> gewoon weg doen ? 
            console.log("Tis hier te doen bijdie fout da je nog moet wergwerken")
            return new LedBitmap(this.hoogte,this.breedte,achtergrondKleur,letterKleur);
        }        
    };
};