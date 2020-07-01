module.exports = class Color {
    constructor(r, g, b, bright) {
        if (g === undefined) {
            this.r = r.r;
            this.g = r.g;
            this.b = r.b;
            this.brightness = r.bright;            
        }
        else {
            this.r = r;
            this.g = g;
            this.b = b;
            this.brightness = bright;            
        }
        this.hex = 0xff & ((this.r << 16) & (this.g << 8) & this.b);
        console.log(0xff & ((this.r << 16) & (this.g << 8) & this.b))
    };

};  