// 1. Maak drie knoppen op de pagina: Sorteer op prijs, AmbiLight TV's en Uitverkochte exemplaren. Gebruik de code die je in opdracht 1b, 1c en 1d hebt gemaakt en schrijf dit om naar functies zodat je ze kunt aanroepen op het moment dat de buttons geklikt worden. Zorg ervoor dat de functies de uitkomsten in de console loggen als de gebruiker op de bijbehorende knop klikt. Tip: lees hiervoor paragraaf 7.4 op EdHub eens door!


// Filteren op uitverkochte tv's:

function filterSoldOutTvs() {
    const soldOut = inventory.filter((tv) => {
        return tv.originalStock === tv.sold;
    })
    console.log(soldOut);
    createTvList(soldOut)
}

// Filteren op AmbiLight:

function filterAmbiLightTvs() {
    const hasAmbiLight = inventory.filter((tv) => {
        return tv.options.ambiLight === true
    })
    console.log(hasAmbiLight);
    createTvList(hasAmbiLight);
}

// Sorteren op prijs van laag naar hoog:

function sortByPrice() {
    const sortedByPrice = inventory.sort((a, b) => {
        return a.price - b.price;
    })
    console.log(sortedByPrice);
    createTvList(sortedByPrice)
}

// Referenties naar button-element opslaan:

const buttonSortByPrice = document.getElementById('button-sort-by-price');
const buttonFilterAmbiLight = document.getElementById('button-filter-ambilight');
const buttonFilterSoldOut = document.getElementById('button-filter-sold-out');

// Event listener plaatsen die de functie activeert zodra er op de button geklikt wordt:

buttonSortByPrice.addEventListener('click', sortByPrice);
buttonFilterAmbiLight.addEventListener('click', filterAmbiLightTvs);
buttonFilterSoldOut.addEventListener('click', filterSoldOutTvs);

// De console.log commando's zetten de uitkomst van de functies in de console.


// 2. Zorg er nu voor, in plaats van dat de uitkomsten in de console worden gelogd, dat de uitkomsten worden meegegeven aan jouw functie uit 4e zodat de resultaten daadwerkelijk op de pagina weergegeven worden!

// Onder de console.logs hierboven (die de output in de console zetten), plaats ik nu de functie uit opdracht 4e (createTvList) en geef ik hieraan de output constanten mee als argument. Ik ben hiertoe gekomen door te proberen en experimenteren, en vind het nog moeilijk te vatten nog hoe dit nu  precies werkt, maar de knoppen doen hierdoor in ieder geval wat de bedoeling is, en geven de resultaten van de functies op de pagina zelf.


