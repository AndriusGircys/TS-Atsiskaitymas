/* ------------------------------ TASK 3 -----------------------------------
Perpanaudokite aprašytą type'ą, kad sukurti naujus tipus, kuriuos priskyrus kintamiesiems,
 visas kodas veiktų teisingai.
Kur komentare parašyta "error", ta eilutė po tipo priskyrimo kintamąjam turėtų mesti klaidą.
 Pasitikrinus užkomentuoti visą eilutę, kad leistų sukompiliuoti.

Pastaba: Aprašyto tipo NEKEISTI
-------------------------------------------------------------------------- */


type TipasNaudoti = {
  marke: string;
  modelis: string;
  metai: number;
  spalva: string;
  kilometrazas: number;
};

// Naujas tipas dviratis: turi tik dalį savybių iš TipasNaudoti
type Dviratis = Partial<TipasNaudoti> & Pick<TipasNaudoti, 'metai' | 'spalva'>;

// Naujas tipas naujaMasina: atitinka visus TipasNaudoti reikalavimus
type NaujaMasina = TipasNaudoti;

// Naujas tipas senaMasina: išplėstas TipasNaudoti su papildomomis savybėmis
type SenaMasina = TipasNaudoti & { surudyjesDugnas: boolean };

// Naudojamas tipas dviratis
const dviratis: Dviratis = {
  metai: 1999,
  spalva: 'ruda'
};

// Naudojamas tipas naujaMasinatsc 
const naujaMasina: NaujaMasina = {
  marke: 'bmw',
  modelis: '6',
  metai: 2025,
  spalva: 'juoda',
  kilometrazas: 565654  // Pridėta reikiama savybė
};

// Naudojamas tipas senaMasina su papildomomis savybėmis
const senaMasina: SenaMasina = {
  marke: 'audi',
  modelis: 'a6',
  metai: 2025,
  spalva: 'sidabrine',
  kilometrazas: 999999,
  surudyjesDugnas: true
};