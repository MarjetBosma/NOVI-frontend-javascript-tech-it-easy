// Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

// Pseudocode:
// Output variabele voor verkochte tv's aanmaken en deze op waarde 0 zetten.
// Met een for-loop over de gehele lengte van de array heen loopen.
// Bij elk tv-type nagaan hoeveel er verkocht zijn en dit optellen bij het vorige aantal.
// Het totale aantal verkochte tv's teruggeven.

let soldTvs = 0;

for (let i = 0; i < inventory.length; i++) {
    soldTvs += inventory[i].sold;    // Verkorte versie van soldTvs = soldTvs + inventory[i].sold
}
console.log(soldTvs);


// ---------------------------------------------------
// Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.

// Pseudocode:
// Span element aanmaken in HTML met id sold-tvs-container waar de gegevens aan gekoppeld kunnen worden
// Variabele aanmaken soldTvsContainer
// Hierin de getElementById methode gebruiken voor de variabele soldTvs uit het script
// innerHTML methode gebruiken met de tekst (h3) "Aantal verkochte tv's", en daaronder een h2 met een template literal, waar het aantal tv's in wordt weergegeven.
// Vervolgens in de CSS-file de kleur aanpassen naar groen.

const soldTvsContainer = document.getElementById('sold-tvs');

soldTvsContainer.innerHTML = `
  <h3>Aantal verkochte tv's</h3>
  <h2>${soldTvs}</h2>
`;


// ---------------------------------------------------
// Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

// Pseudocode:
// Output variabele voor ingekochte tv's aanmaken en deze op waarde 0 zetten.
// Met een for-loop over de gehele lengte van de array heen loopen.
// Bij elk tv-type nagaan hoeveel er ingekocht zijn en dit optellen bij het vorige aantal.
// Het totale aantal ingekochte tv's teruggeven.

let originalStock = 0;

for (let i = 0; i < inventory.length; i++) {
    originalStock += inventory[i].originalStock;    // Verkorte versie van originalStock = originalStock + inventory[i].originalStock
}
console.log(originalStock);

// ----------------------------------------
// Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.

// Pseudocode:
// Span element aanmaken in HTML met id original-stock waar de gegevens aan gekoppeld kunnen worden.
// Hierin de getElementById methode gebruiken voor de variabele originalStock uit het script.
// innerHTML methode gebruiken met de tekst (h3) "Aantal ingekochte tv's", en daaronder een h2 met een template literal, waar het aantal tv's in wordt weergegeven.
// Vervolgens in de CSS-file de kleur aanpassen naar blauw.

const originalStockContainer = document.getElementById('original-stock');

originalStockContainer.innerHTML = `
  <h3>Aantal ingekochte tv's</h3>
  <h2>${originalStock}</h2>
`;


// --------------------------------------------
// Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.

// Eerst een script schrijven dat berekent hoeveel tv's er nog verkocht moeten worden.

// Pseudocode:
// Output variabele voor nog te verkopen tv's aanmaken en deze op waarde 0 zetten.
// Met een for-loop over de gehele lengte van de array heen loopen.
// Berekenen hoeveel tv's nog verkocht moeten worden door het aantal dat verkocht is af te trekken van hoeveel er waren ingekocht.


let tvsToSell = 0

for (let i = 0; i < inventory.length; i++) {
    tvsToSell = originalStock - soldTvs;
}
console.log(tvsToSell);

// Daarna zorgen dat dit op de pagina wordt weergegeven.

// Pseudocode:
// Span element aanmaken in HTML met id tvs-to-sell waar de gegevens aan gekoppeld kunnen worden.
// Hierin de getElementById methode gebruiken voor de variabele tvsToSell uit het script.
// innerHTML methode gebruiken met de tekst (h3) "Aantal nog te verkopen tv's", en daaronder een h2 met een template literal, waar het aantal tv's in wordt weergegeven.
// Vervolgens in de CSS-file de kleur aanpassen naar rood.

const tvsToSellContainer = document.getElementById('tvs-to-sell');

tvsToSellContainer.innerHTML = `
  <h3>Aantal nog te verkopen</h3>
  <h2>${tvsToSell}</h2>
`;

// Achteraf gezien had dit niet in twee stappen gehoeven, in de opdrachten hierna probeer ik steeds een script te maken dat ook direct de output op de pagina zet.