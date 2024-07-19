/* ------------------------------ TASK 2 -----------------------------------
Aprašykite type'us, kad kintamieji, kuriems jie priskirti būtų teisingai aprašyti ir
 visas kodas veiktų teisingai.
Kur komentare parašyta "error", ta eilutė po tipo priskyrimo kintamąjam turėtų mesti klaidą.
 Pasitikrinus užkomentuoti visą eilutę, kad leistų sukompiliuoti.-------------------------------------------------------------------------- */
type One = {
vardas: string;
pavarde: string;
amzius: number;
}
let one: One = {
  vardas: 'Andrius',
  pavarde: 'Gircys',
  amzius: 33
};
type Two = {
vardas: string;
pavarde: string;
amzius: number;
ugis: number;
svoris: number;
}
let two: Two = {
  vardas: 'Laura',
  pavarde: 'Girciene',
  amzius: 30,
  ugis: 180,
  svoris: 60
};
two = {
  vardas: 'Elonas',
  pavarde: 'Gircys',
  amzius: 4,
  ugis: 150,
  svoris: 32
};
type Three = {
vardas: string;
pavarde: string;
lytis: string;

}
let three: Three = {
  vardas: 'Antanas',
  pavarde: 'Glokas',
  lytis: 'vyras'
};
three = {
  vardas: 'Onute',
  pavarde: 'Walteriene',
  lytis: 'moteris'
};
three = {
  vardas: 'Simas',
  pavarde: 'Wesonas',
  // lytis: 'sraigtasparnis' 
};