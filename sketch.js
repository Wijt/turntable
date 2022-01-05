
let resimler = [];
let value=10000000;
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

    index = int(value)%35; // float olamayacağı için int'e çevir

    if(resimler[index]!=null)
        image(resimler[index], width/2-400, 0-25); //resmi ekrana bas
}

function mouseDragged() {
    if(value<=1) value=10000000;
    value = value + int(movedX/10);   
}