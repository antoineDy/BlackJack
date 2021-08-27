
const messageEl = document.getElementById("message-el")
const sumEl = document.getElementById("sum-el")
const cardsEl = document.querySelector("#cards-el")
const playerEl = document.querySelector("#player-el")
const betEl = document.querySelector("#bet-el")

const btnStart = document.getElementById("btn-start")
const btnHit = document.querySelector("#btn-hit")
const btnStand = document.querySelector("#btn-stand")

const btnPlus = document.getElementById("btn-plus")
const btnMinus = document.querySelector("#btn-minus")

const dcardsEl = document.querySelector("#dcards-el")
const dsumEl = document.querySelector("#dsum-el")

let bet = 5

let player = {
    name : "Antoine", 
    chips : 100
}

let dealerCards = []
let dealerSum = 0

let cards = []
let sum = 0

let isAlive = false
let hasBlackJack = false
let message = ""

playerEl.textContent = player.name + " : " + player.chips + "€"

betEl.textContent = bet + "€"

let two = ["<img src='PNG/2C.png'>","<img src='PNG/2D.png'>","<img src='PNG/2H.png'>","<img src='PNG/2S.png'>"]
let three = ["<img src='PNG/3C.png'>","<img src='PNG/3D.png'>","<img src='PNG/3H.png'>","<img src='PNG/3S.png'>"]
let four = ["<img src='PNG/4C.png'>","<img src='PNG/4D.png'>","<img src='PNG/4H.png'>","<img src='PNG/4S.png'>"]
let five = ["<img src='PNG/5C.png'>","<img src='PNG/5D.png'>","<img src='PNG/5H.png'>","<img src='PNG/5S.png'>"]
let six = ["<img src='PNG/6C.png'>","<img src='PNG/6D.png'>","<img src='PNG/6H.png'>","<img src='PNG/6S.png'>"]
let seven = ["<img src='PNG/7C.png'>","<img src='PNG/7D.png'>","<img src='PNG/7H.png'>","<img src='PNG/7S.png'>"]
let eight = ["<img src='PNG/8C.png'>","<img src='PNG/8D.png'>","<img src='PNG/8H.png'>","<img src='PNG/8S.png'>"]
let nine = ["<img src='PNG/9C.png'>","<img src='PNG/9D.png'>","<img src='PNG/9H.png'>","<img src='PNG/9S.png'>"]
let ten = [
    "<img src='PNG/10C.png'>","<img src='PNG/10D.png'>","<img src='PNG/10H.png'>","<img src='PNG/10S.png'>",
    "<img src='PNG/JC.png'>","<img src='PNG/JD.png'>","<img src='PNG/JH.png'>","<img src='PNG/JS.png'>",
    "<img src='PNG/QC.png'>","<img src='PNG/QD.png'>","<img src='PNG/QH.png'>","<img src='PNG/QS.png'>",
    "<img src='PNG/KC.png'>","<img src='PNG/KD.png'>","<img src='PNG/KH.png'>","<img src='PNG/KS.png'>"
]
let eleven = ["<img src='PNG/AC.png'>","<img src='PNG/AD.png'>","<img src='PNG/AH.png'>","<img src='PNG/AS.png'>"]



btnPlus.addEventListener('click', () => {

    bet++
    betEl.textContent = bet + "€"

})

btnMinus.addEventListener('click', () => {

    bet--
    betEl.textContent = bet + "€"

})

function getRandomCard(){

    let p = Math.floor(Math.random() * 10 + 1)
    console.log(p)

    if( p === 2){

        let j = Math.floor(Math.random() * 3 + 1)
        sum += 2
        return two[j]

    }
    if( p === 3){

        let j = Math.floor(Math.random() * 3 + 1)
        sum += 3
        return three[j]

    }
    if( p === 4){

        let j = Math.floor(Math.random() * 3 + 1)
        sum += 4
        return four[j]

    }
    if( p === 5){

        let j = Math.floor(Math.random() * 3 + 1)
        sum += 5
        return five[j]

    }
    if( p === 6){

        let j = Math.floor(Math.random() * 3 + 1)
        sum += 6
        return six[j]

    }
    if( p === 7){

        let j = Math.floor(Math.random() * 3 + 1)
        sum += 7
        return seven[j]


    }
    if( p === 8){

        let j = Math.floor(Math.random() * 3 + 1)
        sum += 8
        return eight[j]

    }
    if( p === 9){

        let j = Math.floor(Math.random() * 3 + 1)
        sum += 9
        return nine[j]

    }
    if( p === 10){

        let j = Math.floor(Math.random() * 16 + 1)
        sum += 10
        return ten[j]

    }
    if(p === 1){

        let j = Math.floor(Math.random() * 3 + 1)
        sum += 11
        return eleven[j]

    }

}

function getRandomCardDealer(){

    let p = Math.floor(Math.random() * 10 + 1)

    if( p === 2){

        let j = Math.floor(Math.random() * 3 + 1)
        dealerSum += 2
        return two[j]

    }
    if( p === 3){

        let j = Math.floor(Math.random() * 3 + 1)
        dealerSum += 3
        return three[j]

    }
    if( p === 4){

        let j = Math.floor(Math.random() * 3 + 1)
        dealerSum += 4
        return four[j]

    }
    if( p === 5){

        let j = Math.floor(Math.random() * 3 + 1)
        dealerSum += 5
        return five[j]

    }
    if( p === 6){

        let j = Math.floor(Math.random() * 3 + 1)
        dealerSum += 6
        return six[j]

    }
    if( p === 7){

        let j = Math.floor(Math.random() * 3 + 1)
        dealerSum += 7
        return seven[j]


    }
    if( p === 8){

        let j = Math.floor(Math.random() * 3 + 1)
        dealerSum += 8
        return eight[j]

    }
    if( p === 9){

        let j = Math.floor(Math.random() * 3 + 1)
        dealerSum += 9
        return nine[j]

    }
    if( p === 10){

        let j = Math.floor(Math.random() * 16 + 1)
        dealerSum += 10
        return ten[j]

    }
    if( p === 1){

        let j = Math.floor(Math.random() * 3 + 1)
        dealerSum += 11
        return eleven[j]

    }

}

function startGame(){

    isAlive = true
    player.chips -= bet
    sum = 0
    dealerSum = 0

    let dealerFirstCard = getRandomCardDealer()
    dealerCards = [dealerFirstCard]  

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]  

    btnStart.disabled = true
    btnStand.disabled = false

    renderGame()
}

function renderGame(){

    dcardsEl.innerHTML = "Dealer Cards : " + dealerCards[0] 

    dsumEl.innerHTML = "Sum : " + dealerSum

    cardsEl.innerHTML = "Cards : "

    sumEl.innerHTML = "Sum : " + sum  

    playerEl.innerHTML = player.name + " : " + player.chips + "€"

    for(let i=0; i < cards.length; i++){

        cardsEl.innerHTML += cards[i]

    }

    if(sum <= 20){
        message = "Do you want to draw a card ?"
    }else if(sum === 21){
        message = "BlackJack !"
        hasBlackJack = true
    }else if(sum > 21){
        message = "You are out of the bizness !"
        isAlive = false
    }
    messageEl.innerHTML = message

    if(sum > 21){

        for(let i = 0; i < cards.length; i++){

            
        
        }

    }
    if(sum > 21){

        btnStart.disabled = false

    }
    else if(sum < 21){

        isAlive = true
        message = "Do you want to draw a card ?"
        messageEl.innerHTML = message

    }

}

function newCard(){

    if(sum <= 21){

        let card = getRandomCard()

        cards.push(card)

        renderGame()

    }
}

function dealerHand(){

    let newCard = getRandomCardDealer()
    dealerCards.push(newCard)

    btnStart.disabled = false

    finishGame()

}

function finishGame(){

    dcardsEl.innerHTML = "Cards : " + dealerCards[0] 

    for(let i = 1;i < dealerCards.length; i++){

        dcardsEl.innerHTML += dealerCards[i] 

    }

    dsumEl.innerHTML = "Sum : " + dealerSum

    if(dealerSum <= 17){

        dealerHand()

    }else{

        btnStand.disabled = true
        resultGame()

    }
}

function resultGame(){

    if(hasBlackJack === true && dealerSum > 21){

        player.chips += bet*2.5

    }else if(hasBlackJack === true && dealerSum < 21){

        player.chips += bet*2.5

    }
    else if(hasBlackJack === true && dealerSum === 21){

        player.chips += bet

    }
    else if(sum > dealerSum && isAlive === true && dealerSum <= 20){

        player.chips += bet*2

    }else if(sum < dealerSum && isAlive === true && dealerSum > 21){

        player.chips += bet*2

    }else if(sum === dealerSum){

        player.chips += bet

    }

    console.log(player.chips)

    playerEl.innerHTML = player.name + " : " + player.chips + "€"
}
