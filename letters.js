var LedBitmap = require('./ledBitmap');
var font = require('./miniwi.json')

module.exports = class Letter{
    constructor(){
        this.font = font;
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
            //Wanneer het karakter niet wordt gevonden , en nieuwe ledbitmap ingeklerud met achtergrondkleur
            return new LedBitmap(this.hoogte,this.breedte,achtergrondKleur,letterKleur);
        }        
    };
};