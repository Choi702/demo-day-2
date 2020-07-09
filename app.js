'use strict';

/* 
  guessing game about me
  is Jae Choi a real person? (y/n)
    if they answer y - "correct"
    else - "well you're not Jae"

  Does Jae love coding 201? (y/n)
    if y- "of course, I love coding"
    If n- "you need to re-think the future"
    else - "No time to play around"

  How old is Jae? (2)
    if 0 - she's defintely older 
    if 1 or 3  - almost there
    if 2 - yep!
    if 4 - not close buddy
    else - not even in the ballpark

*/
function yourName (){
 var whatIsYourName = prompt('What is your name?');
alert(whatIsYourName + ' Nice to meet you')



var letsPlayAGame = prompt('Lets play a game? (y/n)');
if(letsPlayAGame === 'y' || letsPlayAGame === 'Y' ||  letsPlayAGame === 'Yes' || letsPlayAGame === 'YES'){
  alert('Lets begin')
} else if (letsPlayAGame === 'n' || letsPlayAGame === 'N' || letsPlayAGame === 'No' || letsPlayAGame === 'NO'){
  alert('You Suck!!')
}

var jaeRealPersonQuestion = prompt('Is Jae Choi a real person? (y/n)');
 console.log('jaeRealPersonQuestion' + jaeRealPersonQuestion);

if(jaeRealPersonQuestion === 'y' ){
  alert('correct its Jae'); 
}  else  if(jaeRealPersonQuestion === 'n'){
  alert('Its not Jae');

  
}
 
}
yourName()

// got some help from Jack to figure out else if and alerts
function jaeAnswer (){
var jaeRealPersonAnswer = prompt ('Does Jae likes answering questions about himself? (y/n)');
 console.log ('jaeRealPersonAnswer' +  jaeRealPersonAnswer);

if(jaeRealPersonAnswer === 'y' || jaeRealPersonAnswer === 'yes' || jaeRealPersonAnswer === 'heck yeah'){ 

    alert('Of Course. Jae likes to answer');
  } else if(jaeRealPersonAnswer === 'n' || jaeRealPersonAnswer === 'no'){  
    alert('I guess not. Jae dont like question');
  } else if(jaeRealPersonAnswer === 'maybe'){
    alert('No, I dont');
  } else {
    alert("its ok to not answer")
  }  
}
jaeAnswer()


/*
var jaeHobbieQuestion = prompt ('Do Jae have a person hobbie?(y/n)');

  if(jaeHobbieQuestion === 'y' || jaeHobbieQuestion === 'Y' || jaeHobbieQuestion === 'Yes' || jaeHobbieQuestion === 'yes' || jaeHobbieQuestion === ''){
    alert('Awesome everyone needs a hobbie of some sort');
  } else if(jaeHobbieQuestion ==='n' || jaeHobbieQuestion === 'N' || jaeHobbieQuestion === 'NO' || jaeHobbieQuestion === "no"){
    alert('You need to take up a hobbie')
    // console.log ('jaeHobbieQuestion' + jaeHobbieQuestion); 

}
// got some help from TA syklar to get the queston 6 working better. I was a little wonky at first 
// console.log ('jaeAgeAnswer' + jaeAgeAnswer);
for(var i = 0; i < 4; i++){
var jaeAgeAnswer = prompt('How old is Jae');
    jaeAgeAnswer = parseInt(jaeAgeAnswer)

    if (jaeAgeAnswer <= 44){
      alert('too low!!') 
    } 
    if (jaeAgeAnswer  >= 46){  
      alert('too high')
    }
    if (jaeAgeAnswer === 45){
      alert('GREAT JOB, You will go along way Grasshopper!');
      break;
    }
    if (i === 3){
      alert('No more guessing, Answer: im 45 LOL')
    }
  }
  
    
for(var i = 0; i < 6; i++){
  var jaeMulitpleQuestion = prompt('Is Jae Crazy');
    var j = ['heck yeah, hes crazy', 'heck no, he is crazy' , 'heck no, he may be crazy'];

  // got help from TA  Merry to get Array figured out and working properly
  //  console.log(i)
    if (jaeMulitpleQuestion == j[0]){
    alert('heck yeah, hes crazy')}
    if (jaeMulitpleQuestion == j[1]){
    alert('heck no, he is crazy')}
    if (jaeMulitpleQuestion == j[2]){
    alert('heck no, he may be crazy')}
    



  }

  
    


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
