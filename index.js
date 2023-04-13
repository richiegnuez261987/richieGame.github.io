const gameArea = document.getElementById('gameArea');
const fruits = ['🍎', '🍊', '🍇', '🍓', '🍌','🥭','🥝','🍋']; 
const fruitSize = 30; 
const gameDuration = 30; 
const spawnInterval = 1000; 


let score = 0;
let gameTimer;
let fruitInterval;

function startGame() {

    score = 0;
    document.getElementById('score').textContent = score;
    gameArea.innerHTML = '';


    gameTimer = setTimeout(endGame, gameDuration * 1000);

   
    fruitInterval = setInterval(spawnFruit, spawnInterval);
}


function endGame() {
    clearInterval(fruitInterval);
    clearTimeout(gameTimer);
    alert(`Game Over! Your score is ${score}.`);
}


function spawnFruit() {
   
    const fruitElement = document.createElement('div');
    fruitElement.className = 'fruit';
    fruitElement.style.fontSize = fruitSize + 'px';
    fruitElement.textContent = fruits[Math.floor(Math.random() * fruits.length)];
    fruitElement.style.left = Math.random() * (gameArea.offsetWidth - fruitSize) + 'px';
    gameArea.appendChild(fruitElement);


    const moveInterval = setInterval(() => {
        const top = fruitElement.offsetTop;
        fruitElement.style.top = (top + 1) + 'px';

        if (top >= gameArea.offsetHeight - fruitSize) {
            clearInterval(moveInterval);
            fruitElement.remove();
        }
    }, 10);

    fruitElement.addEventListener('click', () => {
        clearInterval(moveInterval);
        fruitElement.remove();
        score++;
        document.getElementById('score').textContent = score;
    });
}