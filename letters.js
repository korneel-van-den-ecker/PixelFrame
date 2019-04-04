var PixelFrame = require('./PixelFrame');
var Color = require('./color');
var LedBitmap = require('./ledBitmap');
var fs = require('fs');

const fontpath = 'miniwi.json';

module.exports = class Letter{
    constructor(){
        let fontRaw = fs.readFileSync(fontpath);
        this.font = JSON.parse(fontRaw);
    };

    VerkrijgCharacterLedBitmap(karakter,kleur){
        var charset =   this.font.CharSet.find(i => i.Character == karakter);
        if(charset != undefined){            
            var bitmap = charset.Bitmap      
            // Het karakter opzoeken in de json en de bitmap setten
                      
            var ledBitmap = new LedBitmap(bitmap.length,bitmap[0].length); 
            return ledBitmap.GetLedBitmapFromFont(bitmap,kleur);     
        }
        else{
            return ledBitmap.GetLedBitmapFromFont(this.font.CharSet.find(i => i.Character == 'a').Bitmap,kleur);
        }        
    };
};

