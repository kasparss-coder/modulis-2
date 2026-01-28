// Nolasām argumentus: tips (piem., km-to-mi) un vērtība
const type = process.argv[2];
const value = Number(process.argv[3]);

// Konversijas koeficienti 
const KM_TO_MI = 0.621371;
const KG_TO_LB = 2.20462;
const L_TO_GAL = 0.264172;

let result;
let unitFrom, unitTo;

// Izmantojam switch, lai noteiktu konversijas virzienu
switch (type) {
    case "km-to-mi":
        result = value * KM_TO_MI;
        unitFrom = "km"; unitTo = "mi";
        break;
    case "mi-to-km":
        result = value / KM_TO_MI;
        unitFrom = "mi"; unitTo = "km";
        break;
    case "kg-to-lb":
        result = value * KG_TO_LB;
        unitFrom = "kg"; unitTo = "lb";
        break;
    case "lb-to-kg":
        result = value / KG_TO_LB;
        unitFrom = "lb"; unitTo = "kg";
        break;
    case "l-to-gal":
        result = value * L_TO_GAL;
        unitFrom = "l"; unitTo = "gal";
        break
    case "gal-to-l":
        result = value / L_TO_GAL;
        unitFrom = "gal"; unitTo = "l";
        break
    default:
        console.log("Nezināms konversijas tips!");
}

// Izvade ar 2 decimālzīmju precizitāti 
if (result !== undefined) {
    console.log(`${value} ${unitFrom} ir ${result.toFixed(2)} ${unitTo}`);
}