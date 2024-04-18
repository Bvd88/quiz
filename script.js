
// Cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {

        document.querySelectorAll('.card').forEach(c => {
            c.classList.remove('expanded');
            c.querySelector('.game-image').style.display = '';
            c.querySelector('.game-content').style.display = 'none';
        });


        this.classList.add('expanded');
        this.querySelector('.game-image').style.display = 'none';


        var gameContent = this.querySelector('.game-content');
        gameContent.style.display = 'block';

        
        var iframe = this.querySelector('iframe');
        var gamePath = this.getAttribute('data-game'); 
        if (iframe.src !== gamePath) {
            iframe.src = gamePath;
        }
    });
});

// Style Switcher

document.addEventListener('DOMContentLoaded', function() {
    var styleSwitcher = document.getElementById('styleSwitcher');

    styleSwitcher.addEventListener('click', function() {
        document.body.classList.toggle('basic-style');
        this.classList.toggle('basic-style');
    });
});



//Music player
const songs = ['OtherFiles/song1.mp3', 'OtherFiles/song2.mp3', ]; 
    let currentSong = 0;

    // Initialize a Howl object
    let sound = new Howl({
        src: [songs[currentSong]],
        onend: function() {
            playNextSong();
        }
    });

    // Play button
    document.getElementById('playBtn').addEventListener('click', function() {
        sound.play();
    });

    // Pause button
    document.getElementById('pauseBtn').addEventListener('click', function() {
        sound.pause();
    });

    // Next button
    document.getElementById('nextBtn').addEventListener('click', function() {
        playNextSong();
    });

    function playNextSong() {
        sound.stop();
        currentSong = (currentSong + 1) % songs.length;
        sound = new Howl({
            src: [songs[currentSong]]
        });
        sound.play();
    }

const links = document.querySelectorAll('.nav__link');
const light = document.querySelector('.nav__light');

function moveLight({offsetLeft, offsetWidth}){
  light.style.left = `${offsetLeft - offsetWidth/4}px`;
}

function activeLink(linkActive){
  links.forEach(link => {
    link.classList.remove('active');
    linkActive.classList.add('active');
  })
}

links.forEach((link) => {
  link.addEventListener('click', (event) => {
    moveLight(event.target);
    activeLink(link);
  })
})


//falling leafs
function createPetal() {
    const petal = document.createElement('i');
    petal.classList.add('fas', 'fa-leaf', 'petal'); 

    // Randomize size
    const size = Math.random() * 20 + 10; 
    petal.style.fontSize = size + 'px';

    // Randomize color
    const colors = ['pink', 'red', 'yellow', 'purple', 'green']; 
    const colorIndex = Math.floor(Math.random() * colors.length);
    petal.style.color = colors[colorIndex];

    // Randomize position and animation duration
    petal.style.left = Math.random() * window.innerWidth + 'px';
    const duration = Math.random() * 5 + 3; 
    petal.style.animationDuration = duration + 's';

    document.body.appendChild(petal);

    const footerHeight = document.querySelector('footer').offsetHeight;
    const stopPosition = window.innerHeight - footerHeight;

    setTimeout(() => {
        petal.style.top = stopPosition - petal.offsetHeight + 'px';
        petal.style.animation = 'none';
    }, (duration * 1000) * (stopPosition / window.innerHeight));
}

setInterval(createPetal, 300); 

