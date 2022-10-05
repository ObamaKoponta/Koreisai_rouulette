
function Select()
{

    this.setup = function()
    {
        
    }

    this.draw = function()
    {
        textSize(64);
        textAlign(CENTER);
        fill("black");
        text("選択画面",200,100);
    }
    this.keyPressed = function()
    {
        this.sceneManager.showScene( Roulette );
    }
}

