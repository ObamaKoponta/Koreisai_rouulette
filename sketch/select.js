
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

function Select()
{


    this.setup = function()
    {
        button1 = new Button(width/4*1,100,250,100,"抽選");
        button2 = new Button(width/4*2,100,250,100,"履歴");
        button3 = new Button(width/4*3,100,250,100,"CSV");
    }

    this.draw = function()
    {
        resizeCanvas(windowWidth, windowHeight);
        console.log(particles.length);
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
    }
    this.keyPressed = function()
    {
    }
    this.mousePressed = function(){
        this.sceneManager.showScene( Roulette );
    }
}

