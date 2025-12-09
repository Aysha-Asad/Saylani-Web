let userscore = 0;
let computerscore = 0;
let userchoice;
let choices = ['rock', 'paper', 'scissor'];
let emojis = {
    'rock': '🪨',
    'paper': '📄',
    'scissor': '✂️'
};

// Function to update scoreboard display
function updateScoreboard() {
    document.getElementById('userScore').textContent = userscore;
    document.getElementById('computerScore').textContent = computerscore;
    document.getElementById('score').textContent = userscore;
    document.getElementById('computerFinal').textContent = computerscore;
}

// Function to add history dot
function addHistoryDot(result) {
    const history = document.getElementById('history');
    const dot = document.createElement('div');
    dot.className = 'dot';
    
    if (result === 'win') {
        dot.classList.add('win');
    } else if (result === 'lose') {
        dot.classList.add('lose');
    } else {
        dot.classList.add('draw');
    }
    
    history.appendChild(dot);
}

// Function to clear selected state from all choices
function clearSelectedState() {
    const buttons = document.querySelectorAll('.choice');
    buttons.forEach(btn => {
        btn.classList.remove('selected', 'win', 'hidden');
    });
}

// Function to show computer pick animation
function showComputerPick() {
    const computerPick = document.getElementById('computerPick');
    computerPick.classList.add('wait');
    setTimeout(() => {
        computerPick.classList.remove('wait');
    }, 1500);
}

// Function to handle user choice
function userSelect(choice) {
    userchoice = choice;
    
    clearSelectedState();
    document.getElementById(choice).classList.add('selected');
    
    showComputerPick();
    
    setTimeout(() => {
        game();
    }, 500);
}

// Main game function
function game() {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = '';
    let resultType = 'draw';

    if (userchoice === computerChoice) {
        result = "It's a Tie! 🤝 Try Again ❤️";
        resultType = 'draw';
    } else if ((userchoice === 'rock' && computerChoice === 'scissor') ||
               (userchoice === 'paper' && computerChoice === 'rock') ||
               (userchoice === 'scissor' && computerChoice === 'paper')) {
        userscore++;
        result = "You Win! 🎉 You Choose " + emojis[userchoice] + " and Computer Choose " + emojis[computerChoice];
        resultType = 'win';
        document.getElementById(userchoice).classList.add('win');
    } else {
        computerscore++;
        result = "Computer Wins! 💻 Computer Choose " + emojis[computerChoice] + " and You Choose " + emojis[userchoice];
        resultType = 'lose';
        document.getElementById(userchoice).classList.add('hidden');
    }

    document.getElementById('result').textContent = result;
    updateScoreboard();
    addHistoryDot(resultType);
}

// Event listeners for choice buttons
document.getElementById('rock').addEventListener('click', () => userSelect('rock'));
document.getElementById('paper').addEventListener('click', () => userSelect('paper'));
document.getElementById('scissor').addEventListener('click', () => userSelect('scissor'));

// Reset functionality
document.getElementById('reset').addEventListener('click', () => {
    userscore = 0;
    computerscore = 0;
    document.getElementById('result').textContent = 'Make your choice!';
    updateScoreboard();
    clearSelectedState();
    document.getElementById('history').innerHTML = '';
});

// Rules modal functionality
document.getElementById('rules').addEventListener('click', () => {
    document.getElementById('rulesOverlay').classList.add('show');
});

document.getElementById('closeRules').addEventListener('click', () => {
    document.getElementById('rulesOverlay').classList.remove('show');
});

// Close modal when clicking outside
document.getElementById('rulesOverlay').addEventListener('click', (e) => {
    if (e.target.id === 'rulesOverlay') {
        e.target.classList.remove('show');
    }
});

// Keyboard support for choice buttons
document.addEventListener('keydown', (e) => {
    if (e.key === '1' || e.key === 'r') userSelect('rock');
    if (e.key === '2' || e.key === 'p') userSelect('paper');
    if (e.key === '3' || e.key === 's') userSelect('scissor');
});