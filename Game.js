class Game {
  constructor(){

    this.button1=createImg("car.png")
    this.button1.style('width','240px')
    this.button1.style('height','100px')
      
  
    this.button2=createImg("bike.png")
    this.button2.style('width','130px')
    this.button2.style('height','80px')
   
  
    this.button3=createImg("rcar.png")
    this.button3.style('width','170px')
    this.button3.style('height','100px')
  
  
    this.button1.position(displayWidth/5,displayHeight/2 + 70);
    this.button2.position(displayWidth/3 +59,displayHeight/2 + 70)
    this.button3.position(displayWidth/2,displayHeight/2 + 70)

    this.button4=createImg("ferarri.png")
    this.button4.style('width','200px')
    this.button4.style('height','60px')
  
  
    this.button4.position(displayWidth/2+200,displayHeight/2 +87);
    
    this.button5=createImg("bugatti.png")
    this.button5.style('width','190px')
    this.button5.style('height','75px')
    this.button5.position(displayWidth/15,displayHeight/2 +87);


  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      var imageCountRef = await database.ref('imageCount').once("value");
      if(imageCountRef.exists()){
        imageCount = imageCountRef.val();
        player.imageGetCount();
      }
      form = new Form()
      form.display();

      
       
    }

    car1 = createSprite(100,displayHeight-2000,20,20);
    car1.addImage(carTop)
    car2 = createSprite(300,displayHeight-2000,20,20);
    car2.addImage(bikeTop)
    car3 = createSprite(500,displayHeight-2000,20,20);
    car3.addImage(rcarTop)
    car3.scale=1.3;
    cars = [car1, car2, car3];
    
    background(bg)
}

  

 chooseChar(){

  
  
  
   
    var index=0;
 
    this.button1.mousePressed(()=>{
      imageCount+=1;
      player.imageUpdateCount(imageCount)
      this.button3.hide();
      this.button1.hide();
      this.button2.hide(); 
      this.button4.hide();
      this.button5.hide();
      for(var plr in allPlayers){
       
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
       // x = x + 200;
        //use data form the database to display the cars in y direction
        //y = displayHeight - allPlayers[plr].distance;
        //cars[index-1].x = x;
        //cars[index-1].y = y;

        if (index === player.index){
          cars[index - 1].addImage(carTop); 
        }
      }
    });
    this.button2.mousePressed(()=>{
      imageCount+=1;
      player.imageUpdateCount(imageCount)
      this.button3.hide();
      this.button2.hide();
      this.button1.hide();
      this.button4.hide();
      this.button5.hide();
      for(var plr in allPlayers){
       
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
       // x = x + 200;
        //use data form the database to display the cars in y direction
        //y = displayHeight - allPlayers[plr].distance;
        //cars[index-1].x = x;
        //cars[index-1].y = y;

        if (index === player.index){
          cars[index - 1].addImage(bikeTop);
          

        }
      }
    });

    this.button3.mousePressed(()=>{
      imageCount+=1;
      player.imageUpdateCount(imageCount)
      this.button3.hide();
      this.button2.hide();
      this.button1.hide();
      this.button4.hide();
      this.button5.hide();
      for(var plr in allPlayers){
       
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
       // x = x + 200;
        //use data form the database to display the cars in y direction
        //y = displayHeight - allPlayers[plr].distance;
        //cars[index-1].x = x;
        //cars[index-1].y = y;

        if (index === player.index){
          cars[index - 1].addImage(rcarTop);
          cars[index - 1].scale=1.3;

        }
      }
    });

    this.button4.mousePressed(()=>{
      imageCount+=1;
      player.imageUpdateCount(imageCount)
      this.button3.hide();
      this.button2.hide();
      this.button1.hide();
      this.button4.hide();
      this.button5.hide();
      for(var plr in allPlayers){
       
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
       // x = x + 200;
        //use data form the database to display the cars in y direction
        //y = displayHeight - allPlayers[plr].distance;
        //cars[index-1].x = x;
        //cars[index-1].y = y;

        if (index === player.index){
          cars[index - 1].addImage(ferarriTop);
          cars[index - 1].scale=0.6;

        }
      }
    });

    this.button5.mousePressed(()=>{
      imageCount+=1;
      player.imageUpdateCount(imageCount)
      this.button3.hide();
      this.button2.hide();
      this.button1.hide();
      this.button4.hide();
      this.button5.hide();
      for(var plr in allPlayers){
       
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
       // x = x + 200;
        //use data form the database to display the cars in y direction
        //y = displayHeight - allPlayers[plr].distance;
        //cars[index-1].x = x;
        //cars[index-1].y = y;

        if (index === player.index){
          cars[index - 1].addImage(bugattiTop);
          cars[index - 1].scale=0.3;

        }
      }
    });


  }



  play(){

    background(track)

    player.imageGetCount();
    

    form.hide();

   
    

    player.getCarsAtEnd();


    

    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      
      image(track,0,-displayHeight*4 +200,displayWidth,displayHeight*5)
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 170;
      var y;

      for(var plr in allPlayers){
       
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;

        if (index === player.index){
          
        //  stroke(10)
          //fill("blue")
          //ellipse(x,y,100,100)

         // cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y
           
         

        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(imageCount === 1){
      textSize(100)
      fill("red")
      text("Ready?",camera.x + 100, camera.y - 200)
      carStarting.play();
      console.log("carStarting")
    }

    if(imageCount===2){
      carStarting.stop();
      console.log("revving")
      revvingSound.play();
      textSize(100)
      fill("yellow")
      text("Steady?",camera.x + 100, camera.y - 150)
      
    }

    if(playerCount > 4){
      textSize(20)
      fill("red")
      text("Click reset and then reload your page", displayWidth/2,displayHeight/2)
    }
    

    if(imageCount===3){
      revvingSound.stop();
      console.log("stop")
      textSize(30)
      fill("0")
      text("Distance Covered : " + player.distance + "/3211",camera.x - 200, camera.y -200)
      console.log(player.distance)
      
      textSize(100)
      fill("green")
      text("GO!!",displayWidth/2 + 100, displayHeight/2 + 200)

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=7;
      player.update();
      cardriving.loop();
    }
    if(player.distance>1000){

      textSize(30)
      fill("black")
      text("Press Shift for a Boost in the speed",camera.x - 200, camera.y - 100)

      if(keyCode===16  && player.index !== null){
        player.distance +=12;
        player.update();
        cardriving.loop();
      }
    }

    
    
    
    if(player.distance>3220){
      cardriving.stop();
      gameState=2
      player.rank=player.rank+1;
      Player.updateCarsAtEnd(player.rank);
      



    }

    
  
  }

  


    drawSprites();
  }
  
  end(){

    clap.loop();

    console.log("end")
    console.log(player.rank)
    //alert("Good job, You made it to the finish line !! Name : " + player.name + " Rank : Rank " + player.rank)

    swal({
      title: "Good job, You made it to the finish line !!",
      text:"Great Job! You completed the whole race in a matter of seconds, you did great!  Player Details => " + "  "+ " Name : " + player.name + ", " + "  Rank : Rank " + player.rank,
      icon: "success",
      button: "End Game",
    });

    cars[index - 1].hide();

  }
}
