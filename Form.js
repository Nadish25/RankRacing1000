class Form {

  constructor() {
    this.input = createInput("Name");
    this.input.class('customInput')
    this.button = createButton('Play');
    this.button.style('customButton')
    this.button.style('background','green')
    this.greeting = createElement('h1');
    this.greeting.style('color','blue')
    this.wait = createElement('h1') 
    this.wait.style('color','brown')
    this.title = createElement('h1');
    this.reset = createButton('Reset');
    this.reset.style('background', 'red');  
    this.create = createButton('Create New Game');
    this.create.style('background', 'yellow'); 
    this.create.style('width' , '200')
    this.create.style('height', '50') 
  }
  hide(){
    this.wait.hide();
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    
  }

  display(){
    this.title.html("Rank Racing");
    this.title.position(displayWidth/2 - 40, 0);

    this.input.position(displayWidth/2 + 290 , displayHeight/2 -100);
    this.button.position(displayWidth/2 + 290, displayHeight/2 -50);
    this.button.style('border-radius', '8px',);
    this.reset.position(displayWidth-100,20);
    this.reset.style('border-radius', '6px');
    this.create.position(displayWidth-180,40);
    this.create.style('border-radius', '6px');
    
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Welcome " + player.name)
      this.greeting.position(displayWidth/2, displayHeight/6);
      this.wait.html("Waiting for players to join...")
      this.wait.position(displayWidth/2 +70, displayHeight/4)

      
      
    });

    



    this.reset.mousePressed(()=>{
      location.reload();
      player.updateCount(0);
      game.update(0);
      Player.updateCarsAtEnd(0);
      var playerInfoRef = database.ref('players');
      playerInfoRef.remove();
      player.imageUpdateCount(0);
      
      
    });

    this.create.mousePressed(()=>{
      
      textSize(30)
      fill("black")
      text("Now, reload this page and ask other players to reload their pages",displayWidth/2 -300,120 )
      player.updateCount(0);
      game.update(0);
      Player.updateCarsAtEnd(0);
      var playerInfoRef = database.ref('players');
      playerInfoRef.remove();
      player.imageUpdateCount(0);
      
      
    });

  }
}
