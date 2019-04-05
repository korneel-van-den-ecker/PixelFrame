var Color =require('./color');

module.exports = class LedBitmap{
    constructor(hoogte,breedte,achtergrondKleur,letterKleur){
        this.breedte = breedte;
        this.hoogte = hoogte;
        this.achtergrondKleur = achtergrondKleur;
        this.letterKleur = letterKleur
        this.pixellijst = new Array(this.hoogte);
        for(var i = 0; i < this.hoogte; i++){
            this.pixellijst[i] = new Array(this.breedte);
        };
    };

    GetLedBitmapFromFont(bitmap){
        for(var i = 0; i < this.hoogte; i++){
            var str = bitmap[i];
            for(var j = 0; j < this.breedte; j++){
                if(str[j] == 0 | str[j] == "O"){
                    this.pixellijst[i][j] = this.letterKleur;
                }
                else{
                    this.pixellijst[i][j] = this.achtergrondKleur;
               }
            };
        };
        return this;
    };
};  