// Reto: Juego piedra pael o tijera
// Modificable
var player = "piedra";
var elements = ['piedra', 'papel', 'tijera'];

// Start
const result = startGame(player);
console.log(result);

// Functions
function startGame(player) {
    var message = "Tu";
    const machine = Math.floor((Math.random() * elements.length));
    const optionMachine = elements[machine];

    switch (player) {
        case optionMachine:
            message = "Empate ";
            break;
        default:
            message += logicGame(optionMachine);
            break;
    }
    message += `la maquina eligio ${optionMachine} y tu elegiste ${player}`
    return message;
}

function logicGame(optionMachine) {
    var message = " Ganaste ";
    var arrayTemp = orderElements(elements);
    // Take Desition
    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        const flag = arrayTemp[index];
        if ((optionMachine == element) && (player == flag)) {
            message = " Perdiste ";
        }
    }
    return message;
}

function orderElements(items) {
    var tempArray = []
    var count = 0;
    for (let index = 0; index < items.length; index++) {
        if(index === 0){
            count = items.length - 1; 
        }else{
            count = (index - 1);
        }
        const element = items[count];
        tempArray[index] = items[count];
    }
    return tempArray;
}
