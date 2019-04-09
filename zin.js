var PixelFrame = require('./PixelFrame');
var Color = require('./color');
var LedBitmap = require('./ledBitmap');

module.exports = class Zin{
    //TO DO: Op edze moment enkel van rechts naar links. Kan ook van onder naar boven 
    constructor(tekst,letters,achtergrondKleur,letterKleur){        
        var teller = 0;
        this.beginEindSpatie = 16;
        this.letterSpatie = 1;
        this.letters = letters;
        this.charArray = Array.from(tekst);
        this.ledBitmapArray = new Array(this.charArray.length);
        this.ledBitmap;
        //Van elke letter een ledbitmap maken
        for (var i = 0; i < this.charArray.length; i++) {
            this.ledBitmapArray[i] = this.letters.VerkrijgCharacterLedBitmap(this.charArray[i],achtergrondKleur,letterKleur);
        };
        this.hoogte = this.letters.hoogte;
        this.breedte = 0;
        //console.log(this.ledBitmapArray); 
        //Kan weg?                                  
        //Berekenen van de breedte van de totale zin met een volledig pixelframe ervoor en erachter
        //berekenen hoeveel frames er moeten getoond worden        
        for (var i = 0; i < this.ledBitmapArray.length; i++){
            this.breedte += (this.ledBitmapArray[i].breedte + this.letterSpatie);        
        };
        //console.log('breedte is ' + this.breedte);
        // 1 groot lang ledbitmap maken 
        //To DO Magic Number toekenning this.breedte
        this.ledBitmap = new LedBitmap(this.hoogte,this.breedte+(2*this.beginEindSpatie),achtergrondKleur,letterKleur);
        //console.log(`breeedt van ledbitmap: ${this.ledBitmap.breedte},breeedte van zin: ${this.breedte}, hoogte: ${this.ledBitmap.hoogte}`);
        //console.log(`LedBitmaparray: ${this.ledBitmapArray.length},/n inhoud: ${this.ledBitmapArray}`);

        //initializeren        
        //console.dir(this.ledBitmapArray);
        for (var j = this.beginEindSpatie; j < (this.ledBitmap.breedte - this.beginEindSpatie); j = j + (this.letters.breedte+this.letterSpatie) ){
            //if(j==(this.ledBitmap.breedte - this.beginEindSpatie)-1)
                //j = j + this.letters.breedte;
            //console.log(`j = ${j}////// teller = ${teller}`)
            this.ledBitmap.AddLedBitmapToLedBitmap(this.ledBitmapArray[teller],0,j)
            //console.dir(this.ledBitmap.pixellijst)
            
            teller++;
            
            }
        
    }
    
};


