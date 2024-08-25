// Map drum elements to keys
const keyMap = {
    'q': 'kick',
    'w': 'snare',
    'e': 'hihat',
    'a': 'tom1',
    's': 'tom2',
    'd': 'cymbal'
};

// Add click event listeners to each drum element
document.querySelectorAll('.drum').forEach(drum => {
    drum.addEventListener('click', () => playSound(drum.id));
});

// Add keydown event listener to the document
document.addEventListener('keydown', (event) => {
    const drumId = keyMap[event.key.toLowerCase()];
    if (drumId) {
        playSound(drumId);
        animateDrum(drumId);
    }
});

function playSound(drumId) {
    let audio;
    switch(drumId) {
        case 'kick':
            audio = new Audio('sounds/kick.mp4');
            break;
        case 'snare':
            audio = new Audio('sounds/snare.wav');
            break;
        case 'hihat':
            audio = new Audio('sounds/hihat.wav');
            break;
        case 'tom1':
            audio = new Audio('sounds/tom1.wav');
            break;
        case 'tom2':
            audio = new Audio('sounds/tom2.wav');
            break;
        case 'cymbal':
            audio = new Audio('sounds/cymbal.wav');
            break;
        default:
            console.log('Unknown drum: ' + drumId);
            return;
    }
    audio.play();
}

// Function to animate the drum when played via keyboard
function animateDrum(drumId) {
    const drumElement = document.getElementById(drumId);
    if (drumElement) {
        drumElement.classList.add('playing');
        setTimeout(() => drumElement.classList.remove('playing'), 100);
    }
}
