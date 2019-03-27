var PixelFrame = require('./PixelFrame');
var fs = require('fs');
const pf = new PixelFrame(16,16);

const fontpath = '4x5.json';

module.exports = class Letter{
    constructor(){
        let fontRaw = fs.readFileSync(fontpath);
        this.font = JSON.parse(fontRaw);
        console.log(this.font.CharSet);
        this.breedte = this.font.Size.Dx;
        this.hoogte = this.font.Size.Dy;
    }


};