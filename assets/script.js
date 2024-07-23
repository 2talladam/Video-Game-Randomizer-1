const game = document.querySelector('#game');
const input = document.querySelector('#input');
const gameList = document.querySelector('#game-list');
const gameCount = document.querySelector('#game-count');
const closeBtn = document.getElementById('closebtn');

let games = [];


function renderGames() {
    gameList.innerHTML = '';
    gameCount.textContent = games.length;

    for (let i = 0; i < games.length; i++) {
        const game = games[i];

        const li = document.createElement('li');
        li.textContent = game;
        li.setAttribute('data-index', i);

        const button = document.createElement('button');
        button.textContent = 'Remove';

        li.appendChild(button);
        gameList.appendChild(li);
    }
}

function init() {
    const storedGames = JSON.parse(localStorage.getItem('games'));
    if (storedGames !== null) {
        games = storedGames;
    }
    renderGames();
}

function storeGames() {
    localStorage.setItem('games', JSON.stringify(games));
}
input.addEventListener('submit', function (event) {
    event.preventDefault();
    const gameText = game.value.trim();
    if (gameText === ''){
        return;
    }
    games.push(gameText)
    game.value = '';

    storeGames();
    renderGames();
});

gameList.addEventListener('click', function (event) {
    const element = event.target;
    if (element.matches('button') === true) {
        const index = element.parentElement.getAttribute('data-index');
        games.splice(index, 1);
        storeGames();
        renderGames();
    }
});

function randomGame(){
    const random = Math.floor(Math.random() * games.length)
    console.log(random, games[random]);
    const modalBody = document.getElementById('modalBody');
    modalBody.textContent = games[random];
    modal.show();
};

const modal = new bootstrap.Modal (document.querySelector('#exampleModal'));

document.addEventListener('DOMContentLoaded', function() {
    const modalBtn = document.getElementById('modalBtn');
    const modal = document.getElementById('modal');

    modalBtn.addEventListener('click', function() {
        openModal();
    });

    function openModal() {
        if (modal) {
            modal.style.display = 'block';
        } else {
            console.error('Modal element not found');
        }
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const closeBtn = document.getElementsByClassName('closeBtn')[0];
        closeBtn.addEventListener('click', function() {
            closeModal();
        });
    function closeModal() {
        const modal = document.getElementById('modal');
            modal.style.display = 'none';
    }
    const modalCloseButton = document.getElementById('closeModalButton')

console.log(modalCloseButton);
modalCloseButton.addEventListener('click', function(){
    console.log('here');
    modal.hide();
})
console.log(modalCloseButton.click)
});


init();


