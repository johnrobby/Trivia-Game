// Create a on click event for the user to begin the game.
<button onclick="getElementById('#container').innerHTML = Date()"></button>
// After the intial prompt is clicked the timer begins a countdown from 30 seconds to zero at which point the game is over.
function startCountdown(30){
    var counter = seconds;
  
    var interval = setInterval(() => {
      console.log(counter);
      counter--;
// User inputs their answers to the questions by clicking a radio button.
var oldSchoolQuestion = [{
    question: "What is the name of Mitch's wife",
    choices: ["Heidi", "Marissa", "Helen", "Heather" ],    
    validAnswer: 0
    }, {
    question: "What does Beanie say before swearing in front of his kid?",
    choices: ["Cottonballs", "Look the other Way", "Don't tell Mom!", "Earmuffs"],
    },{
    question: "What did Frank say before drinking the beer bong",
    choices: ["I told my wife I wouldn't drink", "Pretty nice day, actually", "We are going to Bed Bath and Beyond", "Allright, I'll do one!"],
    },{
    question: "In what branch of the military did Blue serve?",
    choices: ["Coast Guard", "French Legionnaires", "Navy", "Green Berets"],
    },{
    question: "What song is playing while Frank is drowning?",
      choices: ["Sound of Silence", "Somthing in the Air Tonight", "Raindrops Keep Falling on My Head", "Baba O'Reilly"],
    }
// The results are tallied into correct or incorrect and listed at the end of the html.
    var choices = correctAnswer 
    if(correctAnswer){
        place in Correct
    }
    else if(incorrecrtAnswer){
        place in Incorrect
    }
// The game resets with a new prompt asking the user to click to begin the game.
