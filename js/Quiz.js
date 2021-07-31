class Quiz {
  constructor(){
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
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      console.log("DB:"+contestantCountRef);
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }



  play(){
  background("yellow")

  textSize(30)
  fill("black")
  text("Results of the Quiz!:",350,40)
  
  Contestant.getPlayerInfo()
  drawSprites();
  var x = 220
  var y = 250

   
   if (allContestants!= undefined){
     fill("blue");
     textSize(15);
     text("NOTE: contestant who answered correctly, their name would be highlighted in green",130,230);
   }
  
   
    for(var plr in allContestants){
      var correctAns = "2";
      if(correctAns === allContestants[plr].answer){
        fill("Green")
        y = y+30
      text(allContestants[plr].name,x,y);
      
      }
      else{
        fill("red");
        y = y+30
        text(allContestants[plr].name,x,y);
      
      }
    
    
    }
  
  }

}
