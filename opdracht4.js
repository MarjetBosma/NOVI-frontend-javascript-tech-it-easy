// Opdracht 4a: Maak een herbruikbare functie die een string genereert voor de naam van één tv en deze teruggeeft in het format [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV.

// Pseudocode:
// Functie aanmaken generateTvName die een tv-object verwacht.
// Per object uit de array het merk, type en de naam verzamelen.
// Dit teruggeven als een string: [merk] [type] - [naam]

function generateTvName(tv) {
    return `${tv.brand} ${tv.type} - ${tv.name}`;
}


// Opdracht 4b: Maak een herbruikbare functie die de prijs van één tv als parameter verwacht (zoals 379 of 159) teruggeeft in het format €379,- of €159,-.

// Pseudocode:
// Functie aanmaken formatTVPrice die de prijs van een tv verwacht.
// De input is een getal, nl. de value van de key price uit het tv-object.
// De functie zet daar een euroteken voor en een komma en streep achter, en geeft dit terug.


function formatTvPrice(price) {
    return `€${price},-`;
}


// Opdracht 4c: Maak een herbruikbare functie die een string genereert voor alle beschikbare schermgroottes van één tv. De functie geeft dit terug in het format [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc. Als een tv maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm). Wanneer een tv vier schermgroottes heeft ([43, 50, 55, 58]) wordt de output 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm). Let op: om één string te genereren uit een array van schermgroottes zul je een for-loop voor moeten gebruiken.

// Allereerst heb ik opgezocht hoe je inches omrekent naar centimeters: 1 inch = 2,54 cm

// Pseudocode:
// Functie aanmaken ScreenSizeString die een array verwacht met schermgroottes.
// In dit geval is de input het object availableSizes in het tv-object, dit is een array.
// De output is een string met deze waarden, deze variabele is in eerste instantie leeg.
// Vervolgens een for-loop de gehele lengte van de array laten afgaan.
// Voor elk formaat de size in inches weergeven en daarna in cm (inches * 2.54).
// Zolang een item niet het laatste is uit de array moet er een scheidingsstreepje | achter. Voor deze conditie wordt een if-statement gebruikt.

function screenSizeString(sizesArray) {
    let output = '';     // Lege variabele om later in te vullen.

    for (let i = 0; i < sizesArray.length; i++) {
        const sizeInInches = sizesArray[i];
        const sizeInCm = sizesArray[i] * 2.54;

        output += `${sizeInInches} inch (${sizeInCm} cm) `;

        if (i < sizesArray.length - 1) {        // Geldt voor alle items, behalve het laatste.
            output = `${output} | `
        }
}
    return output;
}


// Opdracht 4d: Schrijf een script die de informatie van de Philips 43PUS6504/12 tv weergeeft op de pagina zoals onderstaand voorbeeld. Gebruik de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.

// Bovengenoemde tv heeft indexnummer 0 in de originele inventory-array, dit is nodig om het item als input te kunnen gebruiken.

// Pseudocode:
// <div> element aangemaakt in de HTML met id "single-tv" als anker.
// Variabele singleTv aangemaakt en die gekoppeld aan het HTML-element.
// innerHTML methode gebruiken om een string te maken waarin de output van alle functies komt te staan.
// De naam in een h3-element zetten, de prijs in een h4-element en de schermformaten in een p-element.

// const singleTv = document.getElementById("single-tv");

// singleTv.innerHTML = `
//    <h3>${generateTvName(inventory[0])}</h3>
//    <h4>${formatTvPrice(inventory[0].price)}</h4>
//    <p>${screenSizeString(inventory[0].availableSizes)}</p>
//`
// Na het maken van opdracht 4e heb ik het bovenstaande uitgezet (ook in de HTML).


// Opdracht 4e: Maak een herbruikbare functie die de informatie van alle tv's weergeeft op de pagina. Gebruik hiervoor de map-methode in combinatie met de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.

// Pseudocode:
// <ul> element aangemaakt in de HTML met id "tv-list" als anker.
// Variabele tvList aangemaakt en die gekoppeld aan het HTML-element.
// Variabele listObjects aangemaakt om alle items in op te slaan.
// Mappen over de array met de map-methode.
// De return hiervan is per item een <li> element met daarin de functies uit de voorgaande opdrachten.
// Met de innerHTML methode de list objects in de ul zetten. Er kwamen toen komma's tussen de onderdelen te staan, dus ik heb er één string van gemaakt met de join-methode, zoals ik eerder al deed bij opdracht 3a.
// Aanroepen van de functie met de inventory array als parameter.

function createTvList(tvArray) {
    const tvList = document.getElementById("tv-list");

    const listObjects = tvArray.map((listObject) => {
        return `
        <li id="tv-list-item">
            <h3 id="tv-name">${generateTvName(listObject)}</h3>
            <h4 id="tv-price">${formatTvPrice(listObject.price)}</h4>
            <p id="screen-size">${screenSizeString(listObject.availableSizes)}</p>
        </li>
        `
    });
    tvList.innerHTML = `${listObjects.join('')}`
}
createTvList(inventory);

// Dit vond ik een lastige opdracht, maar ik heb hierbij veel gehad aan de uitleg aan een medestudent in de huiswerkklas.