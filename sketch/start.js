
var goldenTexture;

function preload()
{
    goldenTexture = loadImage("./img/gold.png");
}

function setup()
{
    createCanvas(displayWidth,displayHeight,P2D);

    var mgr = new SceneManager();
    mgr.goldenTexture = goldenTexture;
    mgr.wire();
    mgr.showScene( Select );
}
