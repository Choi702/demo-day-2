'use strict';
/* 
  guessing game about me
*/

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

  } else if (letsPlayAGame === 'n' || letsPlayAGame === 'N' || letsPlayAGame === 'NO' || letsPlayAGame === 'No' || letsPlayAGame === 'no') {
    alert(whatIsYourName + ' BOOO!!!, you should really ask him some questions, he might amaze you!!');
  }
  console.log('finished the first function')
}


function questionTwo() {
  var jaeRealPersonQuestion = prompt('Is Jae currently employed? (y/n)');
  console.log('jaeRealPersonQuestion' + jaeRealPersonQuestion);

  if (jaeRealPersonQuestion === 'y' || jaeRealPersonQuestion === 'Y' || jaeRealPersonQuestion === 'YES' || jaeRealPersonQuestion === 'Yes' || jaeRealPersonQuestion === 'yes') {

    alert('Wrong Answer!! ' + whatIsYourName + ' Jae got laid off due to Covid-19!');
  } else if (jaeRealPersonQuestion === 'n' || jaeRealPersonQuestion === 'N' || jaeRealPersonQuestion === 'NO' || jaeRealPersonQuestion === 'No' || jaeRealPersonQuestion === 'no') {

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

  } else if (jaeRealPersonAnswer === 'n' || jaeRealPersonAnswer === 'N' || jaeRealPersonAnswer === 'NO' || jaeRealPersonAnswer === 'No' || jaeRealPersonAnswer === 'no') {
    alert('That is unfortunate!!. ' + whatIsYourName + ' Jae is a worth taking a chance, He is an AWESOME PERSON!!');
  }
}
questionThree()

function questionFour() {
  var jaeTravel = prompt('Does Jae have anything positive to offer? (y/n)');

  if (jaeTravel === 'y' || jaeTravel === 'Y' || jaeTravel === 'YES' || jaeTravel === 'Yes' || jaeTravel === 'yes') {
    alert('Heck Yeah, ' + whatIsYourName + ' Jae is ex-military, practice martial artist. Jae is discplined, has intergrity, can work under pressure, and a highly motivated indivdual!!'); 

  } else if (jaeTravel === 'n' || jaeTravel === 'N' || jaeTravel === 'NO' || jaeTravel === 'No' || jaeTravel === 'no') {
    alert('Seriously!!. ' + whatIsYourName +  ' you should not judge a book by his cover until you read a few chapters!!');
  }
}
questionFour()


function questionFive() {
  var jaeHobbieQuestion = prompt('Do you think Jae will mind if you contact him regardless of what happens from todays questions? (y/n)');

  if (jaeHobbieQuestion === 'y' || jaeHobbieQuestion === 'Y' || jaeHobbieQuestion === 'YES' || jaeHobbieQuestion === 'Yes' || jaeHobbieQuestion === 'yes') {
    alert('Absolutely ' + whatIsYourName +  ' You can contact Jae anytime!!');

  }  else if (jaeHobbieQuestion === 'n' || jaeHobbieQuestion === 'N' || jaeHobbieQuestion === 'NO' || jaeHobbieQuestion === 'no') {
      alert('I was just joking around!!. ' + whatIsYourName + ' please do so!!');
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
    }
    if (jaeAgeAnswer >= 30) {
      alert('too high')
    }
    if (jaeAgeAnswer === 29) {
      alert('GREAT JOB, You will go along way Grasshopper!');
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
    var j = ['maybe', 'no', 'no way', 'who knows', 'yes', 'not sure' ];

    if (jaeMulitpleQuestion === j[0] || jaeMulitpleQuestion === j[4]) {
      console.log('maybe')
      alert('you got it right! ' + whatIsYourName + ' your final score ' + 'you score');
    }
    if (jaeMulitpleQuestion !== j[0] || jaeMulitpleQuestion !== j[4]) {
      alert('you got it wrong! ' + whatIsYourName + ' your final score ' + 'you score');
    } 
      break;  
  }




}
questionSix();







/*
// Instructions
// Continue to build off of your lab 02 by adding additonal functionality to your About Me Guessing Game. Work in the same repository as you did for Lab 2, and modify your README.md file to describe your project with the new features you are adding.

// As a user, I would like to view a series of data related to the site owners interest so that the I can quickly view more information about them.
// Create a “Top Ten” at the bottom of your HTML page as an ordered list in HTML. Some ideas that you can include could be top ten movies, top ten favorite places, or top ten places to visit. You may choose to do whatever top ten list that you wish.
// Convert your work experience and education summary into an unordered list using HTML
// As a user, I would like to be guided to an answer through a series of feedback responses so that I can learn more about the site owner.
// Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
// Indicates through an alert if the guess is “too high” or “too low”.
// It should give the user exactly four opportunities to get the correct answer.
// After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.
// As a user, I would like to guess the answer to a question that could have many possibilities so that I can have fun with with a guessing game.
// Add a 7th question that has multiple possible correct answers that are stored in an array.
// Give the user 6 attempts to guess the correct answer.
// The guesses will end once the user guesses a correct answer or they run out of attempts.
// Display all the possible correct answers to the user.
// Consider using a loop of some sort for this question.
// As a user, I would like to know my final score so that I can know how well I did.
// Keep track of the total number of correct answers. At the end tell them how many they got correct out of the 7 questions asked.
// In addition to the user stories stated above, continue to use console.logs throughout the code to track the questions that are being asked to the user, and add addtional CSS to style your HTML page.

// Stay within scope of what was taught so far in class. Do not write functions within your application. Avoid the use of “helper” methods such as .includes() and .join(). Work with the instructional staff directly if you have questions about this requirement.

// Stretch Goals
// After completing all of the requirements listed above, you may optionally challenge yourself further by implementing some or all of the following into your application.

// Attempt to make your code more DRY by putting all of the questions, answers, and responses to the first five yes/no questions into arrays (or even one huge multidimensional array), and modifying the game logic such that a ‘for’ loop will control the flow from question to question.
// Make the number-guessing question use a random number as its correct answer.
// Resources
// Utulize the same resources as described in Lab 02.

// Submission Instructions
// Submit the link to your GitHub repo for this project
// Add a comment to this Canvas submission with answers to the following questions
// How did this go, overall?
// What observations or questions do you have about what you’ve learned so far?
// How long did it take you to complete this assignment? And, before you started, how long did you think it would take you to complete this assignment?










// switch(jaeAgeAnswer){
//     case 'two':
//       alert('heck yeah');
//     case 'zero':
//       alert('hes definitely older');
//       break;
//     case 'one':
//       alert('almost there');
//       break;
//       case 'three':
//       alert('amost there');
//       break;
//     default:
//       alert('not even in the ballpark');
// }



*/


