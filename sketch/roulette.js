function Roulette()
{

    let drawingList = ["19415","19319","20312","34155","20014"];
    let t = 0;

    let particles = []; //おためし
    
    this.setup = function(){
        textAlign(CENTER);
        setRandomList();
    }

    this.draw = function()
    {
        clear();
        background(40);
        textSize(96);
        fill(230);
        text("抽選画面",400,100);
        drawRoulette();

        particles.push(createParticle(mouseX, mouseY));
        particles = particles.filter(particleIsAlive);
        for (let particle of particles) {
          updatePosition(particle);
          decreaseLife(particle);
          drawParticle(particle);
        }
        t++;
    }

    function drawRoulette(){
        selected = random(drawingList);
        let x = noise(0,0.5*t)*3;
        let y = noise(1,0.5*t)*3;
        text(selected,400+y,300+x);
    }

    function setRandomList(){
        for(let i=0;i<200;i++){
            drawingList.push(int(random(10000)+10000));
        }
    }


    function createParticle(x, y) {
        let direction = random(TWO_PI);
        let speed = 2;

        return {
          x,
          y,
          vx: speed * cos(direction),
          vy: speed * sin(direction),
          life: 1, // = 100%
        };
      }

      function particleIsAlive(particle) {
        return particle.life > 0;
      }

      function updatePosition(particle) {
        particle.x += particle.vx;
        particle.y += particle.vy;
      }

      function decreaseLife(particle) {
        particle.life -= 0.01;
      }

      function drawParticle(particle) {
        push();
        noStroke();
        fill(200,200,10, particle.life * 255);
        translate(particle.x, particle.y);
        rotate(frameCount / 10.0);
        square(0,0, particle.life * 10);
        pop();
      }

    this.keyPressed = function()
    {
        
    }
}

