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
var jaeRealPersonQuestion = prompt('Is Jae Choi a real person? (y/n)');

if(jaeRealPersonQuestion === 'y' ){
  alert('correct its Jae'); 
}  else  if(jaeRealPersonQuestion === 'n'){
  alert('Its not Jae');
  
}

var jaeRealPersonAnswer = prompt ('Does Jae likes answering questions about himself? (y/n)');

if(jaeRealPersonAnswer === 'y' || jaeRealPersonAnswer === 'yes' || jaeRealPersonAnswer === 'heck yeah'){ 

    alert('Of Course. Jae likes to answer');
  } else if(jaeRealPersonAnswer === 'n' || jaeRealPersonAnswer === 'no'){  
    alert('I guess not. Jae dont like question');
  } else if(jaeRealPersonAnswer === 'maybe'){
    alert('No, I dont');
  } else {
    alert("its ok to not answer")
  }

  

var jaeAgeAnswer = prompt('How old is Jae');

switch(jaeAgeAnswer){
    case 'two':
      alert('heck yeah');
    case 'zero':
      alert('hes definitely older');
      break;
    case 'one':
      alert('almost there');
      break;
      case 'three':
      alert('amost there');
      break;
    default:
      alert('not even in the ballpark');
}
