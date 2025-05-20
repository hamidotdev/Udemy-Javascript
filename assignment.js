const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
if (randomNumber > 0.7) {
    alert("The Number is definitely less than 0.7")
}
console.log(randomNumber);




let randomFigures = [3,2,1,4,5,4]
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
    // if (!allDigits) {
    //     allDigits = lastFig
    // } else {
    //     allDigits += ", " + lastFig;
    // }
    allDigits = `${randomFigures}`
}
console.log(allDigits);