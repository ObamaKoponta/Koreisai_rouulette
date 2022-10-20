

function Select(){
    let button1,button2,button3;

    this.enter = function()
    {
        button1 = new Button(width/4*1,height/2,width/6,height/8,"開始",false);//x, y, w, h, text, e
        button2 = new Button(width/4*2,height/2,width/6,height/8,"除外",true);
        button3 = new Button(width/4*3,height/2,width/6,height/8,"登録",true);
    }

    this.draw = function(){
        button1.enabled = reg;
        clear();
        cursor(ARROW);
        background(255, 255, 255);//背景色(""で囲うと16進数で書ける)
        textAlign(CENTER,CENTER);//基準点の設定
        fill(3,3,3);//文字の塗りつぶす色(strokeで枠線)
        textSize(92);
        textFont("Noto Sans JP");//フォントの呼び出し.あまり上位に書くとバグる(ライブラリ独自のもの)
        text("工嶺祭抽選システム",width/2,height/7);//数字は位置(x,y)
        button1.draw();
        button1.update();
        button2.draw();
        button2.update();
        button3.draw();
        button3.update();
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
    const content = await readAsText(file);
    students = [];
    convertCSVtoArray(content,students);
    alert(students.length+"個のデータを登録しました");
    reg = true;
};

async function loadWinnersData(){
    const file = await showOpenFileDialog();
    const content = await readAsText(file);
    winners = []
    convertCSVtoArray(content,winners);
}

