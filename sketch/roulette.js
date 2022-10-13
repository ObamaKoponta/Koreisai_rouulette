function Roulette()
{
    let titleY = 150;
    let stopButtonY = 800;
    let luckyY = 450;
    let luckyTextSize = 256;
    let titleText = "工嶺祭抽選会";
    let selected = "";
    let stopped = false;
    let button1;
    
    let drawingList = [];
    
    this.enter = function(){
        setDrawingList();
        selected="";
    }

    this.draw = function()
    {
        if(selected==""){
            setWinner();
        }

        resizeCanvas(windowWidth-10, windowHeight-10);
        clear();
        background(10);
        drawTitle();
        drawRoulette();
        cursorEffects();
        drawEffects();
    }

    function drawTitle(){
        textSize(128);
        fill(255);
        push();
            textAlign(CENTER,CENTER);
            text(titleText,width/2,titleY);
        pop();
    }

    function drawRoulette(){
        push();
            /*
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
                gradientStroke.addColorStop(d*i, color(245, 245, 50));
                gradientStroke.addColorStop(d*i+d, color(70));
            }
            drawingContext.strokeStyle = gradientStroke;
            drawingContext.fillStyle = gradientStroke;
            */
            textAlign(CENTER,CENTER);
            textSize(luckyTextSize);
            fill(220,220,10);
            if(stopped){
                text(selected,width/2,luckyY);
            }else{
                randomDraw = random(drawingList);
                text(randomDraw,width/2,luckyY);
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
        if(keyCode == 83){ //sキー
            this.sceneManager.showScene( Select );
        }
    }

    function setWinner(){
        selected = random(drawingList);
        drawingList.splice(drawingList.indexOf(selected),1);
        stopped = false;
        console.log(drawingList);
    }

    function rouletteStop(){
        if(!stopped){
            winners.push(selected);
            stopped = true;
            downloadWinners();
        }
    }

    function rouletteStart(){
        selected = "";
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
