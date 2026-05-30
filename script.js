const canvas =
document.getElementById("embers");

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

const particles=[];

for(let i=0;i<40;i++){

    particles.push({

        x:Math.random()*canvas.width,

        y:
        canvas.height-
        Math.random()*250,

        size:
        Math.random()*3+1,

        speedX:
        (Math.random()-.5)*0.25,

        speedY:
        Math.random()*0.4+0.2,

        alpha:
        Math.random()
    });
}

function drawEmbers(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    particles.forEach(p=>{

        ctx.fillStyle=
        `rgba(255,140,40,${p.alpha})`;

        ctx.beginPath();

        ctx.arc(
            p.x,
            p.y,
            p.size,
            0,
            Math.PI*2
        );

        ctx.fill();

        p.y-=p.speedY;
        p.x+=p.speedX;

        if(p.y<0){

            p.y=
            canvas.height;

            p.x=
            Math.random()*canvas.width;
        }
    });

    requestAnimationFrame(
        drawEmbers
    );
}

drawEmbers();

const center =
document.getElementById(
"centerEnergy"
);

function clash(){

    center.animate([
        {
            opacity:0
        },
        {
            opacity:1
        },
        {
            opacity:0
        }
    ],{
        duration:800,
        easing:"ease-out"
    });
}

setInterval(
    clash,
    8000 + Math.random()*4000
);
