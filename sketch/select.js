

function Select(){
    let button1,button2,button3;
    let discription = 
        "　事前設定\n"+
        "・ 「登録」ボタンでCSVファイルを登録\n"+
        "・ 抽選除外者がいる場合，「除外」ボタンでCSVファイルを登録\n"+
        "\n"+
        "　抽選画面\n"+
        "・ Enterキーでルーレットストップ\n"+
        "   ・ 5桁を1桁ずつストップするには数字キー「1,2,3,4,5」\n"+
        "・ Rキーでルーレットスタート(Restart)\n"+
        "・ Sキーで豪華抽選モードの切り替え(Special)\n"+
        "・ Dキーで抽選結果をCSV形式でダウンロード(Download)\n"+
        "・ Escapeキーでこの画面に戻る\n"+
        "\n"+
        "　注意など\n"+
        "・ 画面の大きさはブラウザの拡大機能で調整してください\n"+
        "・ GoogleChromeでの動作を想定しています\n"+
        "・ リロードやページを離れると抽選データが消えます\n"+
        "   ・ 当選者リストのダウンロードを活用してください\n"+
        "\n"+
        "その他詳しい仕様などはGitHubのリポジトリをご覧ください\n"+
        "";

    this.enter = function()
    {
        backgroundEffectsFirst();
        button1 = new Button(width/5*4,100,250,100,"開始",false);
        button2 = new Button(width/5*4,300,250,100,"除外",true);
        button3 = new Button(width/5*4,500,250,100,"登録",true);
    }

    this.draw = function(){
        button1.enabled = reg;
        clear();
        cursor(ARROW);
        background(20);
        backgroundEffects();
        drawEffects();
        textAlign(LEFT,TOP);
        fill(230);
        textSize(64);
        text("わくわく抽選機",50,50);
        textSize(30);
        text("使い方",50,150);
        textSize(16);
        text(discription,70,200);
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

