let range = document.getElementById("customRange");

let loanAmount = document.getElementById("loanAmount");
let generalAmount = document.getElementById("generalAmount");
let bid = document.getElementById("bid");

const withDrawal = 6.0;
const withoutDrawal = 11.9;
const mounts = 12;

const currencyFormat = new Intl.NumberFormat('kg-KG');

range.addEventListener("input", (event) => {
    event.preventDefault();
    setLoanAmount()
    setGeneralAmount();
});

function setLoanAmount() {
    loanAmount.value = range.value;
    loanAmount.innerHTML = currencyFormat.format(range.value) + "c";
}

function setGeneralAmount() {
    generalAmount.innerHTML = currencyFormat.format(Math.floor(subtract(range.value))) + "c";
}

function subtract(value) {
    let a = (value / mounts)
    return (a + percentage(a, bid.value))
}

function percentage(partialValue, totalValue) {
    return (totalValue / 100) * partialValue;
 } 

function changeBid(newBid) {
    bid.value = newBid;
    bid.innerHTML = newBid + "%";
    setGeneralAmount();
}

function setWithDrawal() {
    changeBid(withDrawal);
}
function setWithoutDrawal() {
    changeBid(withoutDrawal);
}

setWithoutDrawal()
setLoanAmount()