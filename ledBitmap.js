var Color =require('./color');

module.exports = class LedBitmap{
    constructor(hoogte,breedte,achtergrondKleur,afbeeldingsKleur){
        this.breedte = breedte;
        this.hoogte = hoogte;
        this.achtergrondKleur = achtergrondKleur;
        this.afbeeldingsKleur = afbeeldingsKleur
        this.pixellijst = new Array(this.hoogte);
        for(var i = 0; i < this.hoogte; i++){
            this.pixellijst[i] = new Array(this.breedte);
        };

        this.KleurVolledigeBitmapInKleur(achtergrondKleur);      

    };

    KleurVolledigeBitmapInKleur(kleur){
        //De volledige bitmap kleuren voordat er op geplaatst word in de achtergrond kleur
        for(var i = 0; i < this.hoogte; i++){    
            for(var j = 0; j < this.breedte; j++){
                this.pixellijst[i][j] = kleur;
            }
        };
    }

    GetLedBitmapFromFont(bitmap){
        for(var i = 0; i < this.hoogte; i++){
            var str = bitmap[i];
            for(var j = 0; j < this.breedte; j++){
                if(str[j] == 0 || str[j] == "O"){
                    this.pixellijst[i][j] = this.afbeeldingsKleur;
                }
                else{
                    this.pixellijst[i][j] = this.achtergrondKleur;
               }
            };
        };
        return this;
    };

    GetLedBitMapFromJSON(data){
        for(var i = 0; i < data.pixelLijst.length; i++){
            var kleurString = data.pixelLijst[i].kleur;
            var kleurstrinSplit = kleurString.split(',')
            console.log(`kleur ${i}: r:${kleurstrinSplit[0]} ,g:${kleurstrinSplit[1]} ,b:${kleurstrinSplit[2]}`)
            var kleur = new Color(kleurstrinSplit[0],kleurstrinSplit[1],kleurstrinSplit[2],1);
            this.pixellijst[data.pixelLijst[i].yPos][data.pixelLijst[i].xPos] = kleur;
        };
        return this;
    };

    AddLedBitmapToLedBitmap(ledBitmap,ankerHoogte,ankerBreedte){
        if(ledBitmap != undefined){
            for(var i = 0; i < ledBitmap.hoogte; i++){    
                for(var j = 0; j < ledBitmap.breedte; j++){
                    if(ledBitmap.pixellijst[i][j] != undefined)
                    this.pixellijst[i+ankerHoogte][j+ankerBreedte] = ledBitmap.pixellijst[i][j];
                }
            };
        }            
    }

    GetFragmentOfLedBitmap(ankerHoogte, ankerBreedte, breedte, hoogte){
        var ledBitmap = new LedBitmap(hoogte,breedte,this.achtergrondKleur,this.afbeeldingsKleur);
        for(var i = 0; i < ledBitmap.hoogte; i++){    
            for(var j = 0; j < ledBitmap.breedte; j++){
                ledBitmap.pixellijst[i][j] = this.pixellijst[i+ankerHoogte][j+ankerBreedte];
            }
        };
        //console.dir(ledBitmap.pixellijst);
        return ledBitmap;
    };
};