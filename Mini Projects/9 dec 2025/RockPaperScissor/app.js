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
        btn.classList.remove('selected', 'win', 'faded');
        btn.style.opacity = ''; // remove inline opacity
    });
}

// Function to show computer pick animation
function showComputerPick() {
    const computerPick = document.getElementById('computerPick');
    if (!computerPick) return;
    computerPick.classList.add('wait');
    setTimeout(() => {
        computerPick.classList.remove('wait');
    }, 1500);
}

// Function to handle user choice
function userSelect(choice) {
    userchoice = choice;
    
    clearSelectedState();
    const btn = document.getElementById(choice);
    if (btn) btn.classList.add('selected');
    
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
        const winBtn = document.getElementById(userchoice);
        if (winBtn) winBtn.classList.add('win');
    } else {
        computerscore++;
        result = "Computer Wins! 💻 Computer Choose " + emojis[computerChoice] + " and You Choose " + emojis[userchoice];
        resultType = 'lose';
        // use 'faded' + inline opacity instead of global 'hidden' utility that hides element completely
        const loseBtn = document.getElementById(userchoice);
        if (loseBtn) {
            loseBtn.classList.add('faded');
            loseBtn.style.opacity = '0.3';
        }
    }

    const resultEl = document.getElementById('result');
    if (resultEl) resultEl.textContent = result;
    updateScoreboard();
    addHistoryDot(resultType);
}

// Event listeners for choice buttons
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorBtn = document.getElementById('scissor');

if (rockBtn) rockBtn.addEventListener('click', () => userSelect('rock'));
if (paperBtn) paperBtn.addEventListener('click', () => userSelect('paper'));
if (scissorBtn) scissorBtn.addEventListener('click', () => userSelect('scissor'));

// Reset functionality
const resetBtn = document.getElementById('reset');
if (resetBtn) {
    resetBtn.addEventListener('click', () => {
        userscore = 0;
        computerscore = 0;
        const resEl = document.getElementById('result');
        if (resEl) resEl.textContent = 'Make your choice!';
        updateScoreboard();
        clearSelectedState();
        const history = document.getElementById('history');
        if (history) history.innerHTML = '';
    });
}

// Rules modal functionality
const rulesBtn = document.getElementById('rules');
if (rulesBtn) {
    rulesBtn.addEventListener('click', () => {
        const overlay = document.getElementById('rulesOverlay');
        if (overlay) overlay.classList.add('show');
    });
}

const closeRulesBtn = document.getElementById('closeRules');
if (closeRulesBtn) {
    closeRulesBtn.addEventListener('click', () => {
        const overlay = document.getElementById('rulesOverlay');
        if (overlay) overlay.classList.remove('show');
    });
}

// Close modal when clicking outside
const rulesOverlay = document.getElementById('rulesOverlay');
if (rulesOverlay) {
    rulesOverlay.addEventListener('click', (e) => {
        if (e.target.id === 'rulesOverlay') {
            e.target.classList.remove('show');
        }
    });
}

// Keyboard support for choice buttons
document.addEventListener('keydown', (e) => {
    if (e.key === '1' || e.key === 'r') userSelect('rock');
    if (e.key === '2' || e.key === 'p') userSelect('paper');
    if (e.key === '3' || e.key === 's') userSelect('scissor');
});