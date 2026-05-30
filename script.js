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

/* Premium ember system */

const particles=[];

for(let i=0;i<35;i++){

    particles.push({

        x:Math.random()*canvas.width,

        y:
        canvas.height -
        Math.random()*250,

        size:
        Math.random()*2.5 + 1,

        speedX:
        (Math.random()-0.5)*0.15,

        speedY:
        Math.random()*0.35 + 0.15,

        alpha:
        Math.random()*0.6 + 0.2
    });
}

function render(){

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

        p.y -= p.speedY;
        p.x += p.speedX;

        if(p.y < -10){

            p.y =
            canvas.height + 10;

            p.x =
            Math.random()*canvas.width;
        }
    });

    requestAnimationFrame(render);
}

render();
