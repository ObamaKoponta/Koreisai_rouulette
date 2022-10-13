

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
            loadLotData();
        }else if(button2.mouseOver){
            loadWinnersData();
        }else if(button1.mouseOver){
            if(reg && students.length>0){
                this.sceneManager.showScene( Roulette );
            }else{
                alert("データを登録してください");
            }
        }
    }
}

async function loadLotData(){
    const file = await showOpenFileDialog();
    console.log(file);
    const content = await readAsText(file);
    students = [];
    convertCSVtoArray(content,students);
    reg = true;
};

async function loadWinnersData(){
    const file = await showOpenFileDialog();
    console.log(file);
    const content = await readAsText(file);
    winners = []
    convertCSVtoArray(content,winners);
}

