// Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.

// Pseudocode:
// Over de array loopen met de map-methode
// Voor elke entry (tv) van de array het tv-type (tv.type) teruggeven.

const tvTypes = inventory.map((tv) => {
   return tv.type;
});
console.log(tvTypes);


// Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.

// Pseudocode:
// Over de array loopen met de filter-methode.
// Voor elke entry nagaan of de tv uitverkocht is: de voorraad (originalStock) is dan gelijk aan het aantal verkochte tv's (sold).
// De gevonden objecten teruggeven.

const soldOut = inventory.filter((tv) => {
    return tv.originalStock === tv.sold;
})
console.log(soldOut);

// Langere versie:

// const soldOut = inventory.filter((tv) => {
//    if (tv.originalStock === tv.sold) {
//        return true;
//    }
//    return false
// });
// console.log(soldOut);


// Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.

// Pseudocode:
// Over de array loopen met de filter-methode
// Voor elke entry nagaan of de tv AmbiLight heeft: options.ambiLight = true
// De gevonden objecten teruggeven.

const hasAmbiLight = inventory.filter((tv) => {
    return tv.options.ambiLight === true
})
console.log(hasAmbiLight);


// Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.

// Pseudocode:
// Over de array loopen met de sort-methode.
// Voor elke entry de prijs nagaan.
// Als de prijs van de huidige entry (a) lager is dan die van de vorige entry (b), deze entry achter de vorige plaatsen.
// Als de prijs van de huidige entry (a) hoger is dan die van de vorige entry (b), deze entry voor de vorige plaatsen.
// De gehele array teruggeven in de door de functie bepaalde volgorde.

// Ik maak een kopie van de inventory, zodat de sort-functie de originele array intact laat, maar gaat rekenen met de kopie.

const inventoryClone = inventory.map((inventory) => {
    return inventory;
});
console.log(inventoryClone)  // Ter controle, ik krijg inderdaad een kopie van de originele array.

inventoryClone.sort((a, b) => {
    return a.price - b.price;
});
console.log(inventoryClone);  // En hier krijg ik de array in volgorde van laagste naar hoogste prijs, zoals de bedoeling was.

// Kortere versie:
// inventoryClone.sort((a, b) => a.price - b.price);
// console.log(inventoryClone);


