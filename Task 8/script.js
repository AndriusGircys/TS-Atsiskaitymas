/* ------------------------------ TASK 8 ----------------------------
Parašykite TS kodą, kuris leis vartotojui įvesti ilgį metrais ir pamatyti jo pateikto ilgio konvertavimą į:
1. Centimetrus (cm) | Formulė: cm = m * 100
2. Colius (in) | Formulė: in = m * 39.37
3. Pėdas (ft) | Formulė: ft = m * 3.281
4. Mylias (mi) | Formulė: mi = m / 1609
5. Jardus (yd) | Formulė: yd = m * 1.094

Pastaba: Atvaizdavimas turi būti matomas su kiekviena įvestimi ir pateikiamas <div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
var input = prompt("Įveskite ilgį metrais:");
var length = parseFloat(input);
if (!isNaN(length)) {
    var cm = length * 100;
    var inches = length * 39.37;
    var feet = length * 3.281;
    var miles = length / 1609;
    var yards = length * 1.094;
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "\n    <div style=\"margin-bottom: 10px;\">\n      <strong>Centimetrai:</strong> ".concat(cm, " cm\n    </div>\n    <div style=\"margin-bottom: 10px;\">\n      <strong>Coliai:</strong> ").concat(inches, " in\n    </div>\n    <div style=\"margin-bottom: 10px;\">\n      <strong>P\u0117dos:</strong> ").concat(feet, " ft\n    </div>\n    <div style=\"margin-bottom: 10px;\">\n      <strong>Mylios:</strong> ").concat(miles, " mi\n    </div>\n    <div style=\"margin-bottom: 10px;\">\n      <strong>Jardai:</strong> ").concat(yards, " yd\n    </div>\n  ");
}
else {
    alert("Įvestas netinkamas ilgis.");
}
