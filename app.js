document.addEventListener('DOMContentLoaded',() => {

  //card optiond
  const cardArray= [
    {
      name: 'batman',
      img: 'images/batman.png'
    },
    {
      name: 'batman',
      img: 'images/batman.png'
    },
    {
      name: 'superman',
      img: 'images/superman.jpg'
    },
    {
      name: 'superman',
      img: 'images/superman.jpg'
    },
    {
      name: 'minion',
      img: 'images/minion.png'
    },
    {
      name: 'minion',
      img: 'images/minion.png'
    },
    {
      name: 'cat',
      img: 'images/cat.jpg'
    },
    {
      name: 'cat',
      img: 'images/cat.jpg'
    },
    {
      name: 'ironmann',
      img: 'images/ironman.png'
    },
    {
      name: 'ironmann',
      img: 'images/ironman.png'
    },
    {
      name: 'angrybird',
      img: 'images/angrybird.png'
    },
    {
      name: 'angrybird',
      img: 'images/angrybird.png'
    }
  ]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsWon = []
var cardsChosenId = []

//create your board
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    var card = document.createElement('img')
    card.setAttribute('src','images/blank.jpg')
    card.setAttribute('data-id',i)
    card.addEventListener('click',flipCard)
    grid.appendChild(card)
  }
}

//check for matches
function checkForMatch() {
  var cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenId[0]
  const optionTwoId = cardsChosenId[1]
  if (cardsChosen[0] === cardsChosen[1]) {
    alert('You found a match!')
    cards[optionOneId].setAttribute('src', 'images/white.jpg')
    cards[optionTwoId].setAttribute('src', 'images/white.jpg')
    cardsWon.push(cardsChosen)
  }
    else {
      cards[optionOneId].setAttribute('src', 'images/blank.jpg')
      cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
      alert('You didn\'t found a match, Sorry try again!')
    }
    cardsChosen = []
    cardsChosenId = []

    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
}


//flip your card
function flipCard() {
  var cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenId.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500)
  }
}

createBoard()


})
