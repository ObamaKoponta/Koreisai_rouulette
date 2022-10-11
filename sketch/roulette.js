function Roulette()
{
    let titleY = 150;
    let stopButtonY = 800;
    let luckyY = 450;
    let luckyTextSize = 256;
    let titleText = "工嶺祭抽選会";
    
    let drawingList = ["19415","19319","20312","34155","20014"];
    
    this.setup = function(){
        textAlign(CENTER,CENTER);
        setRandomList();
        button1 = new Button(width/2,stopButtonY,600,100,"ストップ！");
    }

    this.draw = function()
    {
        resizeCanvas(windowWidth-10, windowHeight-10);
        clear();
        background(10);
        drawTitle();
        drawRoulette();
        cursorEffects();
        drawEffects();
        button1.x = width/2;
        button1.draw();
        button1.update();
    }

    function drawTitle(){
        textSize(96);
        fill(255);
        let gradientStroke = drawingContext.createLinearGradient(
            width*0.4,
            0,
            width*0.6,
            200
        );

        gradientStroke.addColorStop(0, color(255, 0, 255));
        gradientStroke.addColorStop(0.25, color(0, 255, 0));
        gradientStroke.addColorStop(0.5, color(255, 255, 0));
        gradientStroke.addColorStop(0.75, color(255, 255, 255));
        gradientStroke.addColorStop(0.825, color(255, 0, 255));
        gradientStroke.addColorStop(1, color(0, 255, 255));
        drawingContext.strokeStyle = gradientStroke;
        drawingContext.fillStyle = gradientStroke;
        textAlign(CENTER,CENTER);
        text(titleText,width/2,titleY);
    }

    function drawRoulette(){
        selected = random(drawingList);
        textAlign(CENTER,CENTER);
        textSize(luckyTextSize);
        //texture(this.sceneManager.goldenTexture);
        //textureMode(NORMAL);
        fill(220,220,10);
        push();
            drawingContext.shadowBlur = 20;
            drawingContext.shadowColor = color(255, 255, 0);
            drawingContext.shadowOffsetX = 5;
            drawingContext.shadowOffsetY = 5;
            let gradientStroke = drawingContext.createLinearGradient(
                0,
                height,
                width,
                0
            );
            
            let step = 13;
            for(let i=0;i<step;i+=2){
                let d = 1.0/step;
                gradientStroke.addColorStop(d*i, color(255, 255, 50));
                gradientStroke.addColorStop(d*i+d, color(70));
            }
            drawingContext.strokeStyle = gradientStroke;
            drawingContext.fillStyle = gradientStroke;
            text(selected,width/2,luckyY);
        pop();
    }

    function setRandomList(){
        for(let i=0;i<200;i++){
            drawingList.push(int(random(500)+18000));
        }
    }

    this.keyPressed = function()
    {
        
    }
}