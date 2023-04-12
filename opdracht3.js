// Opdracht 3a: Gebruik een array-methode om alle tv merken (zoals Philips, NIKKEI, etc.) in een lijst op de pagina weer te geven. Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan. Dat er dubbele namen in zitten, is niet erg.

// Pseudocode:
// ul-element aanmaken in HTML met id list-of-brands waar de gegevens aan gekoppeld kunnen worden.
// De getElementById methode gebruiken om de referentie hiernaar op te slaan.
// Variabele tvBrandsListItem aanmaken en hier de map-methode overheen laten loopen.
// in de return van elke tv een list-item op de pagina maken.
// Met .innerHTML de items op de pagina zetten.
// De lijst ziet er dan niet mooi uit met komma's, maar dit is op te lossen door de join-methode te gebruiken, die van een array een string maakt. Als parameter staat er '' zodat er geen komma of ander scheidingsteken tussen de items komt te staan.


// const listOfBrands = document.getElementById('list-of-brands');

// const tvBrandsListItems = inventory.map((tv) => {
//    return `<li>${tv.brand}</li>`;
// });

// listOfBrands.innerHTML = `${tvBrandsListItems.join('')}`;

// Bovenstaande is uitgecomment na het schrijven van de functie bij opdracht 3b.


// Opdracht 3b: Schrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht. Het is handig om onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken. Tip: vergeet deze functie-declaratie niet aan te roepen!

function makeBrandList(tvArray) {
    const listOfBrands = document.getElementById('list-of-brands');

    const tvBrandsListItems = tvArray.map((tv) => {
        return `<li>${tv.brand}</li>`;
    });

    listOfBrands.innerHTML = `${tvBrandsListItems.join('')}`;
}

makeBrandList(inventory);  // Aanroepen van de functie.

// Ik begrijp hieruit dat je op deze manier elke array in de functie kan stoppen, niet alleen deze inventory. De code bij 3a was specifiek voor deze array.

