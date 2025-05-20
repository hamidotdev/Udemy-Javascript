const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
// if (randomNumber > 0.7) {
//     // alert("The Number is definitely less than 0.7")
// }




let randomFigures = [3,2,1,4,5,4,8]
let allNumbers = ''
for (let i = 0; i < randomFigures.length; i++) {
    if(!allNumbers) {
        allNumbers = randomFigures[i]
    } else {
        allNumbers = `${allNumbers}, ${randomFigures[i]}`
    }
}
console.log(allNumbers);

let allDigits = ''
for (const lastFig of randomFigures) {
    if (!allDigits) {
        allDigits = lastFig
    } else {
        allDigits = `${lastFig}, ${allDigits}`
    }
}
console.log(allDigits);

const secRandomNumber = Math.random()
if ((randomNumber > 0.7 && secRandomNumber > 0.7) || (randomNumber <= 0.2 || secRandomNumber <= 0.2)) {
    alert("Numbers are either more than 0.7 or less than 0.2")
    console.log(secRandomNumber);
    console.log(randomNumber);
}
