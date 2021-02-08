const readLineSync=require('readline-sync');
const chalk=require('chalk');


var userName=readLineSync.question('What is your name?');
var welcomeMessage="Welcome "+userName + "to General Science Qizz App";
console.log(chalk.blue.bgRed.bold(welcomeMessage));

const questionList=[{question:'Which animal never drinks water in its entire life?',
 answer:'Kangaroo rat'},{question:'What is the physical phase of life called?', answer:'Protoplasm'},{question:'The largest cell is?',answer:'The egg of an Ostrich'},{question:'Which is the largest human cell?',answer:'ovam'},{
   question:'There are number of muscles in human?',answer:'639'
 },{question:'What is the life span of RBC?',answer:'120days'},{question:'What is the life span of WBC?',answer:'2-15 days'},{question:'The number of ribs in a human body is ?',answer:'24'},{question:'Hormones are produced by ?',answer:'Endocrine glands'}
 ]

var score=0;
function playGame(question, answer){
  const userResponse=readLineSync.question(question);
  if(userResponse.toLowerCase()==answer.toLowerCase()) {
    score=score+1;
    console.log(chalk.black.bgYellow('Right'));
  }
  else {
    score=score-1;
    console.log(chalk.black.bgMagenta('Wrong'));
  }
    console.log('your score is ',score);
}
for(let i=0;i<questionList.length;i++) { 
  let question=questionList[i].question;
  let answer=questionList[i].answer;
  playGame(question,answer);
}
if(score>5){
  console.log(chalk.black.bgYellow('You know GS well'));
}
else { 
  console.log(chalk.black.bgMagenta('U dont know GS well'));
}
console.log('Thanks for playing the Game')

