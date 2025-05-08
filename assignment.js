const task3Element = document.getElementById('task-3');

function firstFunc() {
    alert('My first Function')
}

function secondFunc(text) {
    return text
}

alert(secondFunc('My second function'))

task3Element.addEventListener('click', firstFunc)

function thirdFunc(name, age, level) {
    let sentence = `${name} is a young ${age}yrs old boy in ${level}level!`
    return sentence
}

alert(thirdFunc("Tade", 18, 300))