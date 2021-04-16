class Form{
    constructor(){}

    display(){
        var title = createElement("h2");
        title.html("My Car Racing Game");
        title.position(500,100);


        var input = createInput("Name");
        var button = createButton("Play");

        input.position(500, 200);
        button.position(570,250);

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount+=1
            player.update(name);
            player.updateCount(playerCount);

            var greeting  = createElement("h3");
            greeting.html("Hello" +" "+ name);
            greeting.position(570,200);
        });
            
        
    }
}