

let t = 0;
let particles = []; //おためし

function backgroundEffects(){
    if(t%10==0){
        particles.push(createParticleRise(random(width), height+100));
    }
}

function backgroundEffectsFirst(){
    for(let i=0; i<50; i++){
        particles.push(createParticleRise(random(width), random(height)));
    }
}


function createParticleRise(x, y) {
    let direction = -(random(PI)+PI);
    let speed = 0.1+random(1);
    return {
        type: 1,
        x,
        y,
        vx: speed * cos(direction),
        vy: -0.2-random(1),
        ax: 0,
        ay: 0,
        life: 1, // = 100%
        size: 20+random(30),
        r: random(255),
        g: random(255),
        b: random(255)
    };
}

function drawEffects(){
    particles = particles.filter(particleIsAlive);
    for (let particle of particles) {
      updatePosition(particle);
      decreaseLife(particle);
      drawParticle(particle);
    }
    t++;
};

function createParticle(x, y) {
    let direction = random(TWO_PI);
    let speed = 4;
    return {
        type: 0,
        x,
        y,
        vx: speed * cos(direction),
        vy: speed * sin(direction),
        ax: 0,
        ay: 0,
        life: 1, // = 100%
        r: random(10,255),
        g: random(10,255),
        b: random(10,255)
    };
}

function particleIsAlive(particle) {
    return particle.life > 0;
}

function updatePosition(particle) {
    particle.vx += particle.ax;
    particle.vy += particle.ay;
    particle.x += particle.vx;
    particle.y += particle.vy;
}

function decreaseLife(particle) {
    if(particle.type == 0){
        particle.life -= 0.01;
    }
    if(particle.type == 1){
        if(particle.y < -particle.size){
            particle.life = 0;
        }
    }
}

function drawParticle(particle) {
    if(particle.type == 0){
        push();
        translate(particle.x, particle.y);
        rotate(frameCount / 10.0);
        strokeWeight(1);
        fill(255);
        noStroke();
        drawingContext.shadowBlur = 20;
        drawingContext.fillStyle = color(particle.r,particle.g,particle.b, particle.life * 255);
        drawingContext.shadowColor = color(255,255,100);
        drawingContext.shadowOffsetX = 5;
        drawingContext.shadowOffsetY = 5;
        circle(0,0, particle.life * 20);
        pop();
    }else{
        push();
        translate(particle.x, particle.y);
        strokeWeight(1);
        fill(255);
        noStroke();
        drawingContext.shadowBlur = 20;
        drawingContext.fillStyle = color(particle.r,particle.g,particle.b,150);
        drawingContext.shadowColor = color(particle.r,particle.g,particle.b);
        //drawingContext.shadowOffsetX = 4;
        //drawingContext.shadowOffsetY = 4;
        circle(0,0, particle.size);
        pop();
    }
}
