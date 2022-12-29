// Code your solutions in this file
// Global Variables
const names = ["Guadalupe", "Ollie", "Aki"];



// Functions
function writeCards(names, event) {
    let thankYouMessage = [];
    for (let i = 0; i < names.length; i++) {
        thankYouMessage.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        // debugger;
    }
    return thankYouMessage; 
}


function countDown(i) {
    while (i >= 0) {
        console.log(i)
        i--;
        debugger;
    }
}