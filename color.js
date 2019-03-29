module.exports = class Color{
    constructor(r,g,b,bright){
        this.r = r;
        this.g = g;
        this.b = b;
        this.brightness = bright;
        this.hex = this.hex();
    };

    get hex(){
        return ((this.r << 16) & (this.g << 8) & this.b);
    }
};  