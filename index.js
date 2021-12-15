const winner = document.getElementById('correcta');
const looser = document.getElementById('incorrecta');
const looser2 = document.getElementById('incorrectas');

const winners = document.getElementById('correcta1');
const loosers = document.getElementById('incorrecta2');
const looser3 = document.getElementById('incorrectas3');

let openModal1 = document.getElementById('winnerModal')
let openModal2 = document.getElementById('looserModal')
let openModal3 = document.getElementById('looserModal');
let closeModal = document.getElementById('close');
let closeModal2 = document.getElementById('close2')
let again = document.getElementById('playAgain');
let newGame = document.getElementById('nextLevel');

let congrat = document.getElementById('congrats');


let originalOne = document.getElementById('original');
let newOption = document.getElementById('newOne');
let newOption1 = document.getElementById('newOne1');

let originalOp = document.getElementById('operation');
let operation2 = document.getElementById('operations');

winner.addEventListener('click', openWinnerModal);
looser.addEventListener('click', openLooserModal);
looser2.addEventListener('click', openLooserModal);

winners.addEventListener('click', openCongratModal);
loosers.addEventListener('click', openLooserModal);
looser3.addEventListener('click', openLooserModal);

closeModal.addEventListener('click', close1);
closeModal2.addEventListener('click', close2);

again.addEventListener('click', tryAgain);
newGame.addEventListener('click', newG);

function openCongratModal() {
    congrat.style.display = 'flex';
}

function openWinnerModal() {
    openModal1.style.display = 'flex';
};

function openLooserModal() {
    openModal2.style.display = 'flex';
};

function close1() {
    openModal1.style.display = 'none';
};
function close2() {
    openModal2.style.display = 'none';
};

function tryAgain() {
    openModal2.style.display = 'none'; 
};

function newG() {
    newOption.style.display = 'block';
    openModal1.style.display = 'none';
    originalOne.style.display = 'none';
    originalOp.style.display = 'none';
    operation2.style.display = 'block';
};