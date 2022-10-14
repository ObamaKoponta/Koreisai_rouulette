function Roulette()
{
    let titleY = 150;
    let luckyY = 450;
    let luckyTextSize = 256;
    let titleText = "工嶺祭抽選会";
    let selected = "";
    let stopped = false;
    let special = false;
    let zanzo = 0;

    let latestStopIndex = 0;
    let stopStep = [false,false,false,false,false];
    
    let drawingList = [];
    
    this.enter = function(){
        setDrawingList();
        selected="";
        special = false;
        stopStep = [false,false,false,false,false];
    }

    this.draw = function()
    {
        if(selected==""){
            setWinner();
        }

        clear();
        background(20);
        backgroundEffects();
        drawEffects();
        drawTitle();
        drawRoulette();
    }

    function drawTitle(){
        textSize(128);
        fill(255);
        push();
            if(special){
                fill(255);
                stroke(255,255,0);
                strokeWeight(1);
                drawingContext.shadowBlur = 10;
                drawingContext.shadowColor = color(255, 255, 0);
                drawingContext.shadowOffsetX = 5;
                drawingContext.shadowOffsetY = 5;
                let gradientStroke = drawingContext.createLinearGradient(
                    0,
                    height,
                    width,
                    0
                );
                
                for(let i=0;i<=0.9;i+=0.2){
                    gradientStroke.addColorStop(i+0.0, color(255, 0, 0));
                    gradientStroke.addColorStop(i+0.067, color(0, 255, 0));
                    gradientStroke.addColorStop(i+0.133, color(0, 0, 255));
                }
                
                drawingContext.strokeStyle = gradientStroke;
                drawingContext.fillStyle = gradientStroke;
            }
            textAlign(CENTER,CENTER);
            text(titleText,width/2,titleY);
        pop();
    }

    function drawRoulette(){
        push();
            if(special){
                fill(255);
                stroke(255,255,0);
                strokeWeight(3);
                drawingContext.shadowBlur = 30;
                drawingContext.shadowColor = color(255, 255, 0);
                drawingContext.shadowOffsetX = 10;
                drawingContext.shadowOffsetY = 10;
                let gradientStroke = drawingContext.createLinearGradient(
                    0,
                    height,
                    width,
                    0
                );
                
                let step = 13;
                for(let i=0;i<step;i+=2){
                    let d = 1.0/step;
                    gradientStroke.addColorStop(d*i, color(245, 245, 50));
                    gradientStroke.addColorStop(d*i+d, color(70));
                }
                drawingContext.strokeStyle = gradientStroke;
                drawingContext.fillStyle = gradientStroke;
            }else{
                noStroke();
                fill(230,230,10);
            }  
            textAlign(CENTER,CENTER);
            textSize(luckyTextSize);
            
            //stepstopに1つでもtrueが入っているか
            let step = 0;
            for(let i=0;i<stopStep.length;i++){
                if(stopStep[i]){
                    step += 1;
                }
            }
            if(step==5){
                rouletteStop();
            }
            if(step>0){
                for(let i=0;i<5;i++){
                    let x = width/2-luckyTextSize*0.5*2.5+luckyTextSize*0.63*i;
                    if(stopStep[i]){
                        if(zanzo>0&&latestStopIndex==i){
                            push();
                            zanzo -=0.3;
                            translate(x,luckyY);
                            scale(1.0+zanzo*0.05);
                            text(selected[i],0,0);
                            scale(1.7-zanzo*0.1);
                            stroke(255,255,10,zanzo*10);
                            fill(230,230,10,zanzo*20);
                            text(selected[i],0,0);
                            pop();
                        }else{
                            text(selected[i],x,luckyY);
                        }
                    }else{
                        let rand = Math.floor(Math.random()*10);
                        text(rand,x,luckyY);
                    }
                }
            }else{
                if(stopped){
                    if(zanzo>0){
                        zanzo -=0.3;
                        translate(width/2,luckyY);
                        scale(1.0+zanzo*0.05);
                        text(selected,0,0);
                        scale(1.7-zanzo*0.1);
                        stroke(255,255,10,zanzo*10);
                        fill(230,230,10,zanzo*20);
                        text(selected,0,0);
                    }else{
                        text(selected,width/2,luckyY);
                    }
                }else{
                    randomDraw = random(drawingList);
                    text(randomDraw,width/2,luckyY);
                }
            }
        pop();
    }

    function setDrawingList(){
        drawingList = [];
        students.forEach(function(e){
            //winnersにあるものは除外
            if(winners.indexOf(e)==-1){
                drawingList.push(e);
            }
        });
    }

    this.mousePressed = function()
    {
    }

    this.keyPressed = function(){
        if(keyCode == 13){//エンター
            rouletteStop();
        }
        if(keyCode == 82){ //rキー
            rouletteStart();
        }
        if(keyCode == 27){ //escキー
            this.sceneManager.showScene( Select );
        }
        if(keyCode == 83){ //sキー
            special = !special;
        }
        if(keyCode == 68){ //dキー
            downloadWinners();
        }
        for(let i=0;i<5;i++){
            if(keyCode == 49+i && !stopStep[i] && !stopped){ //1~5キー
                stopStep[i] = true;
                zanzo = 10;
                latestStopIndex = i;
            }
        }
    }

    function setWinner(){
        selected = random(drawingList);
        drawingList.splice(drawingList.indexOf(selected),1);
        stopped = false;
    }

    function rouletteStop(){
        stopStep = [false,false,false,false,false];
        if(!stopped){
            zanzo = 10;
            winners.push(selected);
            stopped = true;
        }
    }

    function rouletteStart(){
        if(stopped){
            selected = "";
            stopStep = [false,false,false,false,false];
        }
    }

    function downloadWinners(){//当選者一覧をダウンロードする
        let text = "";
        winners.forEach(function(e){
            text += e + "\n";
        });
        const blob = new Blob([text],{type:"text/plain"});
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'winners.csv';
        link.click();
    }
}
