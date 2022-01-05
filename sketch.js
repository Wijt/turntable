
let resimler = [];
let value=0;
let index = 0; 
function preload() {
    for(var i=1;i<37;i++){
        resimler.push(loadImage('360/A_'+zfill(i,3)+'.png'));
    }
}

function zfill(n, kk){
    return ('0000000000000000000000000000'+n).slice(-kk);
}

function setup() {
    createCanvas(innerWidth, 400);
}
  
function draw() {
    rectMode(CORNER)
    background("#FFC0CB"); //Arkaplanı renklendirdik. 
    if (mouseIsPressed) {
        //index = map(value, 0, width, 0, 35*4, true); // mouseX'ini en baştan en sona olan koordinatı en baş 0 en son 36 olacak şekilde güncelle
    }
    index = int(value)%35; // float olamayacağı için int'e çevir

    console.log(movedX, value, index);

    image(resimler[index], width/2-400, 0-25); //resmi ekrana bas
}

function mouseDragged() {
    
    value = value + movedX/10;
}