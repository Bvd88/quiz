let flags = ["fr.svg", "de.svg", "it.svg", "es.svg", "rou.svg"];  // France, Germany, Italy, Spain, United Kingdom


let correct = [0, 1, 1, 2, 1];  // The correct option for each flag


options = [
    ["FRANCE", "ROMANIA", "GREECE"],
    ["AUSTRIA", "GERMANY", "POLAND"],
    ["SPAIN", "ITALY", "PORTUGAL"],
    ["SWEDEN", "NORWAY", "SPAIN"],
    ["IRELAND", "ROMANIA", "FINLAND"]
];


// Variable to store the current position
let currentPosition = 0;
// Variable to store the number of correct answers so far
let numberCorrect = 0;

function startGame() {
    // Reset the variables
    currentPosition = 0;
    numberCorrect = 0;
    // Activate the necessary screens
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("game-screen").style.display = "block";
    loadFlag();
}
function preloadImages() {
    for (let i = 0; i < flags.length; i++) {
        const img = new Image();
        img.src = "img/" + flags[i];
    }
}

window.onload = preloadImages;

// Function to load the next flag and its options
function loadFlag() {
    // Check if there are no more flags
    if (flags.length <= currentPosition) {
        endGame();
    } else { // Load the options
        // Clear the classes that were assigned
        clearOptions();

        document.getElementById("flagImage").src = "img/" + flags[currentPosition];
        document.getElementById("n0").innerHTML = options[currentPosition][0];
        document.getElementById("n1").innerHTML = options[currentPosition][1];
        document.getElementById("n2").innerHTML = options[currentPosition][2];
    }
}

function clearOptions() {
    document.getElementById("n0").className = "name";
    document.getElementById("n1").className = "name";
    document.getElementById("n2").className = "name";

    document.getElementById("l0").className = "letter";
    document.getElementById("l1").className = "letter";
    document.getElementById("l2").className = "letter";
}

function checkAnswer(chosenOption) {
    if (chosenOption == correct[currentPosition]) { // Correct
        // Add classes to color the chosen option green
        document.getElementById("n" + chosenOption).className = "name nameCorrect";
        document.getElementById("l" + chosenOption).className = "letter letterCorrect";
        numberCorrect++;
    } else { // Incorrect
        // Add classes to color the chosen option red
        document.getElementById("n" + chosenOption).className = "name nameIncorrect";
        document.getElementById("l" + chosenOption).className = "letter letterIncorrect";

        // The option that was correct
        document.getElementById("n" + correct[currentPosition]).className = "name nameCorrect";
        document.getElementById("l" + correct[currentPosition]).className = "letter letterCorrect";
    }
    currentPosition++;
    // Wait 1 second and then show the next flag and its options
    setTimeout(loadFlag, 1000);
}
function endGame() {
    // Hide the screens and show the final screen
    document.getElementById("game-screen").style.display = "none";
    document.getElementById("end-screen").style.display = "block";
    // Add the results
    document.getElementById("numCorrect").innerHTML = numberCorrect;
    document.getElementById("numIncorrect").innerHTML = flags.length - numberCorrect;
}

function returnToStart() {
    // Hide the screens and activate the start screen
    document.getElementById("end-screen").style.display = "none";
    document.getElementById("start-screen").style.display = "block";
    document.getElementById("game-screen").style.display = "none";
}