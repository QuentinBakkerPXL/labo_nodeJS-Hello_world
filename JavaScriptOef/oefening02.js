let inputPrice = prompt("Geef de inkoopprijs.");
let inputBtw = prompt("Geef het BTW-tarief.");

let price = parseFloat(inputPrice);
let btw = parseFloat(inputBtw);

if (price && btw) {
    alert("De verkoopprijs is " + (inputPrice + (inputPrice * inputBtw / 100)));
} else {
    alert("Er ging iets verkeerd.");
}