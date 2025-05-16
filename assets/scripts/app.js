const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 12;
const HEAL_VALUE = 15;

const MODE_ATTACK = "ATTACK"
const MODE_STRONG_ATTACK = "STRONG ATTACK"
const LOG_EVENT_PLAYER_ATTACK = "PLAYER ATTACK"
const LOG_EVENT_PLAYER_STRONG_ATTACK = "PLAYER STRONG ATTACK"
const LOG_EVENT_MONSTER_ATTACK = "MONSTER ATTACK"
const LOG_EVENT_PLAYER_HEAL = "PLAYER_HEAL"
const LOG_EVENT_GAME_OVER = "GAME OVER"

const enteredValue = prompt('Input a maximum life for you and the Monster.', '100')


let choosenMaxLife = parseInt(enteredValue) 

if(isNaN(choosenMaxLife) || choosenMaxLife <= 0) {
    choosenMaxLife = 100
}
  
let currentMonsterHealth = choosenMaxLife
let currentPlayerHealth = choosenMaxLife
let hasBonusLife = true
let battleLog = []

adjustHealthBars(choosenMaxLife)

function writeToLog(ev, val, monsterHealth, playerHealth) {
    let logEntry;
    if (ev === LOG_EVENT_PLAYER_ATTACK) {
        logEntry = {
            event: ev,
            value: val,
            target: "MONSTER",
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        }
    } else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {
        logEntry = {
            event: ev,
            value: val,
            target: "MONSTER",
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        }
    } else if (ev === LOG_EVENT_PLAYER_HEAL) {
        logEntry = {
            event: ev,
            value: val,
            target: "PLAYER",
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        }
    } else if (ev === LOG_EVENT_MONSTER_ATTACK) {
        logEntry = {
            event: ev,
            value: val,
            target: "PLAYER",
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        }
    } else if (ev === LOG_EVENT_GAME_OVER) {
        logEntry = {
            event: ev,
            value: val,
            target: "END_GAME",
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        }
    }
    battleLog.push(logEntry)
}

function reset() {
    resetGame(choosenMaxLife)
    currentMonsterHealth = choosenMaxLife
    currentPlayerHealth = choosenMaxLife
}

function endRound() {
    const initialPlayerHealth = currentPlayerHealth
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE)
    currentPlayerHealth -= playerDamage
    writeToLog(LOG_EVENT_MONSTER_ATTACK, playerDamage, currentMonsterHealth, currentPlayerHealth)

    if(currentPlayerHealth <= 0 && hasBonusLife) {
        currentPlayerHealth = initialPlayerHealth
        setPlayerHealth(initialPlayerHealth)
        removeBonusLife()
        hasBonusLife = false
        alert(`You would be dead but the bonus life saved your ass!😂😂😂
               HINT: Click the "HEAL" button to revive
               your health`)
    }

    if(currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You won!')
        writeToLog(LOG_EVENT_GAME_OVER, "PLAYER WON", currentMonsterHealth, currentPlayerHealth)
    } else if(currentPlayerHealth <= 0 && currentMonsterHealth > 0){
        alert('You lost!')
        writeToLog(LOG_EVENT_GAME_OVER, "MONSTER WON", currentMonsterHealth, currentPlayerHealth) 
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('This is a Draw')
        writeToLog(LOG_EVENT_GAME_OVER, "THIS IS A TIE", currentMonsterHealth, currentPlayerHealth)
    }
    if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
        reset()
    }
}

function attackMonster(mode) {
    const maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE
    const logAttack = mode === MODE_ATTACK ? LOG_EVENT_PLAYER_ATTACK : LOG_EVENT_PLAYER_STRONG_ATTACK

    // if (mode === MODE_ATTACK) {
    //     maxDamage = ATTACK_VALUE
    //     logAttack = LOG_EVENT_PLAYER_ATTACK
    // } else if (mode === MODE_STRONG_ATTACK) {
    //     maxDamage = STRONG_ATTACK_VALUE
    //     logAttack = LOG_EVENT_PLAYER_STRONG_ATTACK
    // }

    const damage = dealMonsterDamage(maxDamage)
    currentMonsterHealth -= damage
    endRound()
    writeToLog(logAttack, damage, currentMonsterHealth, currentPlayerHealth)
}

function attackHandler() {
    attackMonster(MODE_ATTACK)
}

function strongAttackHandler() {
    attackMonster(MODE_STRONG_ATTACK)
}

function healPlayerHandler() {
    let healValue;
    if (currentPlayerHealth >= choosenMaxLife - HEAL_VALUE) {
        healValue = choosenMaxLife - currentPlayerHealth
        alert(`You can't heal to more than your max initial health`)
    } else {
        healValue = HEAL_VALUE
    }

    if (currentPlayerHealth < choosenMaxLife) {
        increasePlayerHealth(healValue)
        currentPlayerHealth += healValue
        endRound()
        writeToLog(LOG_EVENT_PLAYER_HEAL, healValue, currentMonsterHealth, currentPlayerHealth)
    }
}

function printLogHandler() {
    console.log(battleLog);
}

attackBtn.addEventListener('click', attackHandler)
strongAttackBtn.addEventListener('click', strongAttackHandler)
healBtn.addEventListener('click', healPlayerHandler)
logBtn.addEventListener('click', printLogHandler)