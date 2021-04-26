//we gets the elements here...
var RandomScore=$("#targetScore");
var RED=$(".red");
var BLUE=$(".blue");
var GREEN=$(".green");
var YELLOW=$(".yellow");
var winCount=0;
var loseCount=0;
var MyScore=0;


//GAME
function Game(){
    var a=Math.floor(Math.random()*100)+20;
    RandomScore.html(a);
    MyScore=0;
    $("#mySCORE").html("0");
    var blueVal=Math.floor(Math.random()*10)+1;
    var greenVal=Math.floor(Math.random()*10)+1;
    var redVal=Math.floor(Math.random()*10)+1;
    var yellowVal=Math.floor(Math.random()*10)+1;
    
    RED.on("click",function(){
     
      MyScore+=redVal;
      $("#mySCORE").html(MyScore);
      if(MyScore == a){
        alert("Congratulations! You Won!");
        winCount++;
        $("#win").html(winCount);
        MyScore=0;
        $("#mySCORE").html(MyScore);
        a=Math.floor(Math.random()*100)+20;
        RandomScore.html(a);
        MyScore=0;
        $("#mySCORE").html("0");
         blueVal=Math.floor(Math.random()*10)+1;
        greenVal=Math.floor(Math.random()*10)+1;
         redVal=Math.floor(Math.random()*10)+1;
         yellowVal=Math.floor(Math.random()*10)+1;
       
    }
    if(MyScore > a){
      alert("Sorry.You lost.");
      loseCount++;
      $("#lose").html(loseCount);
      MyScore=0;
      $("#mySCORE").html(MyScore);
      a=Math.floor(Math.random()*100)+20;
      RandomScore.html(a);
      MyScore=0;
      $("#mySCORE").html("0");
       blueVal=Math.floor(Math.random()*10)+1;
      greenVal=Math.floor(Math.random()*10)+1;
       redVal=Math.floor(Math.random()*10)+1;
       yellowVal=Math.floor(Math.random()*10)+1;
      
  }
    });
    GREEN.on("click",function(){
        MyScore+=greenVal;
        $("#mySCORE").html(MyScore);
        if(MyScore == a){
          alert("Congratulations! You Won!");
            winCount++;
            $("#win").html(winCount);
            MyScore=0;
            $("#mySCORE").html("0");
            a=Math.floor(Math.random()*100)+20;
            RandomScore.html(a);
            MyScore=0;
            $("#mySCORE").html("0");
             blueVal=Math.floor(Math.random()*10)+1;
            greenVal=Math.floor(Math.random()*10)+1;
             redVal=Math.floor(Math.random()*10)+1;
             yellowVal=Math.floor(Math.random()*10)+1;
           
        }
        if(MyScore > a){
          alert("Sorry.You lost.");
          loseCount++;
          $("#lose").html(loseCount);
          MyScore=0;
          $("#mySCORE").html(MyScore);
          a=Math.floor(Math.random()*100)+20;
        RandomScore.html(a);
        MyScore=0;
        $("#mySCORE").html("0");
         blueVal=Math.floor(Math.random()*10)+1;
        greenVal=Math.floor(Math.random()*10)+1;
         redVal=Math.floor(Math.random()*10)+1;
         yellowVal=Math.floor(Math.random()*10)+1;
          
      }
      });
      BLUE.on("click",function(){
        MyScore+=blueVal;
        $("#mySCORE").html(MyScore);
        if(MyScore == a){
          alert("Congratulations! You Won!");
            winCount++;
            $("#win").html(winCount);
            MyScore=0;
            $("#mySCORE").html(MyScore);
            a=Math.floor(Math.random()*100)+20;
            RandomScore.html(a);
            MyScore=0;
            $("#mySCORE").html("0");
             blueVal=Math.floor(Math.random()*10)+1;
            greenVal=Math.floor(Math.random()*10)+1;
             redVal=Math.floor(Math.random()*10)+1;
             yellowVal=Math.floor(Math.random()*10)+1;
           
        }
        if(MyScore > a){
          alert("Sorry.You lost.");
          loseCount++;
          $("#lose").html(loseCount);
          MyScore=0;
          $("#mySCORE").html(MyScore);
          a=Math.floor(Math.random()*100)+20;
          RandomScore.html(a);
          MyScore=0;
          $("#mySCORE").html("0");
           blueVal=Math.floor(Math.random()*10)+1;
          greenVal=Math.floor(Math.random()*10)+1;
           redVal=Math.floor(Math.random()*10)+1;
           yellowVal=Math.floor(Math.random()*10)+1;
          
      }
      });
      YELLOW.on("click",function(){
        MyScore+=yellowVal;
        $("#mySCORE").html(MyScore);
        if(MyScore == a){
          alert("Congratulations! You Won!");
            winCount++;
            $("#win").html(winCount);
            MyScore=0;
            $("#mySCORE").html("0");
            a=Math.floor(Math.random()*100)+20;
            RandomScore.html(a);
            MyScore=0;
            $("#mySCORE").html("0");
             blueVal=Math.floor(Math.random()*10)+1;
            greenVal=Math.floor(Math.random()*10)+1;
             redVal=Math.floor(Math.random()*10)+1;
             yellowVal=Math.floor(Math.random()*10)+1;
           
        }
        if(MyScore > a){
          alert("Sorry.You lost.");
          loseCount++;
          $("#lose").html(loseCount);
          MyScore=0;
          $("#mySCORE").html(MyScore);
          a=Math.floor(Math.random()*100)+20;
          RandomScore.html(a);
          MyScore=0;
          $("#mySCORE").html("0");
           blueVal=Math.floor(Math.random()*10)+1;
          greenVal=Math.floor(Math.random()*10)+1;
           redVal=Math.floor(Math.random()*10)+1;
           yellowVal=Math.floor(Math.random()*10)+1;
          
      }
      });
  
      $(".red").click(function(){
        $(".red").animate({
          
          bottom: '250px',
          opacity: '0.5',
         
        });
      });

      $(".blue").click(function(){
        $(".blue").animate({
          bottom: '250px',
          opacity: '0.5',
        });
      });

      $(".green").click(function(){
        $(".green").animate({
          height: 'toggle'
        });
      });

      $(".yellow").click(function(){
        $(".yellow").animate({
          bottom: '250px',
          opacity: '0.5',
        });
      });

}
Game();
