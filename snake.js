var PixelFrame = require('./PixelFrame');
var Color =require('./color');
var Coordinaat = require('./coordinaat')

const Move = {
    UP: 1,
    DOWN: 2,
    RIGHT: 3,
    LEFT: 4
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
        nieuweKop = new Coordinaat(0,0);
        oudeKop = new Coordinaat(0,0);
        oudeKop = this.pixelLijst[this.pixelLijst.length]

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
                nieuweKop = new Coordinaat(oudeKop.x -1,oudeKop.y)
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
                nieuweKop = new Coordinaat(oudeKop.x +1,oudeKop.y)
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
                nieuweKop = new Coordinaat(oudeKop.x,oudeKop.y+1)
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
                nieuweKop = new Coordinaat(oudeKop.x,oudeKop.y-1)
            }            
        }
        
        // Checken of de nieuwe kop voedsel is
        if(this.CheckVoedsel(nieuweKop)){
            this.voedsel = this.GetRandomVoedsel();
        }
        else{
            this.pixelLijst.push(nieuweKop)
        }

        this.CheckMaxLengte();

        if(this.groei == false){
            //De staart verwijderen
            delete this.pixelLijst[0]
        }

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

    AddtoFrame(show = true){
        //voeg de slang toe op het frame
        for(var i = 0;i < this.pixelLijst; i++){
            this.pf.kleurPixelColor(pixelLijst[i].x,pixelLijst[i].y,this.kleur)
        }
        //toen het voedsel
        this.pf.kleurPixelColor(this.voedsel.x,this.voedsel.y,this.voedselkleur);
        if(this.show){
            this.pf.show();
        }

    }

};