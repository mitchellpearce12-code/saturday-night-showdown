const canvas = document.getElementById("effects");
const ctx = canvas.getContext("2d");

function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();

window.addEventListener("resize", resize);

let embers = [];

for(let i=0;i<100;i++){
    embers.push({
        x:Math.random()*window.innerWidth,
        y:Math.random()*window.innerHeight,
        size:Math.random()*3+1,
        speed:Math.random()*0.7+0.2
    });
}

let blueFlash = 0;
let redFlash = 0;

setInterval(()=>{
    blueFlash = 1;
},2000);

setInterval(()=>{
    redFlash = 1;
},2500);

function drawLightning(x,color,intensity){

    if(intensity <= 0.05) return;

    ctx.strokeStyle=color;
    ctx.lineWidth=3;
    ctx.shadowBlur=20;
    ctx.shadowColor=color;

    ctx.beginPath();

    let y=0;
    ctx.moveTo(x,y);

    while(y<canvas.height){

        x+=(Math.random()-0.5)*50;
        y+=40;

        ctx.lineTo(x,y);
    }

    ctx.stroke();
}

function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    blueFlash*=0.90;
    redFlash*=0.90;

    drawLightning(
        canvas.width*0.25,
        "#00aaff",
        blueFlash
    );

    drawLightning(
        canvas.width*0.75,
        "#ff3333",
        redFlash
    );

    embers.forEach(e=>{

        ctx.fillStyle="rgba(255,150,50,.7)";

        ctx.beginPath();
        ctx.arc(
            e.x,
            e.y,
            e.size,
            0,
            Math.PI*2
        );
        ctx.fill();

        e.y-=e.speed;

        if(e.y<0){
            e.y=canvas.height;
            e.x=Math.random()*canvas.width;
        }
    });

    requestAnimationFrame(animate);
}

animate();