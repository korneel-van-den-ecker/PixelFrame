var LedBitmap = require('./ledBitmap');

module.exports = class Zin{
    //TO DO: Op edze moment enkel van rechts naar links. Kan ook van onder naar boven 
    constructor(tekst,letters,achtergrondKleur,letterKleur){  
        //ruimte in pixels voor en achter de zin   
        this.beginEindSpatie = 16;
        //spatie in pixels tussen karakters
        this.letterSpatie = 1;
        //De leetters waaruit men de karakters kan kiezen
        this.letters = letters;
        //de zin omzetten naar een array van chars
        this.charArray = Array.from(tekst);
        //Een array van ledBitmaps maken die alle karakters zal bevatten
        this.ledBitmapArray = new Array(this.charArray.length);
        //de ledBitmap die uiteindelijk de volledige zin zal bevatten
        this.ledBitmap;        
        this.hoogte = this.letters.hoogte;
        this.breedte = 0; 
        //initieer de ledBitmap 
        this.InitLedBitmap(achtergrondKleur,letterKleur);
    }

    InitLedBitmap(achtergrondKleur,letterKleur) {           
        var teller = 0;
        
        //Van elke letter een ledbitmap maken
        for (var i = 0; i < this.charArray.length; i++) {
            this.ledBitmapArray[i] = this.letters.VerkrijgCharacterLedBitmap(this.charArray[i],
                achtergrondKleur,
                letterKleur);
        };        
        //Berekenen van de breedte van de totale zin met een volledig pixelframe ervoor en erachter
        //berekenen hoeveel frames er moeten getoond worden        
        for (var i = 0; i < this.ledBitmapArray.length; i++){
            this.breedte += (this.ledBitmapArray[i].breedte + this.letterSpatie);        
        };
        // 1 groot lang ledbitmap maken
        this.ledBitmap = new LedBitmap(this.hoogte,this.breedte+(2*this.beginEindSpatie),
        achtergrondKleur,
        letterKleur);
        //initializeren        
        for (var j = this.beginEindSpatie;
             j < (this.ledBitmap.breedte - this.beginEindSpatie); 
             j = j + (this.letters.breedte+this.letterSpatie) ){            
                this.ledBitmap.AddLedBitmapToLedBitmap(this.ledBitmapArray[teller],0,j)
                teller++;            
            }
    }
    
};


