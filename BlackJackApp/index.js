// DOM variables
let textArea = document.getElementById('text-area');
let newGameBtn = document.getElementById('new-game-btn');
let hitBtn = document.getElementById('hit-btn');
let stayBtn = document.getElementById('stay-btn');

// Game variables
let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    dealer = {},
    player = {},
    deck = [];

hitBtn.style.display = 'none';
stayBtn.style.display = 'none';

newGameBtn.addEventListener('click', function(){
    gameStarted = true;
    gameOver = false;
    playerWon = false;
    
    deck = new Deck();

    dealer = new Player();
    dealer.addCard(deck.getNextCard());
    
    player = new Player();
    player.addCard(deck.getNextCard());

    playerCards = [deck.getNextCard(), deck.getNextCard()];

    newGameBtn.style.display = 'none';
    hitBtn.style.display = 'inline';
    stayBtn.style.display = 'inline';
    showStatus();
});

hitBtn.addEventListener('click' , function(){
    player.addCard(deck.getNextCard());
    dealer.addCard(deck.getNextCard());
});

function Player(){
    this.cards = [];
    this.addCard = function(card){
        this.cards.push(card);
    }

    Object.defineProperty(this, 'score',{
        get: function(){
            let score = 0;
            
            return score;
        }
    });
}

function Card(suit, value){
    this.suit = suit;
    this.value = value;
    this.getCardString = function(){
        return this.value + ' of ' + this.suit;
    }
}

function Deck(){
    let cards = getCards();
    

    function getCards() {
        let cards = [];
        let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
        
        let values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'];
        for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
            for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {

                let card = new Card(suits[suitIdx], values[valueIdx]);
                cards.push(card);
            }
         }

         for (let i = 0; i < cards.length; i++) {
            
            let swapIdx = Math.trunc(Math.random() * cards.length);
            let tmp = cards[swapIdx];
            cards[swapIdx] = cards[i];
            cards[i] = tmp;
        }
         return cards;
    }

    for (let i = 0; i < cards.length; i++) {
        console.log(cards[i].getCardString())    
    }

    this.getNextCard = function(){
        return cards.shift();
    }
}

function showStatus(){
    if(!gameStarted)
    {
        textArea.innerText = 'Welcome to Blackjack!';
    }
    
}

