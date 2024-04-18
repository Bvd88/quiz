let countries = [];
let shuffledCountries = [];
let currentPosition = 0;
let correctCount = 0;

// Function to load countries from the text file //
function loadCountries() {
    fetch('Countries.txt')
    .then(response => response.text())
    .then(text => {
        countries = text.split('\n').map(country => country.trim().toUpperCase()).slice(0, 195);
        startGame();
    })
    .catch(error => console.error('Error loading countries:', error));
}
// Improved shuffle function using Fisher-Yates algorithm //
function shuffleCountries() {
    let currentIndex = countries.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = countries[currentIndex];
        countries[currentIndex] = countries[randomIndex];
        countries[randomIndex] = temporaryValue;
    }

    shuffledCountries = countries.map(country => country.split('').sort(() => 0.5 - Math.random()).join(''));
}
function displayNewCountry() {
    if (currentPosition >= 5) {
        displayFinalScreen();
        return;
    }

    let countryContainer = document.getElementById("country");
    countryContainer.innerHTML = "";

    let originalCountry = countries[currentPosition];
    let shuffledCountry = shuffledCountries[currentPosition];
    let firstLetter = originalCountry[0]; // Capture the first letter of the original country name

    // Shuffling but keeping track of the first letter position
    let letters = shuffledCountry.split('');
    let firstLetterPosition = letters.indexOf(firstLetter); // Find the first letter's position in shuffled country

    x = 0;
    clearInterval(idInterval);
    move();
    for (let i = 0; i < letters.length; i++) {
        var div = document.createElement("div");
        div.className = "letter";
        if (i === firstLetterPosition) { // Apply a different class if it's the first letter's new position
            div.classList.add("first-letter"); // Use classList.add for better practice
        }
        div.innerHTML = letters[i];
        countryContainer.appendChild(div);
    }
}    


function displayFinalScreen() {
    clearInterval(idInterval);
    document.getElementById("game-screen").style.display = "none";
    document.getElementById("final-screen").style.display = "flex";
    document.getElementById("correct-count").innerHTML = correctCount;
}

// Function to compare the entered country with the correct country
function compare() {
    var correctCountry = countries[currentPosition];
    var enteredCountry = document.getElementById("enteredCountry").value;
    enteredCountry = enteredCountry.toUpperCase();

    if (correctCountry == enteredCountry) {
        currentPosition++;
        correctCount++;
        document.getElementById("count").innerHTML = correctCount;
        enteredCountry = document.getElementById("enteredCountry").value = "";
        displayNewCountry();
    }
}

let x = 0;
let idInterval;

function move() {
    if (x == 0) {
        x = 1;
        let elem = document.getElementById("myBar");
        let width = 1;
        let duration = 60; 
        let interval = duration * 3; 
        idInterval = setInterval(frame, interval);

        function frame() {
            if (width >= 100) {
                clearInterval(idInterval);
                x = 0;
                currentPosition++;
                document.getElementById("enteredCountry").value = "";
                displayNewCountry();
            } else {
                width += 100 / duration; 
                elem.style.width = width + "%";
            }
        }
    }
}

function startGame() {
    if (countries.length === 0) return; 
    currentPosition = 0;
    correctCount = 0;
    shuffleCountries();
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("game-screen").style.display = "block";
    document.getElementById("final-screen").style.display = "none";
    displayNewCountry();
    document.getElementById("count").innerHTML = 0;
    document.getElementById("enteredCountry").focus();
}

window.onload = loadCountries;