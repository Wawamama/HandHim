const startBtn = document.querySelector('#startBtn')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const dashesEl = document.querySelector('.guess-container')
const scoreEl = document.querySelector('#score')

let winningWord = ''
let score = 10
let dashes = []

startBtn.addEventListener('click', () => {
    winningWord = document.querySelector('#winning-word').value

    screen1.style.display = 'none'
    screen2.style.display = 'block'

    for (let i=0; i<winningWord.length; i++) {
        dashes.push('_')
    }

    dashesEl.innerHTML = dashes.join(' ')
})

const checkLetter = (letter, word) => {
    const wordArr = word.toLowerCase().split('')
    const letterLow = letter.toLowerCase()
    if (wordArr.includes(letterLow)) {
        return true
    } else {
        return false
    }
}

const displayScore = (score) => {
    if (score <=0) {
        scoreEl.innerHTML = '0'
    } else {
        scoreEl.innerHTML = score
    }
}

// SCREEN 2

const guessField = document.querySelector('#guessField')
const guessBtn = document.querySelector('#guessBtn')

guessBtn.addEventListener('click', () => {
    const letter = guessField.value

    if (checkLetter(letter, winningWord)) {
        console.log('yes !')

        const arr = winningWord.split('')
        newArr = []

        arr.forEach(ltr => {
            if (ltr === letter) {
                newArr.push(letter)
            } else {
                
                newArr.push('_')
            }
        })

        dashesEl.innerHTML = newArr.join(' ')

    } else {
        score --
        displayScore(score)
    }
})


