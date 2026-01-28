const num1 = Number(process.argv[2]);
const op = process.argv[3];
const num2 = Number(process.argv[4]);

console.log(`Tu ievadīji: ${num1}, ${op}, ${num2}`);
let rezultats;
let kluda = false;

switch (op) {
    case "+":
        rezultats = num1 + num2;
        break;
    case "-":
        rezultats = num1 - num2;
        break;
    case "*":
        rezultats = num1 * num2;
        break;
    case "/":
        if (num2 === 0) {
            console.log("Kļūda: Dalīšana ar nulli nav atļauta");
            kluda = true;
        } else {
            rezultats = num1 / num2;
        }
        break;
    case "%":
        rezultats = num1 % num2;
        break;
    default:
        console.log(`Kļūda: Nezināms operators "${op}"`);
        kluda = true;
}

if (!kluda) {
    console.log(`${num1} ${op} ${num2} = ${rezultats}`);
}