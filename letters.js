var PixelFrame = require('./PixelFrame');
var Color = require('./color');
var LedBitmap = require('./ledBitmap');
var fs = require('fs');

const fontpath = '4x5.json';

module.exports = class Letter{
    constructor(){
        let fontRaw = fs.readFileSync(fontpath);
        this.font = JSON.parse(fontRaw);
        console.log(this.font.CharSet);
        this.breedte = this.font.Size.Dx;
        this.hoogte = this.font.Size.Dy;
    };

    VerkrijgPixelCharacter(karakter){      
        //if(this.font.CharSet.includes(karakter)){
            // Het karakter opzoeken in de json en de bitmap setten
            var font = this.font.CharSet.find(i => i.Character == karakter).Bitmap
            console.log(font)
        //};
        var ledBitmap = new LedBitmap(this.hoogte,this.breedte);        
        return ledBitmap.GetLedBitmapFromFont(font);
    };

};

