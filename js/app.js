console.log('success'); 
// Global variables
var pChoice;
var cChoice;
var playerWin = '';
var playOptions = ["rock", "paper", "scissors"];

// DOM references
var buttonDiv = document.querySelector('.buttons');
var resultText = document.querySelector('.result h2');
var cCHoiceText = document.getElementById('cChoice');
// Functions
var displayResults = function() {
    cCHoiceText.textContent = playOptions[cChoice];
    resultText.textContent = playerWin;
};

var checkForWin = function() {
    // compare weapons
    if (pChoice !== cChoice) {
        switch(pChoice) {
            case 0: // player chose rock
                playerWin = cChoice === 1 ? 'You lose ' : 'You Win!';
                break;
            case 1:
                playerWin = cChoice === 2 ? 'You lose' : 'You Win!';
                break;
            case 2:
                playerWin = cChoice === 0 ? 'YOu LOSE!!!' : 'YOu WiN!';
                break;
        }
        // return if player wins
        //else return false
    } else {
        playerWin = 'You Tied';
        
    }
    displayResults();
};


var computerTurn = function() {
   cChoice = Math.floor(Math.random() * 3);
checkForWin();
};

// Event Handlers
buttonDiv.addEventListener('click', function(e) {
    // PLayer chooses rock, paper, or scissors
      // SAve the value of the button clicked
    e.stopPropagation();
    pChoice = parseInt(e.target.id);
    console.log(pChoice);

    // Now the Computer goes...
    computerTurn();
});

// PLayer will choose RPorS
  //listen for a button to be clicked
    // save the value

// compupter will choose RPorS(via math.random)
  // correlate the strings of rock paper or scissors to numeric values
   // use an arraay for playOptions

// Compare player choice with ai choice
  // make a function checkPlayerWin(playerChoice, aiChoice) => true/false

// display results
  // color the button chosen by the player
  // disable the other two buttons
//display computer choice
 //add the relevent image
// display win message (who won)