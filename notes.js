// Global Variables
const names = ["Guadalupe", "Ollie", "Aki"];



// Functions
function writeCards(names, event) {
    let thankYouMessage = [];       // Creates a new, empty array to hold the thank you messages
    for (let i = 0; i < names.length; i++) {        // 
        thankYouMessage.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);       // Prints out message that takes 2 arguments: (names, event)
        debugger;    // type 'cont'; type 'repl', type 'i', type 'thankYouMessage',, type 'Ctrl' + 'C' twice, & repeat
    }
    return thankYouMessage;         // After the loop finishes & all of the messages have been added to the new array, return the new array
}
console.log(writeCards(names, "birthday"));


function countDown(i) {
    while (i >= 0) {
        console.log(i)
        i--;
        debugger;
    }
}

// console.log(countDown(10));


// function writeCards(names) {
//     for(let i = 0; i < names.length; i++) {
//         console.log(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
//         debugger;
//     }

//     return writeCards = names;
// }
// writeCards(names);

// const gifts = ["XBOX", "PS5", "Nintendo Switch", "Steam Deck"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     }

//     return gifts;
// }
// wrapGifts(gifts);