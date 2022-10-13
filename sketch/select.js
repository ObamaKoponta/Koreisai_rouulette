
class Button{
    constructor(x,y,w,h,text){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.mouseOver = false;
        this.text = text;
    }
    
    draw(){
        //translate(-width/2,-height/2);
        stroke(0);
        textAlign(CENTER,CENTER);
        push();
        /*
            drawingContext.shadowBlur = 20;
            drawingContext.shadowColor = color(230,0,255);
            drawingContext.shadowOffsetX = 5;
            drawingContext.shadowOffsetY = 5;
            let gradientStroke = drawingContext.createLinearGradient(
                width*0.2,
                0,
                width*0.8,
                200
            );

            gradientStroke.addColorStop(0, color(255, 100, 100));
            //gradientStroke.addColorStop(0.25, color(0, 255, 0));
            gradientStroke.addColorStop(0.5, color(100, 255, 100));
            //gradientStroke.addColorStop(0.75, color(255, 0, 0));
            gradientStroke.addColorStop(1, color(100, 100, 255));
            drawingContext.strokeStyle = gradientStroke;
            let gradientFill = drawingContext.createLinearGradient(
                width*0.2,
                0,
                width*0.8,
                200
            );
            strokeWeight(10);
            colorMode(HSB);
            gradientFill.addColorStop(1.0, color(255, 100, 100,1));
            //gradientStroke.addColorStop(0.25, color(0, 255, 0));
            gradientFill.addColorStop(0.5, color(100, 255, 100,1));
            //gradientStroke.addColorStop(0.75, color(255, 0, 0));
            gradientFill.addColorStop(0.0, color(100, 100, 255,1));
            drawingContext.strokeStyle = gradientStroke;
            drawingContext.fillStyle = gradientFill;
        */
        if(this.mouseOver){
            fill(230,230,10);
            let streach = 10;
            rect(this.x-this.w/2-streach/2,this.y-this.h/2-streach/2,this.w+streach,this.h+streach);
            textSize(this.h+streach);
            fill(10);
            text(this.text,this.x,this.y);
        }else{
            fill(255);
            rect(this.x-this.w/2,this.y-this.h/2,this.w,this.h);
            fill(10);
            textSize(this.h);
            text(this.text,this.x,this.y);
        }
        pop();
    }
    update(){
        if(mouseX>this.x-this.w/2 && mouseX<this.x+this.w/2 && mouseY>this.y-this.h/2 && mouseY<this.y+this.h/2){
            cursor(HAND);
            this.mouseOver = true;
            for(let x=this.x-this.w/2;x<this.x+this.w/2;x+=30){
                for(let y=this.y-this.h/2;y<this.y+this.h/2;y+=30){
                    buttonEffects(x,y);
                }
            }
        }else{
            this.mouseOver = false;
        }
    }
}

function Select(){
    let button1,button2,button3;
    this.enter = function()
    {
        button1 = new Button(width/4,100,250,100,"抽選");
        button2 = new Button(width/4,300,250,100,"除外");
        button3 = new Button(width/4,500,250,100,"登録");
    }

    this.draw = function(){
        clear();
        cursor(ARROW);
        background(40);
        fill(230);
        textSize(20);
        textAlign(CENTER);
        text("選択画面(クリックすると画面が変わる)",200,100);
        cursorEffects();
        buttonEffects();
        drawEffects();
        button1.draw();
        button1.update();
        button2.draw();
        button2.update();
        button3.draw();
        button3.update();
        if(reg){
            text("データ登録済み",width/4,600);
        }
    }
    this.keyPressed = function(){
    }
    this.mousePressed = function(){
        if(button3.mouseOver){
            loadCsvData();
        }else if(button1.mouseOver){
            if(reg && students.length>0){
                this.sceneManager.showScene( Roulette );
            }else{
                alert("データを登録してください");
            }
        }
    }
}

async function loadCsvData(){
    const file = await showOpenFileDialog();
    console.log(file);
    const content = await readAsText(file);
    students = [];
    convertCSVtoArray(content,students);
    reg = true;
};

