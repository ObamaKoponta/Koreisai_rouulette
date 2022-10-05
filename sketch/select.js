
function Select()
{

    this.setup = function()
    {
        
    }

    this.draw = function()
    {
        background(40);
        fill(230);
        textSize(20);
        textAlign(CENTER);
        text("選択画面(クリックすると画面が変わる)",200,100);
    }
    this.keyPressed = function()
    {
    }
    this.mousePressed = function(){
        this.sceneManager.showScene( Roulette );
    }
}

