let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'];

let deck = [];

for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
   for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
       deck.push(values[valueIdx] + ' of '+ suits[suitIdx]);
   }
}

for (let i = 0; i < deck.length; i++) {
    console.log(deck[i]);
    
}


console.log("Welcome to Blackjack!");
