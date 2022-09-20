var readlineSync=require("readline-sync");

var topScoreList=[
  {
    name:"Pranjal",
    score:5
  },

  {
    name:"Anagha",
    score:4
  },
  {
    name:"Anuradha",
    score:3
  },
  
]



var question=[
  {
    question:"\nWhat is the name of the secret society of time travellers? \n a.Sic Mundus Creatus Est \n b.Mundus Creatus \n c.Creatus Est \n d.Sic Mundus\n",
    correctOpt:"d",
    answer:"Sic Mundus is the name of the secret society of time traveller"
},
  {
    question:"\n In how many years does the cycle takes place? \n a.23 years \n b.27 years  \n c.33 years \n d.37 years \n",
    correctOpt:"c",
    answer:"Cycle takes place in 33 years"
},
  {
    question:"\n What is the name of the town where the events take place? \n a.Hawkins \n b. Winden \n c.Riverdale \n d.Springfield \n",
    correctOpt:"b",
    answer:"Winden is the name of city where the events took place"
},
  {
    question:"\n What is the important question? \n a.Not how but where \n b.Not where but when  \n c.Not when but whom \n d.Not whom but how \n",
    correctOpt:"b",
    answer:"Not where but when is right answer"
},
  {
    question:"\n Who takes Mikkel Nielsen into the cave? \n a.Jonas Kahnwald \n b.Ulrich Nielsen  \n c.Bartosz Tiedemann \n d.No one \n",
    correctOpt:"a",
    answer:"Jonas Kahnwald is the one who took Mikkel into the cave"
},
  {
    question:"\n Who invents the time machine? \n a.Claudia Tiedmann \n b.Michael Kahnwald  \n c.H.G. Tannhaus \n d.Helge Doppler \n",
    correctOpt:"c",
    answer:"H.G. Tannhaus invented the time machine"
},
]

var score=0;
var userName=readlineSync.question("What is Your name? ");
console.log("\n Welcome "+userName+" to Dark Series Trivia");


console.log("\n Select the correct option,if you thik correct option is c then type only c\n");
console.log("\n---------Here we start the Trivia-----------------\n");

function play(question,correctOpt,answer){
  var userAnswer=readlineSync.question(question);
  if(userAnswer.toUpperCase()=== correctOpt.toUpperCase()){
    console.log("Great,you are right!\n");
    score=score+1;
  }
  else{
    console.log("Sad,you are wrong!\n");
    score=score-1;
    console.log(answer + "\n");
  }
  console.log("Score: "+score);
}

for(let i=0;i<question.length;i++){
  var currentQuestion=question[i];
  play(currentQuestion.question,currentQuestion.correctOpt,currentQuestion.answer);
  
}

function topScorer(){
  for(var i=0;i<topScoreList.length;i++){
    var currentScore=topScoreList[i];
    if(score>currentScore.score){
      console.log("\n Bravo!you are one of the top scorer now send me screenshot of your score i will update the top scorer list.");
    
      break;
    }
  }
}

topScorer();

function showTopScore(topScoreList){
  for(let i=0;i<topScoreList.length;i++){
    console.log(topScoreList[i].name+"="+topScoreList[i].score);
  }
}

console.log("\n People with high scores \n");
showTopScore(topScoreList);
