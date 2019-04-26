var PixelFrame = require('./PixelFrame');
var Snake = require('./snake')
var Color = require('./color');

const Move = {
    UP: 0,
    DOWN: 1,
    RIGHT: 4,
    LEFT: 5
}

var pf = new PixelFrame(16,16);
var snakes = [];

enkeleSlangTest();



async function enkeleSlangTest(){
    while(1){
        var snake = new Snake(pf,4,0,new Color(0,255,0,1));
        snake.move(Move.DOWN,false,true);
        pf.show();   
        await sleep(500); 
    }
}

//GenerreerRandomMoves();

async function GenerreerRandomMoves() {
    for (var i = 0; i < 3; i++) {
        snakes.push(new Snake(pf,5,i,new Color(255,0,0,1)));
    }

    while(1){
        pf.blackout();
        for (var i = 0; i < snakes.length; i++) {
            move = PixelFrame.getRandomInt(0,4);
            snakes[i].move(move,true);        
        }
        pf.show();
        await sleep(500);
    }
}

function sleep(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
};

