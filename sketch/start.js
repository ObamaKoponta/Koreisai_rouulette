
let students = []; // 学籍番号入れるよう
let winners = [];// 当選者一覧
var goldenTexture;
let reg = false;

function preload()
{
    goldenTexture = loadImage("./img/gold.png");
}

function setup()
{
    frameRate(60);
    let canvas = createCanvas(1920,1080,P2D);//キャンパスのサイズ
    canvas.parent('canvas');
    var mgr = new SceneManager();
    mgr.goldenTexture = goldenTexture;
    mgr.wire();
    mgr.showScene( Select );
}
