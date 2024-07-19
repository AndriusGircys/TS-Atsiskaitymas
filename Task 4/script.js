/* ------------------------------ TASK 4 -----------------------------------
Parašykite TS funkciją, kuri priima tekstą ir grąžina skaičių susidedantį iš vienetų ir nulių tokio ilgio, kokio yra pats žodis. Skaičius visada prasideda vienetu.

Pvz.:
  "labas"   --> 10101
  "kebabas" --> 1010101
  "a"       --> 1
-------------------------------------------------------------------------- */
function tekstasIKodas(tekstas) {
    // Sukuriame masyvą su vienetais ir nuliais pagal tekstą
    var kodas = Array.from(tekstas).map(function (_, index) { return (index % 2 === 0 ? 1 : 0); }).join('');
    // Grąžiname skaičių
    return parseInt(kodas, 2);
}
// Pavyzdžiai
console.log(tekstasIKodas("labas")); // 10101
console.log(tekstasIKodas("kebabas")); // 1010101
console.log(tekstasIKodas("a"));
