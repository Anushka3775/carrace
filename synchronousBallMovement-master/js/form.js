class Form{
    constructor(){

    }
    display(){
        var title=createElement('h2');
        title.html("Car Racing Game");
        title.position(130,0);
        
        var input=createInput("name");
        var button=createButton("play");
        var greeting=createElement('h3');
        input.position(130,150);
        button.position(250,250);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value();
            playerCount+=1;
            player.updateName(name);
            player.updateCount(playerCount);
            greeting.html("Hello! "+ name)
            greeting.position(130,150);
        })
        
    }
}