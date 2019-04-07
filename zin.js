var PixelFrame = require('./PixelFrame');
var Color = require('./color');
var LedBitmap = require('./ledBitmap');

module.exports = class Zin{
    //TO DO: Op edze moment enkel van rechts naar links. Kan ook van onder naar boven 
    constructor(tekst,letters,achtergrondKleur,letterKleur){
        const beginEindSpatie = 16;
        const letterSpatie = 1;
        var teller = 0;
        this.letters = letters;
        this.charArray = Array.from(tekst);
        this.ledBitmapArray = new Array(this.charArray.length);
        
        //Van elke letter een ledbitmap maken
        for (var i = 0; i < this.charArray.length; i++) {
            this.ledBitmapArray[i] = this.letters.VerkrijgCharacterLedBitmap(this.charArray[i],achtergrondKleur,letterKleur);
        };
        this.hoogte = this.letters.hoogte;
        this.breedte = 0;
        console.log(this.ledBitmapArray);                                   
        //Berekenen van de breedte van de totale zin met een volledig pixelframe ervoor en erachter
        //berekenen hoeveel frames er moeten getoond worden        
        for (var i = 0; i < this.ledBitmapArray.length; i++){
            this.breedte += (this.ledBitmapArray[i].breedte + letterSpatie);        
        };
        console.log('breedte is ' + this.breedte);
        // 1 groot lang ledbitmap maken 
        //To DO Magic Number toekenning this.breedte
        this.ledBitmap = new LedBitmap(this.hoogte,this.breedte+(2*beginEindSpatie),achtergrondKleur,letterKleur);

        //initializeren        
        for (var j = beginEindSpatie-1; j < this.breedte - beginEindSpatie; j += (this.letters.breedte+letterSpatie) ){
            this.ledBitmap.AddLedBitmapToLedBitmap(this.ledBitmapArray[teller],0,j)
            teller++;
            }
        console.log(this.ledBitmap);
    }
    
};


