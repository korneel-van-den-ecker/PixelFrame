var PixelFrame = require('./PixelFrame');
var Color =require('./color');
var Coordinaat = require('./coordinaat')

const Move = {
    UP: 0,
    DOWN: 1,
    RIGHT: 2,
    LEFT: 3
}

module.exports = class Marquee{
    //DEze klasse heeft een andere implementatie dan ledbitmap werk met een lijst van coordienaten 
    constructor(pixelframe,startLengte,StartPositieHoogte,kleur){
        this.pf = pixelframe;
        this.kleur = kleur;
        this.voedsel = this.GetRandomVoedsel();
        this.voedselkleur = kleur; 
        this.pixelLijst = new Array(startLengte);
        //lijst inittialiseren
        for(var i =0; i < startLengte; i++){
            this.pixelLijst[i] = new Coordinaat(i,StartPositieHoogte)    
        }
        this.GeselecteerdeMove = Move.RIGHT;
        this.speed = 1;
        this.checkGrens = true;
        this.maxLengte = 20;
        this.groei = false;
    }

    move(move,groei,show = true){
        this.groei = groei;
        var nieuweKop = new Coordinaat(0,0);
        var oudeKop = new Coordinaat(0,0);
        oudeKop = this.pixelLijst[this.pixelLijst.length-1]
        console.log(oudeKop);
        //De beweging toepassen en nieuwe kop berekenen
        //Omhoog
        if(move == Move.UP){
            if(oudeKop.x == 0){
                if(this.checkGrens){
                    nieuweKop = oudeKop
                }
                else{
                    nieuweKop = new Coordinaat(this.pf.breedte-1,oudeKop.y);
                }         
            }
            else{
                console.log("nieuwKop maken UP")
                nieuweKop = new Coordinaat(oudeKop.x -1,oudeKop.y)
                console.log(`nieuwe op: ${nieuweKop.x } en ${nieuweKop.y}`)
            }            
        }

        //Omlaag
        if(move == Move.DOWN){
            if(oudeKop.x == this.pf.hoogte-1){
                if(this.checkGrens){
                    nieuweKop = oudeKop
                }
                else{
                    nieuweKop = new Coordinaat(0,oudeKop.y);
                }         
            }
            else{
                console.log("nieuwKop maken DOWN")
                nieuweKop = new Coordinaat(oudeKop.x +1,oudeKop.y)
                console.log(`nieuwe op: ${nieuweKop}`)
            }            
        }

        //Rechts
        if(move == Move.RIGHT){
            if(oudeKop.y == this.pf.breedte-1){
                if(this.checkGrens){
                    nieuweKop = oudeKop
                }
                else{
                    nieuweKop = new Coordinaat(oudeKop.x,0);
                }         
            }
            else{
                console.log("nieuwKop maken Right")
                nieuweKop = new Coordinaat(oudeKop.x,oudeKop.y+1)
                console.log(`nieuwe op: ${nieuweKop}`)
            }            
        }

        //Links
        if(move == Move.LEFT){
            if(oudeKop.y == 0){
                if(this.checkGrens){
                    nieuweKop = oudeKop
                }
                else{
                    nieuweKop = new Coordinaat(oudeKop.x,this.pf.breedte-1);
                }         
            }
            else{
                console.log("nieuwKop maken LEFT")
                nieuweKop = new Coordinaat(oudeKop.x,oudeKop.y-1)
                console.log(`nieuwe op: ${nieuweKop}`)
            }            
        }
        
        // Checken of de nieuwe kop voedsel is
        if(this.CheckVoedsel(nieuweKop)){
            this.voedsel = this.GetRandomVoedsel();
        }
        else{
            console.log("push nieuwekop")
            this.pixelLijst.push(nieuweKop)
        }
        //this.pixelLijst.push(nieuweKop)

        this.CheckMaxLengte();

        //if(this.groei == false){
            //De staart verwijderen
            //delete this.pixelLijst[0]
            //Of 
            console.log('pop staart')
            this.pixelLijst.pop();
        //}

        this.AddtoFrame(show);
               
    }

    CheckVoedsel(kop){
        if (this.voedsel == kop)
            return true;
    }

    GetRandomVoedsel(){
        return new Coordinaat(PixelFrame.getRandomInt(0,this.pf.breedte),PixelFrame.getRandomInt(this.pf.breedte));
    }

    CheckMaxLengte(){
        if(this.pixelLijst.length <= this.maxLengte)
            this.groei = true;
        else
            this.groei = false;
    }

    AddtoFrame(show ){
        //voeg de slang toe op het frame
        console.dir(this.pixelLijst)
        for(var i = 0;i < this.pixelLijst.length; i++){
            this.pf.kleurPixelColor(this.pixelLijst[i].x,this.pixelLijst[i].y,this.kleur)
        }
        //toen het voedsel
        this.pf.kleurPixelColor(this.voedsel.x,this.voedsel.y,this.voedselkleur);
        if(show){
            this.pf.show();
        }

    }

};