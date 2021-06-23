'use strict';
/* 
  guessing game about me
*/
var totalCorrect = 0;
var totalIncorrect = 0;

var whatIsYourName = 'no name'
console.log('Start of my page')
function yourName() {
  whatIsYourName = prompt('What is your name?');
  alert(whatIsYourName + ' Nice to meet you')
}

function questionOne() {
  var letsPlayAGame = prompt('Do you want to ask some questions about Jae? (y/n)');
  if (letsPlayAGame === 'y' || letsPlayAGame === 'Y' || letsPlayAGame === 'YES' || letsPlayAGame === 'Yes' || letsPlayAGame === 'yes') {
    alert(whatIsYourName + ' YOU ARE A SCHOLAR!!' + ' Lets start shall we!!');
    totalCorrect++;
  } else if (letsPlayAGame === 'n' || letsPlayAGame === 'N' || letsPlayAGame === 'NO' || letsPlayAGame === 'No' || letsPlayAGame === 'no') {
    alert(whatIsYourName + ' BOOO!!!, you should really ask him some questions, he might amaze you!!');
    totalIncorrect++;
  }
 
  console.log('finished the first function')
}


function questionTwo() {
  var jaeRealPersonQuestion = prompt('Is Jae currently employed? (y/n)');
  console.log('jaeRealPersonQuestion' + jaeRealPersonQuestion);

  if (jaeRealPersonQuestion === 'y' || jaeRealPersonQuestion === 'Y' || jaeRealPersonQuestion === 'YES' || jaeRealPersonQuestion === 'Yes' || jaeRealPersonQuestion === 'yes') {
    alert('Wrong Answer!! ' + whatIsYourName + ' Jae got laid off due to Covid-19!');
    totalIncorrect++;
  } else if (jaeRealPersonQuestion === 'n' || jaeRealPersonQuestion === 'N' || jaeRealPersonQuestion === 'NO' || jaeRealPersonQuestion === 'No' || jaeRealPersonQuestion === 'no') {
    
    totalCorrect++;
    alert('You are correct!! ' + whatIsYourName, + ' Jae is not working, but actively looking!!');
  }
  console.log('finished my second function')
}

yourName()
questionOne()
questionTwo()

// got some help from Jack to figure out else if and alerts

function questionThree() {
  var jaeRealPersonAnswer = prompt('Does you think we should give Jae a chance at Software Development? (y/n)');

  console.log('jaeRealPersonAnswer' + jaeRealPersonAnswer);

  if (jaeRealPersonAnswer === 'y' || jaeRealPersonAnswer === 'Y' || jaeRealPersonAnswer === 'YES' || jaeRealPersonAnswer === 'Yes' || jaeRealPersonAnswer === 'yes') {
    alert('Of Course!!. ' + whatIsYourName + ' You should give Jae a chance, he might suprise you!!');
    totalCorrect++;
  } else if (jaeRealPersonAnswer === 'n' || jaeRealPersonAnswer === 'N' || jaeRealPersonAnswer === 'NO' || jaeRealPersonAnswer === 'No' || jaeRealPersonAnswer === 'no') {
    alert('That is unfortunate!!. ' + whatIsYourName + ' Jae is a worth taking a chance, He is an AWESOME PERSON!!');
    totalIncorrect++;
  }
}
questionThree()

function questionFour() {
  var jaeTravel = prompt('Does Jae have anything positive to offer? (y/n)');

  if (jaeTravel === 'y' || jaeTravel === 'Y' || jaeTravel === 'YES' || jaeTravel === 'Yes' || jaeTravel === 'yes') {
    alert('Heck Yeah, ' + whatIsYourName + ' Jae is ex-military, practice martial artist. Jae is discplined, has intergrity, can work under pressure, and a highly motivated indivdual!!'); 
    totalCorrect++;
  } else if (jaeTravel === 'n' || jaeTravel === 'N' || jaeTravel === 'NO' || jaeTravel === 'No' || jaeTravel === 'no') {
    alert('Seriously!!. ' + whatIsYourName +  ' you should not judge a book by his cover until you read a few chapters!!');
    totalIncorrect++;
  }
}
questionFour()


function questionFive() {
  var jaeHobbieQuestion = prompt('Do you think Jae will mind if you contact him regardless of what happens from todays questions? (y/n)');

  if (jaeHobbieQuestion === 'y' || jaeHobbieQuestion === 'Y' || jaeHobbieQuestion === 'YES' || jaeHobbieQuestion === 'Yes' || jaeHobbieQuestion === 'yes') {
    alert('Absolutely ' + whatIsYourName +  ' You can contact Jae anytime!!');
    totalCorrect++;
  }  else if (jaeHobbieQuestion === 'n' || jaeHobbieQuestion === 'N' || jaeHobbieQuestion === 'NO' || jaeHobbieQuestion === 'no') {
      alert('I was just joking around!!. ' + whatIsYourName + ' please do so!!');
    totalIncorrect++;
  }
    console.log('jaeHobbieQuestion' + jaeHobbieQuestion);
}
questionFive()

// got some help from TA syklar to get the queston 6 working better. I was a little wonky at first 
function myQuestion() {
  for (var i = 0; i < 4; i++) {
    var jaeAgeAnswer = prompt('At what age did Jae retire from the Army?');
    jaeAgeAnswer = parseInt(jaeAgeAnswer)
    if (jaeAgeAnswer <= 28) {
      alert('too low!!')
      totalIncorrect++;
    }
    totalCorrect++;
    if (jaeAgeAnswer >= 30) {
      alert('too high')
      totalIncorrect++;
    }
    if (jaeAgeAnswer === 29) {
      alert('GREAT JOB, You will go along way Grasshopper!');
      totalCorrect++;
      break;
    }
    if (i === 3) {
      alert('No more guessing, Jae got out at age 29 LOL')
     
    }
  }
}
myQuestion()


// got help from TA  Merry to get Array figured out and working properly
//  console.log(i)

function questionSix() {

  for (var i = 0; i < 6; i++) {
    var jaeMulitpleQuestion = prompt('Do you think Jae will find work soon??');
    var j = ['maybe', 'no', 'no way', 'who knows', 'nope', 'not sure' ];

    if (jaeMulitpleQuestion === j[0, 3] || jaeMulitpleQuestion === j[5]) {
      console.log('maybe')
      alert('you got it right! ' + whatIsYourName + ' your final score for this game is ' + totalCorrect +  'correct answers from the game you played today');
      
    }
    if (jaeMulitpleQuestion !== j[1, 2] || jaeMulitpleQuestion !== j[4]) {
      alert('you got it wrong! ' + whatIsYourName + ' your final score for this game is ' + totalIncorrect + ' in-correct answers from the game you played today');
    } 
      break;  
  }




}
questionSix();


