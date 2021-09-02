const startBtn = document.querySelector('#startBtn')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const dashesEl = document.querySelector('.guess-container')
const scoreEl = document.querySelector('#score')

let winningWord = ''
let score = 10
let dashes = []
let displayedWord = ''

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


const displayWord = (word) => {

}

startBtn.addEventListener('click', () => {
    winningWord = document.querySelector('#winning-word').value

    screen1.style.display = 'none'
    screen2.style.display = 'block'

    for (let i=0; i<winningWord.length; i++) {
        dashes.push('_')
    }

    winningWord.split('').forEach( (dash, idx) => {
        let span = document.createElement('span')
        span.textContent = '_'
        dashesEl.appendChild(span)
    })

    //dashesEl.innerHTML = dashes.join(' ')
})



// SCREEN 2

const guessField = document.querySelector('#guessField')
const guessBtn = document.querySelector('#guessBtn')

guessBtn.addEventListener('click', () => {
    const letter = guessField.value

    if (checkLetter(letter, winningWord)) {
        console.log('yes !')

        let newWinner = winningWord
        const spans = dashesEl.children

        newWinner.split('').forEach((ltr, idx) => {
            if (ltr === letter) {
                console.log(spans[idx])
                console.log(newWinner[idx])
                spans[idx].textContent = newWinner[idx]
            }
        })

    } else {
        score --
        displayScore(score)
    }
})


