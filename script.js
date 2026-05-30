const canvas =
document.getElementById("effects");

const ctx =
canvas.getContext("2d");

function resize(){

    canvas.width =
    window.innerWidth;

    canvas.height =
    window.innerHeight;
}

resize();

window.addEventListener(
"resize",
resize
);

const embers=[];

for(let i=0;i<250;i++){

    embers.push({

        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,

        size:Math.random()*3+1,

        speedX:
        Math.random()*0.4+0.1,

        speedY:
        Math.random()*0.7+0.2
    });
}

const blueBolts=
document.querySelectorAll(".blue");

const redBolts=
document.querySelectorAll(".red");

const centerFlash=
document.querySelector(".centerFlash");

function randomFlash(){

    blueBolts.forEach(b=>{

        b.style.opacity=
        Math.random()>.5
        ? ".9"
        : "0";
    });

    setTimeout(()=>{

        blueBolts.forEach(
        b=>b.style.opacity="0"
        );

    },120);

    redBolts.forEach(r=>{

        r.style.opacity=
        Math.random()>.5
        ? ".9"
        : "0";
    });

    setTimeout(()=>{

        redBolts.forEach(
        r=>r.style.opacity="0"
        );

    },120);

    if(Math.random()>.6){

        centerFlash.style.opacity=".8";

        setTimeout(()=>{

            centerFlash.style.opacity="0";

        },100);
    }
}

setInterval(
randomFlash,
2000 + Math.random()*3000
);

function animate(){

    ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
    );

    embers.forEach(e=>{

        ctx.fillStyle=
        "rgba(255,140,40,.7)";

        ctx.beginPath();

        ctx.arc(
        e.x,
        e.y,
        e.size,
        0,
        Math.PI*2
        );

        ctx.fill();

        e.x+=e.speedX;
        e.y-=e.speedY;

        if(
            e.y<0 ||
            e.x>canvas.width
        ){

            e.y=
            canvas.height;

            e.x=
            Math.random()*canvas.width;
        }
    });

    requestAnimationFrame(
    animate
    );
}

animate();