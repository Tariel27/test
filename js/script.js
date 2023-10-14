let range = document.getElementById("customRange");

let loanAmount = document.getElementById("loanAmount");
let generalAmount = document.getElementById("generalAmount");
let bid = document.getElementById("bid");

const withDrawal = 6.0;
const withoutDrawal = 11.9;
const mounts = 12;

const currencyFormat = new Intl.NumberFormat("kg-KG");

range.addEventListener("input", (event) => {
  event.preventDefault();
  setLoanAmount();
  setGeneralAmount();
});

function setLoanAmount() {
  loanAmount.value = range.value;
  loanAmount.innerHTML = currencyFormat.format(range.value) + "c";
}

function setGeneralAmount() {
  generalAmount.innerHTML =
    currencyFormat.format(Math.floor(subtract(range.value))) + "c";
}

function subtract(value) {
  let a = value / mounts;
  return a + percentage(a, bid.value);
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

setWithoutDrawal();
setLoanAmount();

//=====
const phoneInput1 = document.getElementById("phone1");
const nameInput1 = document.getElementById("name1");

phoneInput1.addEventListener("input", function (event) {
  event.preventDefault();
  console.log("change");
  let value = phoneInput1.value;
  let sizes = [3, 6, 9];
  for (let i = 0; i <= 9; i++) {
    if (value.length == sizes[i]) {
      value = value + "-";
    }
  }
  if (value.length > 12) {
    phoneInput1.value = value.substring(0, 12);
  } else {
    phoneInput1.value = value;
  }
});

const phoneInput = document.getElementById("phone");
const nameInput = document.getElementById("name");

phoneInput.addEventListener("input", function (event) {
  event.preventDefault();
  console.log("change");
  let value = phoneInput.value;
  let sizes = [3, 6, 9];
  for (let i = 0; i <= 9; i++) {
    if (value.length == sizes[i]) {
      value = value + "-";
    }
  }
  if (value.length > 12) {
    phoneInput.value = value.substring(0, 12);
  } else {
    phoneInput.value = value;
  }
});

//=====

function callMe() {
  if (isEmpty(nameInput.value) || isEmpty(phoneInput.value)) {
    document.getElementById("notification-block").scrollIntoView();
  } else {
  }
}

function isEmpty(str) {
  return !str || str.length === 0;
}

function sendMail() {
  Email.send({
    SecureToken: "423227b5-269d-4e36-9f59-8df9bb5ebf31",
    To: "tulpar-car@mail.ru",
    From: "tulpar-car@mail.ru",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}
