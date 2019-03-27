var PixelFrame = require('./PixelFrame');
var fs = require('fs');
const pf = new PixelFrame(16,16);

const fontpath = '4x5.json';

module.exports = class Letter{
    constructor(pixelframe){
        let fontRaw = fs.readFileSync(fontpath);
        this.font = JSON.parse(fontRaw);
        console.log(this.font.CharSet);
        this.breedte = this.font.Size.Dx;
        this.hoogte = this.font.Size.Dy;
        this.pixelFrame = pixelframe
    };

    VerkrijgPixelCharacter(karakter){
        //Pixellijst inittialiseren
        var pixellijst = new Array(this.breedte);
        for(var i = 0; i < this.hoogte; i++){
            pixellijst[i] = new Array(this.hoogte);
        };

        //if(this.font.CharSet.includes(karakter)){
            // Het karakter opzoeken in de json en de bitmap setten
            var bitmap = this.font.CharSet.find(i => i.Character == karakter).Bitmap
            console.log(bitmap)
        //};

        //De bitmap omzetten naar een lijst van pixels
        for(var i = 0; i < this.breedte; i++){
            var str = bitmap[i];
            for(var j = 0; j < this.hoogte; j++){
                if(str[j] == 0){
                    pixellijst[i,j] = 1;
                }
            };
        };
        console.log(pixellijst);
        return pixellijst;
    };

    
};

