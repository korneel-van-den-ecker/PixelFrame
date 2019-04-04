var Color =require('./color');

module.exports = class LedBitmap{
    constructor(hoogte,breedte){
        this.breedte = breedte;
        this.hoogte = hoogte;
        this.pixellijst = new Array(this.hoogte);
        for(var i = 0; i < this.hoogte; i++){
            this.pixellijst[i] = new Array(this.breedte);
        };
    };

    GetLedBitmapFromFont(bitmap,letterKleur,achtergrondKleur){
        for(var i = 0; i < this.hoogte; i++){
            var str = bitmap[i];
            for(var j = 0; j < this.breedte; j++){
                if(str[j] == 0 | str[j] == "O"){
                    this.pixellijst[i][j] = letterKleur;
                }
                else{
                    this.pixellijst[i][j] = achtergrondKleur;
               }
            };
        };
        return this;
    };
};  