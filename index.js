let cards = []
let playerName = prompt("Enter name: ")
let playerMoney = 0
let sum = 0
let blackJack = false
let continueGame = false
let message = ""
let player = {
    name: playerName,
    money: playerMoney
}
let messageDisplay = document.getElementById('message-display')
let sumDisplay = document.getElementById('sum-display')
let cardsDisplay = document.getElementById('cards-display')
let playerDisplay = document.getElementById('player-display')
playerDisplay.textContent = player.name + ": $" + player.money

function startGame() {
    
    continueGame = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    renderGame()

}

function getRandomCard() {

    let randomCard = Math.floor(Math.random() * 13) + 1

    if (randomCard === 1) { 
        return 11
    }
    else if (randomCard === 11 || randomCard === 12 || randomCard === 13) {
        return 10
    }
    else { 
        return randomCard
    }

}

function renderGame() {

    cardsDisplay.textContent = "Cards: " 

    for (let i = 0; i < cards.length; i++) {
        cardsDisplay.textContent += cards[i] + " "
    }

    sumDisplay.textContent = "Sum: " + sum

    if (sum <= 20 && continueGame) {
        message = "Draw a new card?"
    } else if (sum === 21) {
        message = "Blackjack!"
        blackJack = true
        player.money += 50
        continueGame = false
    } else {
        message = "Game Over."
        player.money -= 50
        continueGame = false
    }

    messageDisplay.textContent = message

    if (player.money < 0) {
        playerDisplay.textContent = player.name + ": -$" + (player.money * -1)
    }
    else {
        playerDisplay.textContent = player.name + ": $" + player.money
    }
}


function newCard() {

    if (continueGame) {
        let card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
    }

}