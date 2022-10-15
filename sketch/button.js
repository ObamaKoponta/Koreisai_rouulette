
class Button{
    constructor(x,y,w,h,text,e){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.mouseOver = false;
        this.text = text;
        this.enabled = e;
    }
    
    draw(){
        //translate(-width/2,-height/2);
        stroke(0);
        textAlign(CENTER,CENTER);
        push();
        if(!this.enabled){
            fill(100);
            strokeWeight(3);
            rect(this.x-this.w/2,this.y-this.h/2,this.w,this.h,10);
            fill(10);
            textSize(86);//ボタン内テキストのサイズ
            noStroke();
            text(this.text,this.x,this.y);
        }else if(this.mouseOver){
            fill(220,220,220);
            let streach = 0;//ホバーするとデカくなるやつ
            strokeWeight(3);
            rect(this.x-this.w/2-streach/2,this.y-this.h/2-streach/2,this.w+streach,this.h+streach,10);
            noStroke();//テキストの枠線無し
            textSize(86);//ボタン内テキストのサイズ
            fill(10);
            text(this.text,this.x,this.y);
        }else{
            fill(255);
            strokeWeight(3);
            push();
            drawingContext.shadowBlur = 20;//ぼかし具合
            drawingContext.shadowColor = color(150, 150, 150);
            rect(this.x-this.w/2,this.y-this.h/2,this.w,this.h,10);
            pop();
            fill(10);
            textSize(86);//ボタン内テキストのサイズ
            noStroke();
            text(this.text,this.x,this.y);
        }
        pop();
    }
    update(){
        if(!this.enabled)return;
        if(mouseX>this.x-this.w/2 && mouseX<this.x+this.w/2 && mouseY>this.y-this.h/2 && mouseY<this.y+this.h/2){
            cursor(HAND);
            this.mouseOver = true;
        }else{
            this.mouseOver = false;
        }
    }
}