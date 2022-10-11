

let t = 0;
let particles = []; //おためし

function cursorEffects(){
    particles.push(createParticle(mouseX, mouseY));
}

function buttonEffects(x,y){
    particles.push(createParticleFall(x,y));
}

function createParticleFall(x, y) {
    let direction = random(PI)+PI;
    let speed = 10;
    return {
        type: 0,
        x,
        y,
        vx: 4*cos(direction),
        vy: speed * sin(direction),
        ax: 0,
        ay: 2,
        life: 1, // = 100%
        r: random(220,255),
        g: random(220,255),
        b: random(10,10)
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
    let speed = 3;
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
    particle.life -= 0.01;
}

function drawParticle(particle) {
    push();
    noStroke();
    fill(particle.r,particle.g,particle.b, particle.life * 255);
    translate(particle.x, particle.y);
    rotate(frameCount / 10.0);
    square(0,0, particle.life * 10);
    pop();
}
