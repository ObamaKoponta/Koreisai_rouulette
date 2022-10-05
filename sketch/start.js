
//var bkImage;

function preload()
{
    //bkImage = loadImage("img/bk.jpg");    
}

function setup()
{
    createCanvas(800,1200);

    var mgr = new SceneManager();
    //mgr.bkImage = bkImage; // inject bkImage property
    //mgr.bkImage2 = bkImage; // inject bkImage property
    mgr.wire();
    mgr.showScene( Select );
}
