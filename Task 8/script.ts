/* ------------------------------ TASK 8 ----------------------------
Parašykite TS kodą, kuris leis vartotojui įvesti ilgį metrais ir pamatyti jo pateikto ilgio konvertavimą į:
1. Centimetrus (cm) | Formulė: cm = m * 100
2. Colius (in) | Formulė: in = m * 39.37
3. Pėdas (ft) | Formulė: ft = m * 3.281
4. Mylias (mi) | Formulė: mi = m / 1609
5. Jardus (yd) | Formulė: yd = m * 1.094

Pastaba: Atvaizdavimas turi būti matomas su kiekviena įvestimi ir pateikiamas <div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const input = prompt("Įveskite ilgį metrais:");
const length = parseFloat(input);

if (!isNaN(length)) {
  const cm = length * 100;
  const inches = length * 39.37;
  const feet = length * 3.281;
  const miles = length / 1609;
  const yards = length * 1.094;

  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `
    <div style="margin-bottom: 10px;">
      <strong>Centimetrai:</strong> ${cm} cm
    </div>
    <div style="margin-bottom: 10px;">
      <strong>Coliai:</strong> ${inches} in
    </div>
    <div style="margin-bottom: 10px;">
      <strong>Pėdos:</strong> ${feet} ft
    </div>
    <div style="margin-bottom: 10px;">
      <strong>Mylios:</strong> ${miles} mi
    </div>
    <div style="margin-bottom: 10px;">
      <strong>Jardai:</strong> ${yards} yd
    </div>
  `;
} else {
  alert("Įvestas netinkamas ilgis.");
}