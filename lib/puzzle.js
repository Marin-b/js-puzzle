const words = ['javascript', 'ecmascript', 'ruby', 'nice']
let chosenWord;
const letterInput = document.querySelector("#letter-input");
const letterBox = document.querySelector("#letters");
const lifeBox = document.querySelector('#lifes');
const resetButton = document.querySelector('#reset')


const startGame = () => {
    chosenWord = words[Math.floor(Math.random() * words.length)];
    chosenWord.split('').forEach((letter) => {
        letterBox.insertAdjacentHTML('beforeend', `<span class='letter ${letter}'></span>`)
    })
}

startGame()

const looseLife = () => {
    const lifes = Number.parseInt(lifeBox.innerHTML, 10)
    lifeBox.innerHTML = lifes - 1
    if (lifes <= 1) {
        letterInput.disabled = true;
        alert('Ahaha you lost')
    }
}

const tryLetter = (e) => {
    const letter = e.currentTarget.value
    e.currentTarget.value = ""
    if (chosenWord.split('').includes(letter)) {
        document.querySelectorAll(`.${letter}`).forEach((letterEl) => {
            letterEl.innerHTML = letter
        })
    } else {
        letterBox.insertAdjacentHTML('afterend', `<span>${letter}</span>`);
        looseLife()
    }
}

letterInput.addEventListener('keyup', tryLetter);
resetButton.addEventListener('click', () => {
    window.location.reload()
})