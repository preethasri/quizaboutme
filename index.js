const chalk=require('chalk');
const readline=require('readline');
const rl=readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var score=0;

const quizquestions=[
  {
     question:`
  what is preetha's favourite drink?
    a:coffee
    b:tea
    c:juice\n`,
    answer:"a"
  },
  {
     question:`
  what does she use the most in a day?
    a:facebook
    b:instagram
    c:whatsapp\n`,
    answer:"b"
  },
  {
     question:
  `what makes her happy?
    a:going for a movie
    b:shopping
    c:listening to songs\n`,
     answer:"c"
  },
  {
    question:
  `what is her favourite teacher?
    a:tanay pratap sir
    b:sumathi mam\n`,
     answer:"a"
  },
  {
  question:
  `Is she likes Dogs?
    a:yes
    b:no\n`,
     answer:"b"
  },

];
console.log(chalk.green("welcome\n"))
console.log(chalk.red("How well do you know about preetha. take a quiz and know about her"));

let questionindex=0;

function question()
{
  rl.question(quizquestions[questionindex].question,(answer)=>{
  console.log(chalk.yellow(`you answered:${answer}`))
  if(answer.toLowerCase()== quizquestions[questionindex].answer.toLowerCase())
    {
    console.log(chalk.green("right answer"))
    questionindex++
    score++;
    serve()
    }
  else{
    console.log(chalk.red("wrong answer"))
    console.log("try again")
    console.log("your score is:",score)
    question();
  }
}) 
}
function serve()
{
  if(isend())
  {
    console.log("Thanks for playing your final score is",score)
    rl.close()

  }
    else{
     rl.question("what do u want to do\n press e to exit,any other key to continue....\n",
     (choice)=>{
       console.log(`you selected ${choice}`)
    if(choice.toLowerCase()!="e")
      {
         question()
      }
    else
      {
        console.log("thanks for playing.....")
        rl.close()
      }
    });
  }
}
function isend()
{
  if(quizquestions.length==questionindex)
  {
    return true;
     
  }

 
}
serve()
