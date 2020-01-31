function check(){

    var question1=document.quiz.question1.value;
    console.log(question1);
    var question2=document.quiz.question2.value;
    console.log(question2);
    var question3=document.quiz.question3.value;
    console.log(question3);
    var correct=0;
      if(question1=="SQL"){
        correct+=50;
      }
      if(question2==2007){
        correct+=50;
      }
      if (question3=="Honda"){
        correct+=50;
      }
      var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
        var messages = ["https://media3.giphy.com/media/xT0xezQGU5xCDJuCPe/giphy.gif", "That's just okay", "You really need to do better"];
        var score;
    
        if (correct == 0) {
            score = 2;
        }
    
        if (correct > 0 && correct < 3) {
            score = 1;
        }
    
        if (correct == 3) {
            score = 0;
        }
    
        document.getElementById("after_submit").style.visibility = "visible";
    
        document.getElementById("message").innerHTML = messages[score];
        document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
        document.getElementById("picture").src = pictures[score];
        }