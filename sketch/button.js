
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